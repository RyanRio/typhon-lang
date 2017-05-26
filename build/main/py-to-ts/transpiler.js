"use strict";
/// <reference path = "../../node_modules/typescript/lib/typescriptServices.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var asserts_1 = require("../pytools/asserts");
var base_1 = require("../pytools/base");
var parser_1 = require("../pytools/parser");
var builder_1 = require("../pytools/builder");
var reservedNames_1 = require("../pytools/reservedNames");
var reservedWords_1 = require("../pytools/reservedWords");
var symtable_1 = require("../pytools/symtable");
var toStringLiteralJS_1 = require("../pytools/toStringLiteralJS");
var types_1 = require("../pytools/types");
var types_2 = require("../pytools/types");
var types_3 = require("../pytools/types");
var types_4 = require("../pytools/types");
var types_5 = require("../pytools/types");
var types_6 = require("../pytools/types");
var types_7 = require("../pytools/types");
var types_8 = require("../pytools/types");
var types_9 = require("../pytools/types");
var types_10 = require("../pytools/types");
var types_11 = require("../pytools/types");
var types_12 = require("../pytools/types");
var types_13 = require("../pytools/types");
var types_14 = require("../pytools/types");
var types_15 = require("../pytools/types");
var types_16 = require("../pytools/types");
var types_17 = require("../pytools/types");
var types_18 = require("../pytools/types");
var types_19 = require("../pytools/types");
var types_20 = require("../pytools/types");
var types_21 = require("../pytools/types");
var types_22 = require("../pytools/types");
var types_23 = require("../pytools/types");
var types_24 = require("../pytools/types");
var types_25 = require("../pytools/types");
var types_26 = require("../pytools/types");
var types_27 = require("../pytools/types");
var types_28 = require("../pytools/types");
var types_29 = require("../pytools/types");
var types_30 = require("../pytools/types");
var types_31 = require("../pytools/types");
var types_32 = require("../pytools/types");
var types_33 = require("../pytools/types");
var types_34 = require("../pytools/types");
var types_35 = require("../pytools/types");
var types_36 = require("../pytools/types");
var types_37 = require("../pytools/types");
var types_38 = require("../pytools/types");
var types_39 = require("../pytools/types");
var types_40 = require("../pytools/types");
var types_41 = require("../pytools/types");
var types_42 = require("../pytools/types");
var types_43 = require("../pytools/types");
var types_44 = require("../pytools/types");
var types_45 = require("../pytools/types");
var types_46 = require("../pytools/types");
var types_47 = require("../pytools/types");
var types_48 = require("../pytools/types");
var types_49 = require("../pytools/types");
var types_50 = require("../pytools/types");
var SymbolConstants_1 = require("../pytools/SymbolConstants");
var SymbolConstants_2 = require("../pytools/SymbolConstants");
var SymbolConstants_3 = require("../pytools/SymbolConstants");
var SymbolConstants_4 = require("../pytools/SymbolConstants");
var SymbolConstants_5 = require("../pytools/SymbolConstants");
var SymbolConstants_6 = require("../pytools/SymbolConstants");
// TODO: Replace these with the TypeScript AST
// import {Node} from '../estools/esprima';
// import {generate} from '../estools/escodegen';
var OP_FAST = 0;
var OP_GLOBAL = 1;
var OP_DEREF = 2;
var OP_NAME = 3;
// const D_NAMES = 0;
// const D_FREEVARS = 1;
// const D_CELLVARS = 2;
var Precedence = {
    Sequence: 0,
    Yield: 1,
    Await: 1,
    Assignment: 1,
    Conditional: 2,
    ArrowFunction: 2,
    LogicalOR: 3,
    LogicalAND: 4,
    BitwiseOR: 5,
    BitwiseXOR: 6,
    BitwiseAND: 7,
    Equality: 8,
    Relational: 9,
    BitwiseSHIFT: 10,
    Additive: 11,
    Multiplicative: 12,
    Unary: 13,
    Postfix: 14,
    Call: 15,
    New: 16,
    TaggedTemplate: 17,
    Member: 18,
    Primary: 19
};
// Flags
var F_ALLOW_IN = 1;
var F_ALLOW_CALL = 1 << 1;
var F_ALLOW_UNPARATH_NEW = 1 << 2;
// const F_FUNC_BODY = 1 << 3;
// const F_DIRECTIVE_CTX = 1 << 4;
var F_SEMICOLON_OPT = 1 << 5;
// Expression flag sets
// NOTE: Flag order:
// F_ALLOW_IN
// F_ALLOW_CALL
// F_ALLOW_UNPARATH_NEW
// const E_FTT = F_ALLOW_CALL | F_ALLOW_UNPARATH_NEW;
// const E_TTF = F_ALLOW_IN | F_ALLOW_CALL;
var E_TTT = F_ALLOW_IN | F_ALLOW_CALL | F_ALLOW_UNPARATH_NEW;
// const E_TFF = F_ALLOW_IN;
// const E_FFT = F_ALLOW_UNPARATH_NEW;
// const E_TFT = F_ALLOW_IN | F_ALLOW_UNPARATH_NEW;
// Statement flag sets
// NOTE: Flag order:
// F_ALLOW_IN
// F_FUNC_BODY
// F_DIRECTIVE_CTX
// F_SEMICOLON_OPT
var S_TFFF = F_ALLOW_IN;
// const S_TFFT = F_ALLOW_IN | F_SEMICOLON_OPT;
// const S_FFFF = 0x00;
// const S_TFTF = F_ALLOW_IN | F_DIRECTIVE_CTX;
// const S_TTFF = F_ALLOW_IN | F_FUNC_BODY;
/**
 * The output function is scoped at the module level so that it is available without being a parameter.
 * @param {...*} x
 */
var out;
/**
 * We keep track of how many time gensym method on the Compiler is called because ... ?
 */
var gensymCount = 0;
/**
 *
 */
var base;
/**
 *
 */
var indent;
/**
 *
 */
var space;
function updateDeeply(target, override) {
    function isHashObject(target) {
        return typeof target === 'object' && target instanceof Object && !(target instanceof RegExp);
    }
    for (var key in override) {
        if (override.hasOwnProperty(key)) {
            var val = override[key];
            if (isHashObject(val)) {
                if (isHashObject(target[key])) {
                    updateDeeply(target[key], val);
                }
                else {
                    target[key] = updateDeeply({}, val);
                }
            }
            else {
                target[key] = val;
            }
        }
    }
    return target;
}
/**
 * flatten an array to a string, where the array can contain
 * either strings or nested arrays
 */
function flattenToString(arr) {
    var result = '';
    for (var i = 0, iz = arr.length; i < iz; ++i) {
        var elem = arr[i];
        result += base_1.isArray(elem) ? flattenToString(elem) : elem;
    }
    return result;
}
function withIndent(fn) {
    var previousBase = base;
    base += indent;
    fn(base);
    base = previousBase;
}
/**
 * FIXME: CompilerUnit is coupled to this module by the out variable.
 */
