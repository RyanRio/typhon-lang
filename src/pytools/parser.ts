import tables from './tables';
import {assert, fail} from './asserts';
import {isDef} from './base';
import Tokenizer from './Tokenizer';
import Tokens from './Tokens';
import tokenNames from './tokenNames';

const OpMap = tables.OpMap;
const ParseTables = tables.ParseTables;
// low level parser to a concrete syntax tree, derived from cpython's lib2to3

/**
 * @param {string} message
 * @param {string} fileName
 * @param {Array.<number>=} begin
 * @param {Array.<number>=} end
 */
function parseError(message: string, fileName: string, begin?: number[], end?: number[]) {
    var e = new SyntaxError(message/*, fileName*/);
    e.name = "ParseError";
    e['fileName'] = fileName;
    if (isDef(begin)) {
        e['lineNumber'] = begin[0];
        e['columnNumber'] = begin[1];
    }
    return e;
}

class Parser {
    filename
    grammar
    stack
    used_names
    rootnode
    /**
     *
     * @constructor
     * @param {Object} grammar
     *
     * p = new Parser(grammar);
     * p.setup([start]);
     * foreach input token:
     *     if p.addtoken(...):
     *         break
     * root = p.rootnode
     *
     * can throw ParseError
     */
    constructor(filename, grammar) {
        this.filename = filename;
        this.grammar = grammar;
        return this;
    }
    setup(start) {
        start = start || this.grammar.start;

        var newnode =
            {
                type: start,
                value: null,
                context: null,
                children: []
            };
        var stackentry =
            {
                dfa: this.grammar.dfas[start],
                state: 0,
                node: newnode
            };
        this.stack = [stackentry];
        this.used_names = {};
    }
    // Add a token; return true if we're done
    addtoken(type, value, context) {
        var ilabel = this.classify(type, value, context);

        OUTERWHILE:
        while (true) {
            var tp = this.stack[this.stack.length - 1];
            var states = tp.dfa[0];
            var first = tp.dfa[1];
            var arcs = states[tp.state];

            // look for a state with this label
            for (var a = 0; a < arcs.length; ++a) {
                var i = arcs[a][0];
                var newstate = arcs[a][1];
                var t = this.grammar.labels[i][0];
                var v = this.grammar.labels[i][1];
                if (ilabel === i) {
                    // look it up in the list of labels
                    assert(t < 256);
                    // shift a token; we're done with it
                    this.shift(type, value, newstate, context);
                    // pop while we are in an accept-only state
                    var state = newstate;
                    while (states[state].length === 1
                        && states[state][0][0] === 0
                        && states[state][0][1] === state) {
                        this.pop();
                        if (this.stack.length === 0) {
                            // done!
                            return true;
                        }
                        tp = this.stack[this.stack.length - 1];
                        state = tp.state;
                        states = tp.dfa[0];
                        first = tp.dfa[1];
                    }
                    // done with this token
                    return false;
                }
                else if (t >= 256) {
                    var itsdfa = this.grammar.dfas[t];
                    var itsfirst = itsdfa[1];
                    if (itsfirst.hasOwnProperty(ilabel)) {
                        // push a symbol
                        this.push(t, this.grammar.dfas[t], newstate, context);
                        continue OUTERWHILE;
                    }
                }
            }

            if (findInDfa(arcs, [0, tp.state])) {
                // an accepting state, pop it and try something else
                this.pop();
                if (this.stack.length === 0) {
                    throw parseError("too much input", this.filename);
                }
            }
            else {
                // no transition
                throw parseError("bad input", this.filename, context[0], context[1]);
            }
        }
    }
    // turn a token into a label
    classify(type, value, context) {
        var ilabel;
        if (type === Tokens.T_NAME) {
            this.used_names[value] = true;
            ilabel = this.grammar.keywords.hasOwnProperty(value) && this.grammar.keywords[value];
            if (ilabel) {
                return ilabel;
            }
        }
        ilabel = this.grammar.tokens.hasOwnProperty(type) && this.grammar.tokens[type];
        if (!ilabel) {
            throw parseError("bad token", this.filename, context[0], context[1]);
        }
        return ilabel;
    }

