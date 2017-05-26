import { OpMap, ParseTables } from './tables';
import { assert } from './asserts';
import { Tokenizer } from './Tokenizer';
import { Tokens } from './Tokens';
import { tokenNames } from './tokenNames';

/**
 * Decode this!!!
 */
export type Arc = [number, number];
export type State = [Arc[], [[number, number]], [[number, number]]];
export type Dfa = [State, { [value: number]: number }];

/**
 * Describes the shape of the ParseTables objects (which needs to be renamed BTW).
 */
export interface Grammar {
    start: Tokens;
    dfas: { [value: number]: Dfa };
    labels: number[][];
    keywords: { [keyword: string]: number };
    tokens: { [token: number]: number };
    /**
     * Actually maps from the node constructor name.
     */
    sym: { [name: string]: number };
    number2symbol: { [value: number]: string };
    states: any;
}

export type LineColumn = [number, number];

/**
 * [begin, end, line]
 */
export type ParseContext = [LineColumn, LineColumn, string];

/**
 * The parse tree (not the abstract syntax tree).
 */
export interface PyNode {
    type: Tokens;
    value: string | null;
    context?: any;
    lineno?: number;
    col_offset?: number;
    used_names?: { [name: string]: boolean };
    children: PyNode[] | null;
}

export interface StackElement {
    dfa: Dfa;
    state: number;
    node: PyNode;
}

// low level parser to a concrete syntax tree, derived from cpython's lib2to3

/**
 * @param message
 * @param fileName
 * @param begin
 * @param end
 */
function parseError(message: string, fileName: string, begin?: LineColumn, end?: LineColumn): SyntaxError {
    const e = new SyntaxError(message/*, fileName*/);
    e.name = "ParseError";
    e['fileName'] = fileName;
    if (Array.isArray(begin)) {
        e['lineNumber'] = begin[0];
        e['columnNumber'] = begin[1];
    }
    return e;
}

class Parser {
    filename: string;
    grammar: Grammar;
    stack: StackElement[];
    used_names: { [name: string]: boolean };
    rootnode: PyNode;
    /**
     *
     * p = new Parser(grammar);
     * p.setup(start);
     * foreach input token:
     *     if p.addtoken(...):
     *         break
     * root = p.rootnode
     *
     * can throw ParseError
     */
    constructor(filename: string, grammar: Grammar) {
        this.filename = filename;
        this.grammar = grammar;
        return this;
    }
    setup(start?: Tokens): void {
        start = start || this.grammar.start;

        const newnode: PyNode = {
            type: start,
            value: null,
            context: null,
            children: []
        };
        const stackentry: StackElement = {
            dfa: this.grammar.dfas[start],
            state: 0,
            node: newnode
        };
        this.stack = [stackentry];
        this.used_names = {};
    }