var CompilerUnit = (function () {
    /**
     * @constructor
     *
     * Stuff that changes on entry/exit of code blocks. must be saved and restored
     * when returning to a block.
     *
     * Corresponds to the body of a module, class, or function.
     */
    function CompilerUnit() {
        /**
         * @type {?Object}
         */
        this.ste = null;
        this.name = null;
        this.private_ = null;
        this.firstlineno = 0;
        this.lineno = 0;
        this.linenoSet = false;
        this.localnames = [];
        this.blocknum = 0;
        this.blocks = [];
        this.curblock = 0;
        this.scopename = null;
        this.prefixCode = '';
        this.varDeclsCode = '';
        this.switchCode = '';
        this.suffixCode = '';
        // stack of where to go on a break
        this.breakBlocks = [];
        // stack of where to go on a continue
        this.continueBlocks = [];
        this.exceptBlocks = [];
        this.finallyBlocks = [];
    }
    CompilerUnit.prototype.activateScope = function () {
        // The 'arguments' object cannot be referenced in an arrow function in ES3 and ES5.
        // That's why we use a standard function expression.
        var self = this;
        out = function () {
            var b = self.blocks[self.curblock];
            for (var i = 0; i < arguments.length; ++i)
                b.push(arguments[i]);
        };
    };
    return CompilerUnit;
}());
exports.CompilerUnit = CompilerUnit;
var Compiler = (function () {
    /**
     * @constructor
     * @param fileName {string}
     * @param st {SymbolTable}
     * @param flags {number}
     * @param {string=} sourceCodeForAnnotation used to add original source to listing if desired
     */
    function Compiler(fileName, st, flags, sourceCodeForAnnotation) {
        this.fileName = fileName;
        /**
         * @type {Object}
         * @private
         */
        this.st = st;
        this.flags = flags;
        this.interactive = false;
        this.nestlevel = 0;
        this.u = null;
        /**
         * @type Array.<CompilerUnit>
         * @private
         */
        this.stack = [];
        this.result = [];
        // this.gensymcount = 0;
        /**
         * @type Array.<CompilerUnit>
         * @private
         */
        this.allUnits = [];
        this.source = sourceCodeForAnnotation ? sourceCodeForAnnotation.split("\n") : false;
    }
    Compiler.prototype.getSourceLine = function (lineno) {
        asserts_1.assert(!!this.source);
        return this.source[lineno - 1];
    };
    Compiler.prototype.annotateSource = function (ast) {
        if (this.source) {
            var lineno = ast.lineno;
            var col_offset = ast.col_offset;
            out('\n//');
            out('\n// line ', lineno, ':');
            out('\n// ', this.getSourceLine(lineno));
            //
            // out('\n// ');
            for (var i = 0; i < col_offset; ++i) {
                out(" ");
            }
            // out("^");
            // out("\n//");
            // out('\nSk.currLineNo = ', lineno, ';Sk.currColNo = ', col_offset, ';');
            // out("\nSk.currFilename = '", this.fileName, "';\n\n");
        }
    };
    Compiler.prototype.gensym = function (hint) {
        hint = hint || '';
        hint = '$' + hint;
        hint += gensymCount++;
        return hint;
    };
    Compiler.prototype.niceName = function (roughName) {
        return this.gensym(roughName.replace("<", "").replace(">", "").replace(" ", "_"));
    };
    Compiler.prototype.emitArgs = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, argA, argB, argC, argD, argE) {
        for (var i = 1; i < arguments.length; ++i) {
            out(arguments[i]);
        }
        throw new Error("TODO");
    };
    Compiler.prototype.ctupleorlist = function (e, data, tuporlist) {
        asserts_1.assert(tuporlist === 'tuple' || tuporlist === 'list');
        if (e.ctx === types_42.Store) {
            for (var i = 0; i < e.elts.length; ++i) {
                this.vexpr(e.elts[i], "Sk.abstr.objectGetItem(" + data + "," + i + ")");
            }
        }
        else if (e.ctx === types_32.Load) {
            // const items = [];
            for (var i = 0; i < e.elts.length; ++i) {
                // items.push(this.emitArgs('elem', this.vexpr(e.elts[i])));
            }
        }
    };
    Compiler.prototype.cdict = function (e) {
        asserts_1.assert(e.values.length === e.keys.length);
        var items = [];
        for (var i = 0; i < e.values.length; ++i) {
            var v = this.vexpr(e.values[i]); // "backwards" to match order in cpy
            items.push(this.vexpr(e.keys[i]));
            items.push(v);
        }
    };
    Compiler.prototype.clistcompgen = function (tmpname, generators, genIndex, elt) {
        var start = this.newBlock('list gen start');
        var skip = this.newBlock('list gen skip');
        var anchor = this.newBlock('list gen anchor');
        var l = generators[genIndex];
        // const toiter = this.vexpr(l.iter);
        this.setBlock(start);
        var n = l.ifs.length;
        for (var i = 0; i < n; ++i) {
            // var ifres = this.vexpr(l.ifs[i]);
        }
        if (++genIndex < generators.length) {
            this.clistcompgen(tmpname, generators, genIndex, elt);
        }
        if (genIndex >= generators.length) {
            var velt = this.vexpr(elt);
            out(tmpname, ".v.push(", velt, ");");
            this.setBlock(skip);
        }
        this.setBlock(anchor);
        return tmpname;
    };
    Compiler.prototype.clistcomp = function (e) {
        asserts_1.assert(e instanceof types_31.ListComp);
        // return this.clistcompgen(tmp, e.generators, 0, e.elt);
    };
    Compiler.prototype.cyield = function (e) {
        if (this.u.ste.blockType !== SymbolConstants_6.FunctionBlock)
            throw new SyntaxError("'yield' outside function");
        var val = 'null';
        if (e.value)
            val = this.vexpr(e.value);
        var nextBlock = this.newBlock('after yield');
        // return a pair: resume target block and yielded value
        out("return [/*resume*/", nextBlock, ",/*ret*/", val, "];");
        this.setBlock(nextBlock);
        return '$gen.gi$sentvalue'; // will either be null if none sent, or the value from gen.send(value)
    };
    Compiler.prototype.ccompare = function (e) {
        asserts_1.assert(e.ops.length === e.comparators.length);
        var cur = this.vexpr(e.left);
        var n = e.ops.length;
        var done = this.newBlock("done");
        for (var i = 0; i < n; ++i) {
            var rhs = this.vexpr(e.comparators[i]);
            cur = rhs;
        }
        this.setBlock(done);
    };
    Compiler.prototype.ccall = function (e) {
        var func = this.vexpr(e.func);
        var args = this.vseqexpr(e.args);
        if (e.keywords.length > 0 || e.starargs || e.kwargs) {
            var kwarray = [];
            for (var i = 0; i < e.keywords.length; ++i) {
                kwarray.push("'" + e.keywords[i].arg + "'");
                kwarray.push(this.vexpr(e.keywords[i].value));
            }
            // const keywords = "[" + kwarray.join(",") + "]";
            var starargs = "undefined";
            var kwargs = "undefined";
            if (e.starargs) {
                starargs = this.vexpr(e.starargs);
            }
            if (e.kwargs) {
                kwargs = this.vexpr(e.kwargs);
            }
        }
        else {
            this.emitArgs(func, "(", args, ")");
        }
    };
    Compiler.prototype.cslice = function (s) {
        asserts_1.assert(s instanceof types_41.Slice);
        // const low = s.lower ? this.vexpr(s.lower) : 'null';
        // const high = s.upper ? this.vexpr(s.upper) : 'null';
        // const step = s.step ? this.vexpr(s.step) : 'null';
        throw new Error("TODO");
    };
    Compiler.prototype.vslicesub = function (s) {
        var subs;
        if (s instanceof Number || s instanceof String) {
            // Already compiled, should only happen for augmented assignments
            subs = s;
        }
        else if (s instanceof types_28.Index) {
            subs = this.vexpr(s.value);
        }
        else if (s instanceof types_41.Slice) {
            subs = this.cslice(s);
        }
        else if (s instanceof types_17.Ellipsis) {
            throw new Error("todo;");
        }
        else if (s instanceof types_19.ExtSlice) {
            throw new Error("todo;");
        }
        else {
            throw new Error("invalid subscript kind");
        }
        return subs;
    };
    Compiler.prototype.vslice = function (s, ctx, obj, dataToStore) {
        var subs = this.vslicesub(s);
        return this.chandlesubscr(ctx, obj, subs, dataToStore);
    };
    Compiler.prototype.chandlesubscr = function (ctx, obj, subs, data) {
        if (ctx === types_32.Load || ctx === types_5.AugLoad) {
            // TODO
        }
        else if (ctx === types_42.Store || ctx === types_6.AugStore)
            out("Sk.abstr.objectSetItem(", obj, ",", subs, ",", data, ");");
        else if (ctx === types_14.Del)
            out("Sk.abstr.objectDelItem(", obj, ",", subs, ");");
        else
            throw new Error("handlesubscr fail");
    };
    Compiler.prototype.cboolop = function (e) {
        asserts_1.assert(e instanceof types_8.BoolOp);
        var end = this.newBlock('end of boolop');
        var s = e.values;
        var n = s.length;
        var retval;
        for (var i = 0; i < n; ++i) {
            var expres = this.vexpr(s[i]);
            if (i === 0) {
                // TODO
            }
            out(retval, " = ", expres, ";");
        }
        this.setBlock(end);
        return retval;
    };
    Compiler.prototype.vexpr = function (e, data, augstoreval) {
        if (e.lineno > this.u.lineno) {
            this.u.lineno = e.lineno;
            this.u.linenoSet = false;
        }
        // this.annotateSource(e);
        if (e instanceof types_8.BoolOp) {
            return this.cboolop(e);
        }
        else if (e instanceof types_7.BinOp) {
            return;
        }
        else if (e instanceof types_48.UnaryOp) {
            return;
        }
        else if (e instanceof types_29.Lambda) {
            return this.clambda(e);
        }
        else if (e instanceof types_25.IfExp) {
            return this.cifexp(e);
        }
        else if (e instanceof types_16.Dict) {
            return this.cdict(e);
        }
        else if (e instanceof types_31.ListComp) {
            return this.clistcomp(e);
        }
        else if (e instanceof types_22.GeneratorExp) {
            return this.cgenexp(e);
        }
        else if (e instanceof types_50.Yield) {
            return this.cyield(e);
        }
        else if (e instanceof types_12.Compare) {
            return this.ccompare(e);
        }
        else if (e instanceof types_10.Call) {
            var result = this.ccall(e);
            // After the function call, we've returned to this line
            this.annotateSource(e);
            return result;
        }
        else if (e instanceof types_35.Num) {
            if (e.n.isFloat()) {
                return e.n.value.toString();
            }
            else if (e.n.isInt()) {
                return e.n.value.toString();
            }
            else if (e.n.isLong()) {
                return "longFromString('" + e.n.text + "', " + e.n.radix + ")";
            }
            throw new Error("unhandled Num type");
        }
        else if (e instanceof types_43.Str) {
            return toStringLiteralJS_1.toStringLiteralJS(e.s);
        }
        else if (e instanceof types_3.Attribute) {
            var val = void 0;
            if (e.ctx !== types_6.AugStore)
                val = this.vexpr(e.value);
            var mangled = toStringLiteralJS_1.toStringLiteralJS(e.attr);
            mangled = mangled.substring(1, mangled.length - 1);
            mangled = mangleName(this.u.private_, mangled);
            mangled = fixReservedWords(mangled);
            mangled = fixReservedNames(mangled);
            switch (e.ctx) {
                case types_5.AugLoad:
                case types_32.Load:
                    return this.emitArgs("lattr", "Sk.abstr.gattr(", val, ",'", mangled, "')");
                case types_6.AugStore:
                    out("if(typeof ", data, " !== 'undefined'){"); // special case to avoid re-store if inplace worked
                    val = this.vexpr(augstoreval || null); // the || null can never happen, but closure thinks we can get here with it being undef
                    out("Sk.abstr.sattr(", val, ",'", mangled, "',", data, ");");
                    out("}");
                    break;
                case types_42.Store:
                    out("Sk.abstr.sattr(", val, ",'", mangled, "',", data, ");");
                    break;
                case types_14.Del:
                    throw new Error("todo;");
                // break;
                case types_36.Param:
                default:
                    throw new Error("invalid attribute expression");
            }
        }
        else if (e instanceof types_44.Subscript) {
            switch (e.ctx) {
                case types_5.AugLoad:
                case types_32.Load:
                case types_42.Store:
                case types_14.Del:
                    return this.vslice(e.slice, e.ctx, this.vexpr(e.value), data);
                case types_6.AugStore: {
                    out("if(typeof ", data, " !== 'undefined'){"); // special case to avoid re-store if inplace worked
                    var val = this.vexpr(augstoreval || null); // the || null can never happen, but closure thinks we can get here with it being undef
                    this.vslice(e.slice, e.ctx, val, data);
                    out("}");
                    break;
                }
                case types_36.Param:
                default:
                    throw new Error("invalid subscript expression");
            }
        }
        else if (e instanceof types_34.Name) {
            return this.nameop(e.id, e.ctx, data);
        }
        else if (e instanceof types_30.List) {
            return this.ctupleorlist(e, data, 'list');
        }
        else if (e instanceof types_47.Tuple) {
            return this.ctupleorlist(e, data, 'tuple');
        }
        else {
            throw new Error("unhandled case in vexpr");
        }
    };
    Compiler.prototype.vseqexpr = function (exprs, data) {
        var missingData = (typeof data === 'undefined');
        asserts_1.assert(missingData || exprs.length === data.length);
        var ret = [];
        for (var i = 0; i < exprs.length; ++i) {
            ret.push(this.vexpr(exprs[i], (missingData ? undefined : data[i])));
        }
        return ret;
    };
    Compiler.prototype.caugassign = function (s) {
        asserts_1.assert(s instanceof types_4.AugAssign);
        var e = s.target;
        if (e instanceof types_3.Attribute) {
            var auge = new types_3.Attribute(e.value, e.attr, types_5.AugLoad, e.lineno, e.col_offset);
            var aug = this.vexpr(auge);
            var val = this.vexpr(s.value);
            var res = this.emitArgs('inplbinopattr', "Sk.abstr.numberInplaceBinOp(", aug, ",", val, ",'", "')");
            auge.ctx = types_6.AugStore;
            return this.vexpr(auge, res, e.value);
        }
        else if (e instanceof types_44.Subscript) {
            // Only compile the subscript value once
            var augsub = this.vslicesub(e.slice);
            var auge = new types_44.Subscript(e.value, augsub, types_5.AugLoad, e.lineno, e.col_offset);
            var aug = this.vexpr(auge);
            var val = this.vexpr(s.value);
            var res = this.emitArgs('inplbinopsubscr', "Sk.abstr.numberInplaceBinOp(", aug, ",", val, ",'", "')");
            auge.ctx = types_6.AugStore;
            return this.vexpr(auge, res, e.value);
        }
        else if (e instanceof types_34.Name) {
            var to = this.nameop(e.id, types_32.Load);
            var val = this.vexpr(s.value);
            var res = this.emitArgs('inplbinop', "Sk.abstr.numberInplaceBinOp(", to, ",", val, ",'", "')");
            return this.nameop(e.id, types_42.Store, res);
        }
        else {
            throw new Error("unhandled case in augassign");
        }
    };
    /**
     * optimize some constant exprs. returns 0 if always 0, 1 if always 1 or -1 otherwise.
     */
    Compiler.prototype.exprConstant = function (e) {
        if (e instanceof types_35.Num) {
            return ts.createLiteral(e.n.value);
        }
        else if (e instanceof types_43.Str) {
            return ts.createLiteral(e.s);
        }
        else if (e instanceof types_34.Name) {
            throw new Error("TODO: exprConstant(Name)");
        }
        else {
            throw new Error("exprConstant");
        }
    };
    Compiler.prototype.newBlock = function (name) {
        var ret = this.u.blocknum++;
        this.u.blocks[ret] = [];
        this.u.blocks[ret]._name = name || '<unnamed>';
        return ret;
    };
    Compiler.prototype.setBlock = function (n) {
        asserts_1.assert(n >= 0 && n < this.u.blocknum);
        this.u.curblock = n;
    };
    Compiler.prototype.pushBreakBlock = function (n) {
        asserts_1.assert(n >= 0 && n < this.u.blocknum);
        this.u.breakBlocks.push(n);
    };
    Compiler.prototype.popBreakBlock = function () {
        this.u.breakBlocks.pop();
    };
    Compiler.prototype.pushContinueBlock = function (n) {
        asserts_1.assert(n >= 0 && n < this.u.blocknum);
        this.u.continueBlocks.push(n);
    };
    Compiler.prototype.popContinueBlock = function () {
        this.u.continueBlocks.pop();
    };
    Compiler.prototype.pushExceptBlock = function (n) {
        asserts_1.assert(n >= 0 && n < this.u.blocknum);
        this.u.exceptBlocks.push(n);
    };
    Compiler.prototype.popExceptBlock = function () {
        this.u.exceptBlocks.pop();
    };
    Compiler.prototype.pushFinallyBlock = function (n) {
        asserts_1.assert(n >= 0 && n < this.u.blocknum);
        this.u.finallyBlocks.push(n);
    };
    Compiler.prototype.popFinallyBlock = function () {
        this.u.finallyBlocks.pop();
    };
    Compiler.prototype.setupExcept = function (eb) {
        out("$exc.push(", eb, ");");
        // this.pushExceptBlock(eb);
    };
    Compiler.prototype.endExcept = function () {
        out("$exc.pop();");
    };
    Compiler.prototype.outputLocals = function (unit) {
        var have = {};
        for (var i = 0; unit.argnames && i < unit.argnames.length; ++i)
            have[unit.argnames[i]] = true;
        unit.localnames.sort();
        var output = [];
        for (var i = 0; i < unit.localnames.length; ++i) {
            var name_1 = unit.localnames[i];
            if (have[name_1] === undefined) {
                output.push(name_1);
                have[name_1] = true;
            }
        }
        if (output.length > 0)
            return "var " + output.join(",") + "; /* locals */";
        return "";
    };
    Compiler.prototype.outputAllUnits = function () {
        var ret = '';
        for (var j = 0; j < this.allUnits.length; ++j) {
            var unit = this.allUnits[j];
            ret += unit.prefixCode;
            ret += this.outputLocals(unit);
            ret += unit.varDeclsCode;
            ret += unit.switchCode;
            var blocks = unit.blocks;
            for (var i = 0; i < blocks.length; ++i) {
                // ret += "case " + i + ": /* --- " + blocks[i]._name + " --- */";
                ret += blocks[i].join('');
                /*
                ret += "throw new Sk.builtin.SystemError('internal error: unterminated block');";
                */
            }
            ret += unit.suffixCode;
        }
        return ret;
    };
    Compiler.prototype.generateExpression = function (expression, s, flags) {
        return "";
    };
    Compiler.prototype.generateStatements = function (statement, s, flags) {
        return "";
    };
    Compiler.prototype.maybeBlock = function (one, flags) {
        return "";
    };
    Compiler.prototype.maybeBlockSuffix = function (one, two) {
        return "";
    };
    Compiler.prototype.ifStatement = function (stmt, flags) {
        var _this = this;
        asserts_1.assert(stmt instanceof types_24.IfStatement);
        asserts_1.assert(base_1.isNumber(flags));
        var result;
        var bodyFlags;
        var semicolonOptional;
        withIndent(function () {
            result = [
                'if' + space + '(',
                _this.generateExpression(stmt.test, Precedence.Sequence, E_TTT),
                ')'
            ];
        });
        semicolonOptional = !!(flags & F_SEMICOLON_OPT);
        bodyFlags = S_TFFF;
        if (semicolonOptional) {
            bodyFlags |= F_SEMICOLON_OPT;
        }
        if (stmt.alternate) {
            result.push(this.maybeBlock(stmt.consequent, S_TFFF));
            // result = this.maybeBlockSuffix(stmt.consequent, result);
            /*
            if (stmt.alternate.type === Syntax.IfStatement) {
                result = join(result, ['else ', this.generateStatements(stmt.alternate, bodyFlags)]);
            } else {
                result = join(result, join('else', this.maybeBlock(stmt.alternate, bodyFlags)));
            }
            */
        }
        else {
            result.push(this.maybeBlock(stmt.consequent, bodyFlags));
        }
        return result;
    };
    Compiler.prototype.cwhile = function (s, flags) {
        // const testExpr = this.exprConstant(s.test);
        // ts.createWhile(testExpr)
        var top = this.newBlock('while test');
        this.setBlock(top);
        var next = this.newBlock('after while');
        var orelse = s.orelse.length > 0 ? this.newBlock('while orelse') : null;
        var body = this.newBlock('while body');
        this.pushBreakBlock(next);
        this.pushContinueBlock(top);
        this.setBlock(body);
        this.vseqstmt(s.body, flags);
        this.popContinueBlock();
        this.popBreakBlock();
        if (s.orelse.length > 0) {
            this.setBlock(orelse);
            this.vseqstmt(s.orelse, flags);
        }
        this.setBlock(next);
    };
    Compiler.prototype.cfor = function (s, flags) {
        var start = this.newBlock('for start');
        var cleanup = this.newBlock('for cleanup');
        var end = this.newBlock('for end');
        this.pushBreakBlock(end);
        this.pushContinueBlock(start);
        // get the iterator
        var toiter = this.vexpr(s.iter);
        var iter;
        if (this.u.ste.generator) {
            // if we're in a generator, we have to store the iterator to a local
            // so it's preserved (as we cross blocks here and assume it survives)
            iter = "$loc." + this.gensym("iter");
            out(iter, "=Sk.abstr.iter(", toiter, ");");
        }
        else
            iter = this.emitArgs("iter", "Sk.abstr.iter(", toiter, ")");
        this.setBlock(start);
        // load targets
        // var nexti = this.emitArgs('next', "Sk.abstr.iternext(", iter, ")");
        // var target = this.vexpr(s.target, nexti);
        // execute body
        this.vseqstmt(s.body, flags);
        this.setBlock(cleanup);
        this.popContinueBlock();
        this.popBreakBlock();
        this.vseqstmt(s.orelse, flags);
        this.setBlock(end);
    };
    Compiler.prototype.craise = function (s) {
        if (s && s.type && s.type.id && (s.type.id === "StopIteration")) {
            // currently, we only handle StopIteration, and all it does it return
            // undefined which is what our iterator protocol requires.
            //
            // totally hacky, but good enough for now.
            out("return undefined;");
        }
        else {
            var inst = '';
            if (s.inst) {
                // handles: raise Error, arguments
                inst = this.vexpr(s.inst);
                out("throw ", this.vexpr(s.type), "(", inst, ");");
            }
            else if (s.type && s.type instanceof types_10.Call) {
                if (s.type.func) {
                    // handles: raise Error(arguments)
                    out("throw ", this.vexpr(s.type), ";");
                }
                else {
                    // handles: raise Error
                    out("throw ", this.vexpr(s.type), "('');");
                }
            }
            else {
                // re-raise
                out("throw $err;");
            }
        }
    };
    Compiler.prototype.ctryexcept = function (s, flags) {
        var n = s.handlers.length;
        // Create a block for each except clause
        var handlers = [];
        for (var i = 0; i < n; ++i) {
            handlers.push(this.newBlock("except_" + i + "_"));
        }
        var unhandled = this.newBlock("unhandled");
        var orelse = this.newBlock("orelse");
        var end = this.newBlock("end");
        this.setupExcept(handlers[0]);
        this.vseqstmt(s.body, flags);
        this.endExcept();
        for (var i = 0; i < n; ++i) {
            this.setBlock(handlers[i]);
            var handler = s.handlers[i];
            if (!handler.type && i < n - 1) {
                throw new SyntaxError("default 'except:' must be last");
            }
            if (handler.type) {
                // should jump to next handler if err not isinstance of handler.type
                // var handlertype = this.vexpr(handler.type);
                // var next = (i === n - 1) ? unhandled : handlers[i + 1];
                // this check is not right, should use isinstance, but exception objects
                // are not yet proper Python objects
                // var check = this.emitArgs('instance', "$err instanceof ", handlertype);
            }
            if (handler.name) {
                this.vexpr(handler.name, "$err");
            }
            // Need to execute finally before leaving body if an exception is raised
            this.vseqstmt(handler.body, flags);
        }
        // If no except clause catches exception, throw it again
        this.setBlock(unhandled);
        // Should execute finally first
        out("throw $err;");
        this.setBlock(orelse);
        this.vseqstmt(s.orelse, flags);
        this.setBlock(end);
    };
    Compiler.prototype.ctryfinally = function (s, flags) {
        out("/*todo; tryfinally*/");
        // everything but the finally?
        this.ctryexcept(s.body[0], flags);
    };
    Compiler.prototype.cassert = function (s) {
        /* todo; warnings method
        if (s.test instanceof Tuple && s.test.elts.length > 0)
            Sk.warn("assertion is always true, perhaps remove parentheses?");
        */
        // var test = this.vexpr(s.test);
        var end = this.newBlock("end");
        // todo; exception handling
        // maybe replace with fail?? or just an alert?
        out("throw new Sk.builtin.AssertionError(", s.msg ? this.vexpr(s.msg) : "", ");");
        this.setBlock(end);
    };
    Compiler.prototype.cimportas = function (name, asname, mod) {
        var src = name;
        var dotLoc = src.indexOf(".");
        var cur = mod;
        if (dotLoc !== -1) {
            // if there's dots in the module name, __import__ will have returned
            // the top-level module. so, we need to extract the actual module by
            // getattr'ing up through the names, and then storing the leaf under
            // the name it was to be imported as.
            src = src.substr(dotLoc + 1);
            while (dotLoc !== -1) {
                dotLoc = src.indexOf(".");
                // var attr = dotLoc !== -1 ? src.substr(0, dotLoc) : src;
                // cur = this.emitArgs('lattr', "Sk.abstr.gattr(", cur, ",'", attr, "')");
                src = src.substr(dotLoc + 1);
            }
        }
        return this.nameop(asname, types_42.Store, cur);
    };
    Compiler.prototype.cimport = function (s) {
        var n = s.names.length;
        for (var i = 0; i < n; ++i) {
            var alias = s.names[i];
            var mod = this.emitArgs('module', 'Sk.builtin.__import__(', toStringLiteralJS_1.toStringLiteralJS(alias.name), ',$gbl,$loc,[])');
            if (alias.asname) {
                this.cimportas(alias.name, alias.asname, mod);
            }
            else {
                var lastDot = alias.name.indexOf('../pytools');
                if (lastDot !== -1) {
                    this.nameop(alias.name.substr(0, lastDot), types_42.Store, mod);
                }
                else {
                    this.nameop(alias.name, types_42.Store, mod);
                }
            }
        }
    };
    Compiler.prototype.cfromimport = function (s) {
        var n = s.names.length;
        var names = [];
        for (var i = 0; i < n; ++i) {
            names[i] = s.names[i].name;
        }
        // const namesString = names.map(function(name) { return toStringLiteralJS(name); }).join(', ');
        for (var i = 0; i < n; ++i) {
            var alias = s.names[i];
            if (i === 0 && alias.name === "*") {
                asserts_1.assert(n === 1);
                out("import * from " + toStringLiteralJS_1.toStringLiteralJS(s.module) + ";");
                return;
            }
        }
    };
    /**
     * builds a code object (js function) for various constructs. used by def,
     * lambda, generator expressions. it isn't used for class because it seemed
     * different enough.
     *
     * handles:
     * - setting up a new scope
     * - decorators (if any)
     * - defaults setup
     * - setup for cell and free vars
     * - setup and modification for generators
     *
     * @param {Object} n ast node to build for
     * @param {string} coname name of code object to build
     * @param {Array} decorator_list ast of decorators if any
     * @param {*} args arguments to function, if any
     * @param {Function} callback called after setup to do actual work of function
     *
     * @returns the name of the newly created function or generator object.
     *
     */
    Compiler.prototype.buildcodeobj = function (n, coname, decorator_list, args, callback) {
        var decos = [];
        var defaults = [];
        var vararg = null;
        var kwarg = null;
        // decorators and defaults have to be evaluated out here before we enter
        // the new scope. we output the defaults and attach them to this code
        // object, but only once we know the name of it (so we do it after we've
        // exited the scope near the end of this function).
        if (decorator_list)
            decos = this.vseqexpr(decorator_list);
        if (args && args.defaults)
            defaults = this.vseqexpr(args.defaults);
        if (args && args.vararg)
            vararg = args.vararg;
        if (args && args.kwarg)
            kwarg = args.kwarg;
        /**
         *
         */
        var containingHasFree = this.u.ste.hasFree;
        /**
         *
         */
        var containingHasCell = this.u.ste.childHasFree;
        /**
         * enter the new scope, and create the first block
         */
        var scopename = this.enterScope(coname, n, n.lineno);
        var isGenerator = this.u.ste.generator;
        /**
         *
         */
        var hasFree = this.u.ste.hasFree;
        /**
         *
         */
        var hasCell = this.u.ste.childHasFree;
        /**
         *
         */
        var descendantOrSelfHasFree = this.u.ste.hasFree /* || this.u.ste.childHasFree*/;
        /**
         * newBlock returns a number, but we re-assign a string.
         */
        var entryBlock = this.newBlock('codeobj entry');
        //
        // the header of the function, and arguments
        //
        this.u.prefixCode = "var " + scopename + "=(function " + this.niceName(coname) + "$(";
        var funcArgs = [];
        if (isGenerator) {
            if (kwarg) {
                throw new SyntaxError(coname + "(): keyword arguments in generators not supported");
            }
            if (vararg) {
                throw new SyntaxError(coname + "(): variable number of arguments in generators not supported");
            }
            funcArgs.push("$gen");
        }
        else {
            if (kwarg)
                funcArgs.push("$kwa");
            for (var i = 0; args && i < args.args.length; ++i)
                funcArgs.push(this.nameop(args.args[i].id, types_36.Param));
        }
        if (descendantOrSelfHasFree) {
            funcArgs.push("$free");
        }
        this.u.prefixCode += funcArgs.join(",");
        this.u.prefixCode += "){";
        if (isGenerator)
            this.u.prefixCode += "\n// generator\n";
        if (containingHasFree)
            this.u.prefixCode += "\n// containing has free\n";
        if (containingHasCell)
            this.u.prefixCode += "\n// containing has cell\n";
        if (hasFree)
            this.u.prefixCode += "\n// has free\n";
        if (hasCell)
            this.u.prefixCode += "\n// has cell\n";
        //
        // set up standard dicts/variables
        //
        var locals = "{}";
        if (isGenerator) {
            entryBlock = "$gen.gi$resumeat";
            locals = "$gen.gi$locals";
        }
        var cells = "";
        if (hasCell)
            cells = ",$cell={}";
        // note special usage of 'this' to avoid having to slice globals into
        // all function invocations in call
        this.u.varDeclsCode += "var $blk=" + entryBlock + ",$exc=[],$loc=" + locals + cells + ",$gbl=this,$err;";
        //
        // copy all parameters that are also cells into the cells dict. this is so
        // they can be accessed correctly by nested scopes.
        //
        for (var i = 0; args && i < args.args.length; ++i) {
            var id = args.args[i].id;
            if (this.isCell(id)) {
                this.u.varDeclsCode += "$cell." + id + " = " + id + ";";
            }
        }
        //
        // make sure correct number of arguments were passed (generators handled below)
        //
        if (!isGenerator) {
            var minargs = args ? args.args.length - defaults.length : 0;
            var maxargs = vararg ? Infinity : (args ? args.args.length : 0);
            var kw = kwarg ? true : false;
            this.u.varDeclsCode += "Sk.builtin.pyCheckArgs(\"" + coname +
                "\", arguments, " + minargs + ", " + maxargs + ", " + kw +
                ", " + descendantOrSelfHasFree + ");";
        }
        //
        // initialize default arguments. we store the values of the defaults to
        // this code object as .$defaults just below after we exit this scope.
        //
        if (defaults.length > 0) {
            // defaults have to be "right justified" so if there's less defaults
            // than args we offset to make them match up (we don't need another
            // correlation in the ast)
            var offset = args.args.length - defaults.length;
            for (var i = 0; i < defaults.length; ++i) {
                var argname = this.nameop(args.args[i + offset].id, types_36.Param);
                this.u.varDeclsCode += "if(typeof " + argname + " === 'undefined')" + argname + " = " + scopename + ".$defaults[" + i + "];";
            }
        }
        //
        // initialize vararg, if any
        //
        if (vararg) {
            var start = funcArgs.length;
            this.u.varDeclsCode += vararg + "=new Sk.builtins['tuple'](Array.prototype.slice.call(arguments," + start + ")); /*vararg*/";
        }
        //
        // initialize kwarg, if any
        //
        if (kwarg) {
            this.u.varDeclsCode += kwarg + "=new Sk.builtins['dict']($kwa);";
        }
        //
        // finally, set up the block switch that the jump code expects
        //
        // Old switch code
        // this.u.switchCode += "while(true){switch($blk){";
        // this.u.suffixCode = "}break;}});";
        // New switch code to catch exceptions
        this.u.switchCode = "while(true){try{switch($blk){";
        this.u.suffixCode = "}}catch(err){if ($exc.length>0) {$err=err;$blk=$exc.pop();continue;} else {throw err;}}}});";
        //
        // jump back to the handler so it can do the main actual work of the
        // function
        //
        callback.call(this, scopename);
        //
        // get a list of all the argument names (used to attach to the code
        // object, and also to allow us to declare only locals that aren't also
        // parameters).
        var argnames;
        if (args && args.args.length > 0) {
            var argnamesarr = [];
            for (var i = 0; i < args.args.length; ++i) {
                argnamesarr.push(args.args[i].id);
            }
            argnames = argnamesarr.join("', '");
            // store to unit so we know what local variables not to declare
            this.u.argnames = argnamesarr;
        }
        //
        // and exit the code object scope
        //
        this.exitScope();
        //
        // attach the default values we evaluated at the beginning to the code
        // object so that it can get at them to set any arguments that are left
        // unset.
        //
        if (defaults.length > 0)
            out(scopename, ".$defaults=[", defaults.join(','), "];");
        //
        // attach co_varnames (only the argument names) for keyword argument
        // binding.
        //
        if (argnames) {
            out(scopename, ".co_varnames=['", argnames, "'];");
        }
        //
        // attach flags
        //
        if (kwarg) {
            out(scopename, ".co_kwargs=1;");
        }
        //
        // build either a 'function' or 'generator'../pytools the function is just a simple
        // constructor call. the generator is more complicated. it needs to make a
        // new generator every time it's called, so the thing that's returned is
        // actually a function that makes the generator (and passes arguments to
        // the function onwards to the generator). this should probably actually
        // be a function object, rather than a js function like it is now. we also
        // have to build the argument names to pass to the generator because it
        // needs to store all locals into itself so that they're maintained across
        // yields.
        //
        // todo; possibly this should be outside?
        //
        var frees = "";
        if (hasFree) {
            frees = ",$cell";
            // if the scope we're in where we're defining this one has free
            // vars, they may also be cell vars, so we pass those to the
            // closure too.
            if (containingHasFree)
                frees += ",$free";
        }
        if (isGenerator)
            // Keyword and variable arguments are not currently supported in generators.
            // The call to pyCheckArgs assumes they can't be true.
            if (args && args.args.length > 0) {
                return this.emitArgs("gener", "new Sk.builtins['function']((function(){var $origargs=Array.prototype.slice.call(arguments);Sk.builtin.pyCheckArgs(\"", coname, "\",arguments,", args.args.length - defaults.length, ",", args.args.length, ");return new Sk.builtins['generator'](", scopename, ",$gbl,$origargs", frees, ");}))");
            }
            else {
                return this.emitArgs("gener", "new Sk.builtins['function']((function(){Sk.builtin.pyCheckArgs(\"", coname, "\",arguments,0,0);return new Sk.builtins['generator'](", scopename, ",$gbl,[]", frees, ");}))");
            }
        else {
            return this.emitArgs("funcobj", "new Sk.builtins['function'](", scopename, ",$gbl", frees, ")");
        }
    };
    Compiler.prototype.cfunction = function (s) {
        var _this = this;
        asserts_1.assert(s instanceof types_21.FunctionDef);
        var funcorgen = this.buildcodeobj(s, s.name, s.decorator_list, s.args, function (scopename) {
            _this.vseqstmt(s.body);
            out("return Sk.builtin.none.none$;"); // if we fall off the bottom, we want the ret to be None
        });
        this.nameop(s.name, types_42.Store, funcorgen);
    };
    Compiler.prototype.clambda = function (e) {
        var _this = this;
        asserts_1.assert(e instanceof types_29.Lambda);
        var func = this.buildcodeobj(e, "<lambda>", null, e.args, function (scopename) {
            var val = _this.vexpr(e.body);
            out("return ", val, ";");
        });
        return func;
    };
    Compiler.prototype.cifexp = function (e) {
        var next = this.newBlock('next of ifexp');
        var end = this.newBlock('end of ifexp');
        var ret = this.emitArgs('res', 'null');
        // var test = this.vexpr(e.test);
        out(ret, '=', this.vexpr(e.body), ';');
        this.setBlock(next);
        out(ret, '=', this.vexpr(e.orelse), ';');
        this.setBlock(end);
        return ret;
    };
    Compiler.prototype.cgenexpgen = function (generators, genIndex, elt) {
        var start = this.newBlock('start for ' + genIndex);
        var skip = this.newBlock('skip for ' + genIndex);
        // var ifCleanup = this.newBlock('if cleanup for ' + genIndex);
        var end = this.newBlock('end for ' + genIndex);
        var ge = generators[genIndex];
        var iter;
        if (genIndex === 0) {
            // the outer most iterator is evaluated in the scope outside so we
            // have to evaluate it outside and store it into the generator as a
            // local, which we retrieve here.
            iter = "$loc.$iter0";
        }
        else {
            var toiter = this.vexpr(ge.iter);
            iter = "$loc." + this.gensym("iter");
            out(iter, " = ", "Sk.abstr.iter(", toiter, ");");
        }
        this.setBlock(start);
        // load targets
        // var nexti = this.emitArgs('next', "Sk.abstr.iternext(", iter, ")");
        // var target = this.vexpr(ge.target, nexti);
        var n = ge.ifs.length;
        for (var i = 0; i < n; ++i) {
            // var ifres = this.vexpr(ge.ifs[i]);
        }
        if (++genIndex < generators.length) {
            this.cgenexpgen(generators, genIndex, elt);
        }
        if (genIndex >= generators.length) {
            var velt = this.vexpr(elt);
            out("return [", skip, "/*resume*/,", velt, "/*ret*/];");
            this.setBlock(skip);
        }
        this.setBlock(end);
        if (genIndex === 1)
            out("return null;");
    };
    Compiler.prototype.cgenexp = function (e) {
        var _this = this;
        var gen = this.buildcodeobj(e, "<genexpr>", null, null, function (scopename) {
            _this.cgenexpgen(e.generators, 0, e.elt);
        });
        // call the generator maker to get the generator. this is kind of dumb,
        // but the code builder builds a wrapper that makes generators for normal
        // function generators, so we just do it outside (even just new'ing it
        // inline would be fine).
        var gener = this.emitArgs("gener", "Sk.misceval.callsim(", gen, ");");
        // stuff the outermost iterator into the generator after evaluating it
        // outside of the function. it's retrieved by the fixed name above.
        out(gener, ".gi$locals.$iter0=Sk.abstr.iter(", this.vexpr(e.generators[0].iter), ");");
        return gener;
    };
    Compiler.prototype.cclass = function (s, flags) {
        asserts_1.assert(s instanceof types_11.ClassDef);
        // const decos = s.decorator_list;
        // decorators and bases need to be eval'd out here
        // this.vseqexpr(decos);
        var bases = this.vseqexpr(s.bases);
        /**
         *
         */
        var scopename = this.enterScope(s.name, s, s.lineno);
        var entryBlock = this.newBlock('class entry');
        this.u.prefixCode = "var " + scopename + "=(function $" + s.name + "$class_outer($globals,$locals,$rest){var $gbl=$globals,$loc=$locals;";
        this.u.switchCode += "return(function " + s.name + "(){";
        this.u.switchCode += "var $blk=" + entryBlock + ",$exc=[];while(true){switch($blk){";
        this.u.suffixCode = "}break;}}).apply(null,$rest);});";
        this.u.private_ = s.name;
        this.cbody(s.body, flags);
        out("break;");
        // build class
        // apply decorators
        this.exitScope();
        var wrapped = this.emitArgs('built', 'Sk.misceval.buildClass($gbl,', scopename, ',', toStringLiteralJS_1.toStringLiteralJS(s.name), ',[', bases, '])');
        // store our new class under the right name
        this.nameop(s.name, types_42.Store, wrapped);
    };
    Compiler.prototype.ccontinue = function (s) {
        if (this.u.continueBlocks.length === 0)
            throw new SyntaxError("'continue' outside loop");
    };
    Compiler.prototype.vstmt = function (s, flags) {
        this.u.lineno = s.lineno;
        this.u.linenoSet = false;
        this.annotateSource(s);
        if (s instanceof types_21.FunctionDef) {
            return this.cfunction(s);
        }
        else if (s instanceof types_11.ClassDef) {
            return this.cclass(s, flags);
        }
        else if (s instanceof types_40.ReturnStatement) {
            if (this.u.ste.blockType !== SymbolConstants_6.FunctionBlock)
                throw new SyntaxError("'return' outside function");
            if (s.value)
                out("return ", this.vexpr(s.value), ";");
            else
                out("return null;");
        }
        else if (s instanceof types_15.DeleteExpression) {
            return this.vseqexpr(s.targets);
        }
        else if (s instanceof types_2.Assign) {
            var assign = s;
            var n = assign.targets.length;
            var val = this.vexpr(assign.value);
            for (var i = 0; i < n; ++i) {
                this.vexpr(assign.targets[i], val);
            }
        }
        else if (s instanceof types_4.AugAssign) {
            return this.caugassign(s);
        }
        else if (s instanceof types_38.Print) {
            return this.cprint(s);
        }
        else if (s instanceof types_20.ForStatement) {
            return this.cfor(s, flags);
        }
        else if (s instanceof types_49.WhileStatement) {
            return this.cwhile(s, flags);
        }
        else if (s instanceof types_24.IfStatement) {
            return this.ifStatement(s, flags);
        }
        else if (s instanceof types_39.Raise) {
            return this.craise(s);
        }
        else if (s instanceof types_45.TryExcept) {
            return this.ctryexcept(s, flags);
        }
        else if (s instanceof types_46.TryFinally) {
            return this.ctryfinally(s, flags);
        }
        else if (s instanceof types_1.Assert) {
            return this.cassert(s);
        }
        else if (s instanceof types_26.ImportStatement) {
            return this.cimport(s);
        }
        else if (s instanceof types_27.ImportFrom) {
            return this.cfromimport(s);
        }
        else if (s instanceof types_23.Global) {
            return void 0;
        }
        else if (s instanceof types_18.ExpressionStatement) {
            this.vexpr(s.value);
        }
        else if (s instanceof types_37.Pass) {
            return void 0;
        }
        else if (s instanceof types_9.BreakStatement) {
            if (this.u.breakBlocks.length === 0) {
                throw new SyntaxError("'break' outside loop");
            }
        }
        else if (s instanceof types_13.ContinueStatement) {
            this.ccontinue(s);
        }
        else {
            throw new Error("unhandled case in vstmt");
        }
    };
    Compiler.prototype.vseqstmt = function (stmts, flags) {
        for (var i = 0; i < stmts.length; ++i) {
            this.vstmt(stmts[i], flags);
        }
    };
    Compiler.prototype.isCell = function (name) {
        var mangled = mangleName(this.u.private_, name);
        var scope = this.u.ste.getScope(mangled);
        if (scope === SymbolConstants_5.CELL) {
            return true;
        }
        return false;
    };
    Compiler.prototype.nameop = function (name, ctx, dataToStore) {
        if ((ctx === types_42.Store || ctx === types_6.AugStore || ctx === types_14.Del) && name === "__debug__") {
            throw new SyntaxError("can not assign to __debug__");
        }
        if ((ctx === types_42.Store || ctx === types_6.AugStore || ctx === types_14.Del) && name === "None") {
            throw new SyntaxError("can not assign to None");
        }
        if (name === "None")
            return "Sk.builtin.none.none$";
        if (name === "True")
            return "Sk.ffi.bool.True";
        if (name === "False")
            return "Sk.ffi.bool.False";
        // Have to do this before looking it up in the scope
        var mangled = mangleName(this.u.private_, name);
        var optype = OP_NAME;
        var scope = this.u.ste.getScope(mangled);
        var dict = null;
        switch (scope) {
            case SymbolConstants_4.FREE:
                dict = "$free";
                optype = OP_DEREF;
                break;
            case SymbolConstants_5.CELL:
                dict = "$cell";
                optype = OP_DEREF;
                break;
            case SymbolConstants_1.LOCAL:
                // can't do FAST in generators or at module/class scope
                if (this.u.ste.blockType === SymbolConstants_6.FunctionBlock && !this.u.ste.generator)
                    optype = OP_FAST;
                break;
            case SymbolConstants_3.GLOBAL_IMPLICIT:
                if (this.u.ste.blockType === SymbolConstants_6.FunctionBlock)
                    optype = OP_GLOBAL;
                break;
            case SymbolConstants_2.GLOBAL_EXPLICIT:
                optype = OP_GLOBAL;
            default:
                break;
        }
        // have to do this after looking it up in the scope
        mangled = fixReservedNames(mangled);
        mangled = fixReservedWords(mangled);
        // print("mangled", mangled);
        // TODO TODO TODO todo; import * at global scope failing here
        asserts_1.assert(scope || name.charAt(1) === '_');
        // in generator or at module scope, we need to store to $loc, rather that
        // to actual JS stack variables.
        var mangledNoPre = mangled;
        if (this.u.ste.generator || this.u.ste.blockType !== SymbolConstants_6.FunctionBlock) {
            // No need to change mangled.
        }
        else if (optype === OP_FAST || optype === OP_NAME)
            this.u.localnames.push(mangled);
        switch (optype) {
            case OP_FAST:
                switch (ctx) {
                    case types_32.Load:
                    case types_36.Param:
                        // Need to check that it is bound!
                        // out("if (typeof ", mangled, " === 'undefined') { throw new Error('local variable \\\'", mangled, "\\\' referenced before assignment'); }\n");
                        return mangled;
                    case types_42.Store:
                        // out(mangled, " = ", dataToStore, ";");
                        break;
                    case types_14.Del:
                        // out("delete ", mangled, ";");
                        break;
                    default:
                        throw new Error("unhandled");
                }
                break;
            case OP_NAME:
                switch (ctx) {
                    case types_32.Load:
                        // out(mangledNoPre);
                        break;
                    case types_42.Store:
                        // out(mangled, " = ", dataToStore, ";");
                        break;
                    case types_14.Del:
                        // out("delete ", mangled, ";");
                        break;
                    case types_36.Param:
                        return mangled;
                    default:
                        throw new Error("unhandled");
                }
                break;
            case OP_GLOBAL:
                switch (ctx) {
                    case types_32.Load:
                        return mangledNoPre;
                    case types_42.Store:
                        // out("$gbl.", mangledNoPre, " = ", dataToStore, ';');
                        break;
                    case types_14.Del:
                        // out("delete $gbl.", mangledNoPre);
                        break;
                    default:
                        throw new Error("unhandled case in name op_global");
                }
                break;
            case OP_DEREF:
                switch (ctx) {
                    case types_32.Load:
                        return dict + "." + mangledNoPre;
                    case types_42.Store:
                        // out(dict, ".", mangledNoPre, " = ", dataToStore, ";");
                        break;
                    case types_36.Param:
                        return mangledNoPre;
                    default:
                        throw new Error("unhandled case in name op_deref");
                }
                break;
            default:
                throw new Error("unhandled case");
        }
        throw new Error("TODO");
    };
    Compiler.prototype.enterScope = function (name, key, lineno) {
        var u = new CompilerUnit();
        u.ste = this.st.getStsForAst(key);
        u.name = name;
        u.firstlineno = lineno;
        if (this.u && this.u.private_) {
            u.private_ = this.u.private_;
        }
        this.stack.push(this.u);
        this.allUnits.push(u);
        var scopeName = this.gensym('scope');
        u.scopename = scopeName;
        this.u = u;
        this.u.activateScope();
        this.nestlevel++;
        return scopeName;
    };
    Compiler.prototype.exitScope = function () {
        var prev = this.u;
        this.nestlevel--;
        if (this.stack.length - 1 >= 0)
            this.u = this.stack.pop();
        else {
            this.u = null;
        }
        if (this.u)
            this.u.activateScope();
        if (prev.name !== "<module>") {
            var mangled = prev.name;
            mangled = fixReservedWords(mangled);
            mangled = fixReservedNames(mangled);
            // out(prev.scopename, ".co_name=Sk.builtin.stringToPy('", mangled, "');");
        }
    };
    /**
     *
     */
    Compiler.prototype.cbody = function (stmts, flags) {
        for (var i = 0; i < stmts.length; ++i) {
            this.vstmt(stmts[i], flags);
        }
    };
    Compiler.prototype.cprint = function (s) {
        asserts_1.assert(s instanceof types_38.Print);
        var dest = 'null';
        if (s.dest) {
            dest = this.vexpr(s.dest);
        }
        var n = s.values.length;
        for (var i = 0; i < n; ++i) {
            // out("Sk.misceval.print_(Sk.ffi.remapToJs(new Sk.builtins.str(", this.vexpr(s.values[i]), ")));");
        }
        if (s.nl) {
            // out("Sk.misceval.print_('\\n');");
        }
    };
    Compiler.prototype.cmod = function (mod, flags) {
        var modf = this.enterScope("<module>", mod, 0);
        /* const entryBlock = */ this.newBlock('module entry');
        // this.u.prefixCode = "var " + modf + "=(function($modname){";
        // this.u.varDeclsCode = "var $blk=" + entryBlock + ",$exc=[],$gbl={},$loc=$gbl,$err;$gbl.__name__=$modname;Sk.globals=$gbl;";
        // this.u.switchCode = "try {while(true){try{switch($blk){";
        // this.u.suffixCode = "}}catch(err){if ($exc.length>0) {$err=err;$blk=$exc.pop();continue;} else {throw err;}}}}catch(err){if (err instanceof Sk.builtin.SystemExit && !Sk.throwSystemExit) { Sk.misceval.print_(err.toString() + '\\n'); return $loc; } else { throw err; } } });";
        switch (mod.constructor) {
            case types_33.Module:
                this.cbody(mod.body, flags);
                break;
            default:
                throw new Error("todo; unhandled case in compilerMod");
        }
        this.exitScope();
        this.result.push(this.outputAllUnits());
        return modf;
    };
    return Compiler;
}());
exports.Compiler = Compiler;
/**
 * Appends "_$rw$" to any word that is in the list of reserved words.
 */