    // shift a token
    shift(type, value, newstate, context) {
        var dfa = this.stack[this.stack.length - 1].dfa;
        var state = this.stack[this.stack.length - 1].state;
        var node = this.stack[this.stack.length - 1].node;
        var newnode =
            {
                type: type,
                value: value,
                lineno: context[0][0],
                col_offset: context[0][1],
                children: null
            };
        if (newnode) {
            node.children.push(newnode);
        }
        this.stack[this.stack.length - 1] = { dfa: dfa, state: newstate, node: node };
    }

    // push a nonterminal
    push(type, newdfa, newstate, context) {
        var dfa = this.stack[this.stack.length - 1].dfa;
        var node = this.stack[this.stack.length - 1].node;

        this.stack[this.stack.length - 1] = { dfa: dfa, state: newstate, node: node };

        var newnode = { type: type, value: null, lineno: context[0][0], col_offset: context[0][1], children: [] };

        this.stack.push({ dfa: newdfa, state: 0, node: newnode });
    }

    // pop a nonterminal
    pop() {
        var pop = this.stack.pop();
        var newnode = pop.node;
        if (newnode) {
            if (this.stack.length !== 0) {
                var node = this.stack[this.stack.length - 1].node;
                node.children.push(newnode);
            }
            else {
                this.rootnode = newnode;
                this.rootnode.used_names = this.used_names;
            }
        }
    }

}



/**
 * Finds the specified
 * @param a An array of arrays where each element is an array of two integers.
 * @param obj An array containing two integers.
 */
function findInDfa(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i][0] === obj[0] && a[i][1] === obj[1]) {
            return true;
        }
    }
    return false;
}

//var ac = 0;
//var bc = 0;

/**
 * parser for interactive input. returns a function that should be called with
 * lines of input as they are entered. the function will return false
 * until the input is complete, when it will return the rootnode of the parse.
 *
 * @param {string} filename
 * @param {string=} style root of parse tree (optional)
 */
function makeParser(filename: string, style?: string) {
    if (style === undefined) style = "file_input";

    var p = new Parser(filename, ParseTables);
    // for closure's benefit
    if (style === "file_input")
        p.setup(ParseTables.sym.file_input);
    else
        fail("TODO");
    var curIndex = 0;
    var lineno = 1;
    var column = 0;
    var prefix = "";
    var T_COMMENT = Tokens.T_COMMENT;
    var T_NL = Tokens.T_NL;
    var T_OP = Tokens.T_OP;
    var tokenizer = new Tokenizer(filename, style === "single_input", function(type, value, start, end, line) {
        var s_lineno = start[0];
        var s_column = start[1];
        /*
        if (s_lineno !== lineno && s_column !== column)
        {
            // todo; update prefix and line/col
        }
        */
        if (type === T_COMMENT || type === T_NL) {
            prefix += value;
            lineno = end[0];
            column = end[1];
            if (value[value.length - 1] === "\n") {
                lineno += 1;
                column = 0;
            }
            return undefined;
        }
        if (type === T_OP) {
            type = OpMap[value];
        }
        if (p.addtoken(type, value, [start, end, line])) {
            return true;
        }
    });
    return function(line: string) {
        var ret = tokenizer.generateTokens(line);
        if (ret) {
            if (ret !== "done") {
                throw parseError("incomplete input", this.filename);
            }
            return p.rootnode;
        }
        return false;
    };
}

export function parse(filename: string, input: string) {
    var parseFunc = makeParser(filename);
    if (input.substr(input.length - 1, 1) !== "\n") input += "\n";
    var lines = input.split("\n");
    var ret;
    for (var i = 0; i < lines.length; ++i) {
        ret = parseFunc(lines[i] + ((i === lines.length - 1) ? "" : "\n"));
    }
    return ret;
}

export function parseTreeDump(n) {
    var ret = "";
    if (n.type >= 256) // non-term
    {
        ret += ParseTables.number2symbol[n.type] + "\n";
        for (var i = 0; i < n.children.length; ++i) {
            ret += parseTreeDump(n.children[i]);
        }
    }
    else {
        ret += tokenNames[n.type] + ": " + n.value + "\n";
    }
    return ret;
}