    /**
     * Add a token; return true if we're done.
     * @param type
     * @param value
     * @param context [start, end, line]
     */
    addtoken(type: Tokens, value: string, context: ParseContext): boolean {
        const ilabel = this.classify(type, value, context);

        OUTERWHILE:
        while (true) {
            let tp = this.stack[this.stack.length - 1];
            let states = tp.dfa[0];
            let first = tp.dfa[1];
            const arcs = states[tp.state];

            // look for a state with this label
            for (let a = 0; a < arcs.length; ++a) {
                const i = arcs[a][0];
                const newstate = arcs[a][1];
                const t = this.grammar.labels[i][0];
                // var v = this.grammar.labels[i][1];
                if (ilabel === i) {
                    // look it up in the list of labels
                    assert(t < 256);
                    // shift a token; we're done with it
                    this.shift(type, value, newstate, context);
                    // pop while we are in an accept-only state
                    let state = newstate;
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
                    const itsdfa = this.grammar.dfas[t];
                    const itsfirst = itsdfa[1];
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

    /**
     * turn a token into a label.
     * @param type
     * @param value
     * @param context [begin, end, line]
     */
    classify(type: Tokens, value: string, context: ParseContext): number {
        let ilabel: number | undefined;
        if (type === Tokens.T_NAME) {
            this.used_names[value] = true;
            if (this.grammar.keywords.hasOwnProperty(value)) {
                ilabel = this.grammar.keywords[value];
            }
            if (ilabel) {
                return ilabel;
            }
        }
        if (this.grammar.tokens.hasOwnProperty(type)) {
            ilabel = this.grammar.tokens[type];
        }
        if (!ilabel) {
            throw parseError("bad token", this.filename, context[0], context[1]);
        }
        return ilabel;
    }

    // shift a token
    shift(type: Tokens, value: string, newstate: number, context: ParseContext): void {
        const dfa = this.stack[this.stack.length - 1].dfa;
        // var state = this.stack[this.stack.length - 1].state;
        const node = this.stack[this.stack.length - 1].node;
        const newnode: PyNode = {
            type: type,
            value: value,
            lineno: context[0][0],
            col_offset: context[0][1],
            children: null
        };
        if (newnode && node.children) {
            node.children.push(newnode);
        }
        this.stack[this.stack.length - 1] = { dfa: dfa, state: newstate, node: node };
    }

    // push a nonterminal
    push(type: Tokens, newdfa: Dfa, newstate: number, context: ParseContext): void {
        var dfa = this.stack[this.stack.length - 1].dfa;
        var node = this.stack[this.stack.length - 1].node;

        this.stack[this.stack.length - 1] = { dfa: dfa, state: newstate, node: node };

        var newnode: PyNode = { type: type, value: null, lineno: context[0][0], col_offset: context[0][1], children: [] };

        this.stack.push({ dfa: newdfa, state: 0, node: newnode });
    }

    // pop a nonterminal
    pop(): void {
        const pop = this.stack.pop();
        if (pop) {
            const newnode = pop.node;
            if (newnode) {
                if (this.stack.length !== 0) {
                    const node = this.stack[this.stack.length - 1].node;
                    if (node.children) {
                        node.children.push(newnode);
                    }
                }
                else {
                    this.rootnode = newnode;
                    this.rootnode.used_names = this.used_names;
                }
            }
        }
    }
}



/**
 * TODO: Rename to existsInDfa.
 * Finds the specified
 * @param a An array of arrays where each element is an array of two integers.
 * @param obj An array containing two integers.
 */
function findInDfa(a: Arc[], obj: Arc): boolean {
    let i = a.length;
    while (i--) {
        if (a[i][0] === obj[0] && a[i][1] === obj[1]) {
            return true;
        }
    }
    return false;
}

/**
 * parser for interactive input. returns a function that should be called with
 * lines of input as they are entered. the function will return false
 * until the input is complete, when it will return the rootnode of the parse.
 *
 * @param filename
 * @param style root of parse tree (optional)
 */
function makeParser(filename: string, style?: string): (line: string) => PyNode | boolean {
    if (style === undefined) style = "file_input";

    // FIXME: Would be nice to get this typing locked down.
    const p = new Parser(filename, ParseTables as any);
    // for closure's benefit
    if (style === "file_input")
        p.setup(ParseTables.sym.file_input);
    else {
        console.warn(`TODO: makeParser(style = ${style})`);
    }
    let lineno = 1;
    let column = 0;
    let prefix = "";
    const T_COMMENT = Tokens.T_COMMENT;
    const T_NL = Tokens.T_NL;
    const T_OP = Tokens.T_OP;
    const tokenizer = new Tokenizer(filename, style === "single_input", function tokenizerCallback(type: Tokens, value: string, start: [number, number], end: [number, number], line: string): boolean | undefined {
        // var s_lineno = start[0];
        // var s_column = start[1];
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
        return undefined;
    });
    return function parseFunc(line: string): PyNode | boolean {
        var ret = tokenizer.generateTokens(line);
        if (ret) {
            if (ret !== "done") {
                throw parseError("incomplete input", filename);
            }
            return p.rootnode;
        }
        return false;
    };
}

export function parse(filename: string, input: string): boolean | PyNode {
    const parseFunc = makeParser(filename);
    if (input.substr(input.length - 1, 1) !== "\n") {
        input += "\n";
    }
    const lines = input.split("\n");
    let ret: boolean | PyNode = false;
    for (let i = 0; i < lines.length; ++i) {
        ret = parseFunc(lines[i] + ((i === lines.length - 1) ? "" : "\n"));
    }
    return ret;
}

export function parseTreeDump(n: PyNode): string {
    let ret = "";
    // non-term
    if (n.type >= 256) {
        ret += ParseTables.number2symbol[n.type] + "\n";
        if (n.children) {
            for (let i = 0; i < n.children.length; ++i) {
                ret += parseTreeDump(n.children[i]);
            }
        }
    }
    else {
        ret += tokenNames[n.type] + ": " + n.value + "\n";
    }
    return ret;
}