function fixReservedWords(word) {
    if (reservedWords_1.reservedWords[word] !== true) {
        return word;
    }
    return word + "_$rw$";
}
/**
 * Appends "_$rn$" to any name that is in the list of reserved names.
 */
function fixReservedNames(name) {
    if (reservedNames_1.reservedNames[name])
        return name + "_$rn$";
    return name;
}
/**
 * @param priv
 * @param name
 * @return The mangled name.
 */
function mangleName(priv, name) {
    var strpriv = null;
    if (priv === null || name === null || name.charAt(0) !== '_' || name.charAt(1) !== '_')
        return name;
    // don't mangle __id__
    if (name.charAt(name.length - 1) === '_' && name.charAt(name.length - 2) === '_')
        return name;
    // don't mangle classes that are all _ (obscure much?)
    strpriv = priv;
    strpriv.replace(/_/g, '');
    if (strpriv === '')
        return name;
    strpriv = priv;
    strpriv.replace(/^_*/, '');
    return '_' + strpriv + name;
}
/**
 * TODO: Rename compileModule
 */
function compile(source, fileName) {
    var resultFile = ts.createSourceFile(fileName, "", ts.ScriptTarget.Latest, /*setParentNodes*/ false, ts.ScriptKind.TS);
    var printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    var code = printer.printNode(ts.EmitHint.Unspecified, transpileModule(source), resultFile);
    return { code: code };
}
exports.compile = compile;
function compileExpression(source, fileName) {
    var resultFile = ts.createSourceFile(fileName, "", ts.ScriptTarget.Latest, /*setParentNodes*/ false, ts.ScriptKind.TS);
    var printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    var code = printer.printNode(ts.EmitHint.Expression, transpileExpression(source), resultFile);
    return { code: code };
}
exports.compileExpression = compileExpression;
function compileSingle(source, fileName) {
    var resultFile = ts.createSourceFile(fileName, "", ts.ScriptTarget.Latest, /*setParentNodes*/ false, ts.ScriptKind.TS);
    var printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    var code = printer.printNode(ts.EmitHint.Expression, transpileSingle(source)[0], resultFile);
    return { code: code };
}
exports.compileSingle = compileSingle;
function resetCompiler() {
    gensymCount = 0;
}
exports.resetCompiler = resetCompiler;
/**
 * Transpiles from Python to JavaScript.
 */
var Transpiler = (function () {
    function Transpiler(st, flags, sourceCodeForAnnotation) {
        this.st = st;
        this.flags = flags;
        this.interactive = false;
        this.nestlevel = 0;
        this.u = null;
        this.stack = [];
        this.result = [];
        // this.gensymcount = 0;
        this.allUnits = [];
        this.source = sourceCodeForAnnotation ? sourceCodeForAnnotation.split("\n") : false;
    }
    Transpiler.prototype.module = function (ast, flags) {
        // const node: ts.Node = new Node();
        var body = this.statementList(ast.body, flags);
        return ts.createModuleBlock(body);
        // node.finishProgram(body);
        // return node;
        // throw new Error(`TODO: module`);
    };
    Transpiler.prototype.statementList = function (stmts, flags) {
        var nodes = [];
        var iLen = stmts.length;
        for (var i = 0; i < iLen; i++) {
            var stmt = stmts[i];
            nodes.push(this.statement(stmt, flags));
        }
        return nodes;
    };
    Transpiler.prototype.statement = function (s, flags) {
        // this.u.lineno = s.lineno;
        // this.u.linenoSet = false;
        // this.annotateSource(s);
        if (s instanceof types_18.ExpressionStatement) {
            return ts.createStatement(this.expr(s.value, flags));
        }
        else if (s instanceof types_2.Assign) {
            return ts.createStatement(this.assign(s, flags));
        }
        switch (s.constructor) {
            /*
            case FunctionDef:
                return this.functionDef(s, flags);
            case ClassDef:
                return this.classDef(s, flags);
            case ReturnStatement: {
                return this.returnStatement(<ReturnStatement>s, flags);
            }
            case DeleteExpression:
                return this.deleteExpression((<DeleteExpression>s), flags);
            case Assign: {
                return this.assign(<Assign>s, flags);
            }
            case AugAssign: {
                return this.augAssign(<AugAssign>s, flags);
            }
            case Print: {
                this.print(<Print>s, flags);
                throw new Error("Print");
                // break;
            }
            case ForStatement: {
                return this.forStatement(<ForStatement>s, flags);
            }
            case WhileStatement: {
                return this.whileStatement(<WhileStatement>s, flags);
            }
            case IfStatement: {
                return this.ifStatement(<IfStatement>s, flags);
            }
            case Raise: {
                return this.raise(<Raise>s, flags);
            }
            case TryExcept: {
                return this.tryExcept(<TryExcept>s, flags);
            }
            case TryFinally: {
                return this.tryFinally(<TryFinally>s, flags);
            }
            case Assert: {
                return this.assert(<Assert>s, flags);
            }
            case ImportStatement:
                return this.importStatement(<ImportStatement>s, flags);
            case ImportFrom:
                return this.importFrom(<ImportFrom>s, flags);
            case Global:
                throw new Error("Gloabl");
            // break;
            case Expr:
                return this.expr((<Expr>s), flags);
            case Pass:
                throw new Error("Pass");
            // break;
            case BreakStatement:
                return this.breakStatement((<BreakStatement>s), flags);
            case ContinueStatement:
                return this.continueStatement(<ContinueStatement>s, flags);
            */
            default: {
                throw new Error("statement(s = " + JSON.stringify(s) + ", flags = " + flags + ")");
            }
        }
    };
    Transpiler.prototype.assert = function (a, flags) {
        throw new Error("Assert");
    };
    Transpiler.prototype.breakStatement = function (b, flags) {
        /*
        if (this.u.breakBlocks.length === 0)
            throw new SyntaxError("'break' outside loop");
        break;
        */
        throw new Error("BreakStatement");
    };
    Transpiler.prototype.classDef = function (c, flags) {
        throw new Error("ClassDef");
    };
    Transpiler.prototype.continueStatement = function (c, flags) {
        throw new Error("ContinueStatement");
    };
    Transpiler.prototype.forStatement = function (fs, flags) {
        throw new Error("ForStatement");
    };
    Transpiler.prototype.functionDef = function (f, flags) {
        throw new Error("FunctionDef");
    };
    Transpiler.prototype.ifStatement = function (fs, flags) {
        throw new Error("IfStatement");
    };
    Transpiler.prototype.importFrom = function (i, flags) {
        // const node = new Node();
        // node.fi
        throw new Error("ImportFrom");
    };
    Transpiler.prototype.importStatement = function (i, flags) {
        throw new Error("ImportStatement");
    };
    Transpiler.prototype.returnStatement = function (rs, flags) {
        /*
        if (this.u.ste.blockType !== FunctionBlock)
            throw new SyntaxError("'return' outside function");
        if (rs.value)
            out("return ", this.vexpr(rs.value), ";");
        else
            out("return null;");
        */
        throw new Error("ClassDef");
    };
    Transpiler.prototype.deleteExpression = function (de, flags) {
        throw new Error("DeleteExpression");
    };
    Transpiler.prototype.assign = function (assign, flags) {
        // const node = new Node();
        // node.finishAssignmentExpression(operator, left, right);
        var right = this.expr(assign.value, flags);
        var n = assign.targets.length;
        var lhs;
        for (var i = 0; i < n; ++i)
            lhs = this.expr(assign.targets[i], flags);
        // return node;
        return ts.createAssignment(lhs, right);
        // throw new Error("Assign");
    };
    Transpiler.prototype.augAssign = function (aa, flags) {
        throw new Error("FunctionDef");
    };
    Transpiler.prototype.expr = function (expr, flags) {
        console.log("" + JSON.stringify(expr));
        if (expr instanceof types_35.Num) {
            return ts.createLiteral(expr.n.value);
        }
        else if (expr instanceof types_34.Name) {
            return ts.createIdentifier(expr.id);
        }
        throw new Error("" + JSON.stringify(expr));
    };
    Transpiler.prototype.print = function (p, flags) {
        throw new Error("Print");
    };
    Transpiler.prototype.raise = function (raise, flags) {
        throw new Error("Raise");
    };
    Transpiler.prototype.tryExcept = function (te, flags) {
        throw new Error("TryExcept");
    };
    Transpiler.prototype.tryFinally = function (tf, flags) {
        throw new Error("TryFinally");
    };
    Transpiler.prototype.whileStatement = function (ws, flags) {
        throw new Error("WhileStatement");
    };
    return Transpiler;
}());
/**
 *
 * @param sourceText
 * @param sourceKind
 */
function transpileModule(sourceText) {
    var cst = parser_1.parse(sourceText, parser_1.SourceKind.File);
    if (typeof cst === 'object') {
        var stmts = builder_1.astFromParse(cst);
        var mod = new types_33.Module(stmts);
        var st = symtable_1.symbolTable(mod);
        var t = new Transpiler(st, 0, sourceText);
        var flags = 0;
        // FIXME: This should be according to the sourceKind.
        return t.module(mod, flags);
    }
    else {
        throw new Error("Error parsing source for file.");
    }
}
exports.transpileModule = transpileModule;
function transpileExpression(sourceText) {
    var cst = parser_1.parse(sourceText, parser_1.SourceKind.Single);
    if (typeof cst === 'object') {
        var expr = builder_1.astFromExpression(cst);
        // const st = symbolTableFromStatements(stmts);
        var t = new Transpiler(undefined, 0, sourceText);
        var flags = 0;
        // FIXME: This should be according to the sourceKind.
        return t.expr(expr, flags);
    }
    else {
        throw new Error("Error parsing source for file.");
    }
}
exports.transpileExpression = transpileExpression;
function transpileSingle(sourceText) {
    var cst = parser_1.parse(sourceText, parser_1.SourceKind.Single);
    if (typeof cst === 'object') {
        var stmts = builder_1.astFromParse(cst);
        var st = symtable_1.symbolTableFromStatements(stmts);
        var t = new Transpiler(st, 0, sourceText);
        var flags = 0;
        // FIXME: This should be according to the sourceKind.
        return t.statementList(stmts, flags);
    }
    else {
        throw new Error("Error parsing source for file.");
    }
}
exports.transpileSingle = transpileSingle;