// DO NOT MODIFY. File automatically generated by pgen/parser/main.py
import { Tokens } from './Tokens';

/**
 * Mapping from operator textual symbols to token symbolic constants.
 */
export const OpMap: { [op: string]: Tokens } = {
    "(": Tokens.T_LPAR,
    ")": Tokens.T_RPAR,
    "[": Tokens.T_LSQB,
    "]": Tokens.T_RSQB,
    ":": Tokens.T_COLON,
    ",": Tokens.T_COMMA,
    ";": Tokens.T_SEMI,
    "+": Tokens.T_PLUS,
    "-": Tokens.T_MINUS,
    "*": Tokens.T_STAR,
    "/": Tokens.T_SLASH,
    "|": Tokens.T_VBAR,
    "&": Tokens.T_AMPER,
    "<": Tokens.T_LESS,
    ">": Tokens.T_GREATER,
    "=": Tokens.T_EQUAL,
    ".": Tokens.T_DOT,
    "%": Tokens.T_PERCENT,
    "`": Tokens.T_BACKQUOTE,
    "{": Tokens.T_LBRACE,
    "}": Tokens.T_RBRACE,
    "@": Tokens.T_AT,
    "==": Tokens.T_EQEQUAL,
    "!=": Tokens.T_NOTEQUAL,
    "<>": Tokens.T_NOTEQUAL,
    "<=": Tokens.T_LESSEQUAL,
    ">=": Tokens.T_GREATEREQUAL,
    "~": Tokens.T_TILDE,
    "^": Tokens.T_CIRCUMFLEX,
    "<<": Tokens.T_LEFTSHIFT,
    ">>": Tokens.T_RIGHTSHIFT,
    "**": Tokens.T_DOUBLESTAR,
    "+=": Tokens.T_PLUSEQUAL,
    "-=": Tokens.T_MINEQUAL,
    "*=": Tokens.T_STAREQUAL,
    "/=": Tokens.T_SLASHEQUAL,
    "%=": Tokens.T_PERCENTEQUAL,
    "&=": Tokens.T_AMPEREQUAL,
    "|=": Tokens.T_VBAREQUAL,
    "^=": Tokens.T_CIRCUMFLEXEQUAL,
    "<<=": Tokens.T_LEFTSHIFTEQUAL,
    ">>=": Tokens.T_RIGHTSHIFTEQUAL,
    "**=": Tokens.T_DOUBLESTAREQUAL,
    "//": Tokens.T_DOUBLESLASH,
    "//=": Tokens.T_DOUBLESLASHEQUAL,
    "->": Tokens.T_RARROW
};

/**
 *
 */
export const ParseTables = {
sym:
{AndExpr: 257,
 ArithmeticExpr: 258,
 AtomExpr: 259,
 BitwiseAndExpr: 260,
 BitwiseOrExpr: 261,
 BitwiseXorExpr: 262,
 ComparisonExpr: 263,
 ExprList: 264,
 ExprStmt: 265,
 GeometricExpr: 266,
 GlobalStmt: 267,
 IfExpr: 268,
 ImportList: 269,
 ImportSpecifier: 270,
 LambdaExpr: 271,
 ModuleSpecifier: 272,
 NonLocalStmt: 273,
 NotExpr: 274,
 OrExpr: 275,
 PowerExpr: 276,
 ShiftExpr: 277,
 UnaryExpr: 278,
 YieldExpr: 279,
 arglist: 280,
 argument: 281,
 assert_stmt: 282,
 augassign: 283,
 break_stmt: 284,
 classdef: 285,
 comp_op: 286,
 compound_stmt: 287,
 continue_stmt: 288,
 decorated: 289,
 decorator: 290,
 decorators: 291,
 del_stmt: 292,
 dictmaker: 293,
 dotted_as_name: 294,
 dotted_as_names: 295,
 dotted_name: 296,
 encoding_decl: 297,
 eval_input: 298,
 except_clause: 299,
 exec_stmt: 300,
 file_input: 301,
 flow_stmt: 302,
 for_stmt: 303,
 fpdef: 304,
 fplist: 305,
 funcdef: 306,
 gen_for: 307,
 gen_if: 308,
 gen_iter: 309,
 if_stmt: 310,
 import_from: 311,
 import_name: 312,
 import_stmt: 313,
 list_for: 314,
 list_if: 315,
 list_iter: 316,
 listmaker: 317,
 old_LambdaExpr: 318,
 old_test: 319,
 parameters: 320,
 pass_stmt: 321,
 print_stmt: 322,
 raise_stmt: 323,
 return_stmt: 324,
 simple_stmt: 325,
 single_input: 256,
 sliceop: 326,
 small_stmt: 327,
 stmt: 328,
 subscript: 329,
 subscriptlist: 330,
 suite: 331,
 testlist: 332,
 testlist1: 333,
 testlist_gexp: 334,
 testlist_safe: 335,
 trailer: 336,
 try_stmt: 337,
 varargslist: 338,
 while_stmt: 339,
 with_stmt: 340,
 with_var: 341,
 yield_stmt: 342},
number2symbol:
{256: 'single_input',
 257: 'AndExpr',
 258: 'ArithmeticExpr',
 259: 'AtomExpr',
 260: 'BitwiseAndExpr',
 261: 'BitwiseOrExpr',
 262: 'BitwiseXorExpr',
 263: 'ComparisonExpr',
 264: 'ExprList',
 265: 'ExprStmt',
 266: 'GeometricExpr',
 267: 'GlobalStmt',
 268: 'IfExpr',
 269: 'ImportList',
 270: 'ImportSpecifier',
 271: 'LambdaExpr',
 272: 'ModuleSpecifier',
 273: 'NonLocalStmt',
 274: 'NotExpr',
 275: 'OrExpr',
 276: 'PowerExpr',
 277: 'ShiftExpr',
 278: 'UnaryExpr',
 279: 'YieldExpr',
 280: 'arglist',
 281: 'argument',
 282: 'assert_stmt',
 283: 'augassign',
 284: 'break_stmt',
 285: 'classdef',
 286: 'comp_op',
 287: 'compound_stmt',
 288: 'continue_stmt',
 289: 'decorated',
 290: 'decorator',
 291: 'decorators',
 292: 'del_stmt',
 293: 'dictmaker',
 294: 'dotted_as_name',
 295: 'dotted_as_names',
 296: 'dotted_name',
 297: 'encoding_decl',
 298: 'eval_input',
 299: 'except_clause',
 300: 'exec_stmt',
 301: 'file_input',
 302: 'flow_stmt',
 303: 'for_stmt',
 304: 'fpdef',
 305: 'fplist',
 306: 'funcdef',
 307: 'gen_for',
 308: 'gen_if',
 309: 'gen_iter',
 310: 'if_stmt',
 311: 'import_from',
 312: 'import_name',
 313: 'import_stmt',
 314: 'list_for',
 315: 'list_if',
 316: 'list_iter',
 317: 'listmaker',
 318: 'old_LambdaExpr',
 319: 'old_test',
 320: 'parameters',
 321: 'pass_stmt',
 322: 'print_stmt',
 323: 'raise_stmt',
 324: 'return_stmt',
 325: 'simple_stmt',
 326: 'sliceop',
 327: 'small_stmt',
 328: 'stmt',
 329: 'subscript',
 330: 'subscriptlist',
 331: 'suite',
 332: 'testlist',
 333: 'testlist1',
 334: 'testlist_gexp',
 335: 'testlist_safe',
 336: 'trailer',
 337: 'try_stmt',
 338: 'varargslist',
 339: 'while_stmt',
 340: 'with_stmt',
 341: 'with_var',
 342: 'yield_stmt'},
dfas:
{256: [[[[1, 1], [2, 1], [3, 2]], [[0, 1]], [[2, 1]]],
       {2: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        29: 1,
        30: 1,
        31: 1,
        32: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1}],
 257: [[[[38, 1]], [[39, 0], [0, 1]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 258: [[[[40, 1]], [[25, 0], [37, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 25: 1, 29: 1, 32: 1, 37: 1}],
 259: [[[[21, 1], [8, 1], [9, 4], [29, 3], [32, 2], [14, 5], [18, 6]],
        [[0, 1]],
        [[41, 7], [42, 1]],
        [[43, 1], [44, 8], [45, 8]],
        [[46, 9], [47, 1]],
        [[48, 10]],
        [[18, 6], [0, 6]],
        [[42, 1]],
        [[43, 1]],
        [[47, 1]],
        [[14, 1]]],
       {8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 29: 1, 32: 1}],
 260: [[[[49, 1]], [[50, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 25: 1, 29: 1, 32: 1, 37: 1}],
 261: [[[[51, 1]], [[52, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 25: 1, 29: 1, 32: 1, 37: 1}],
 262: [[[[53, 1]], [[54, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 25: 1, 29: 1, 32: 1, 37: 1}],
 263: [[[[55, 1]], [[56, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 25: 1, 29: 1, 32: 1, 37: 1}],
 264: [[[[55, 1]], [[57, 2], [0, 1]], [[55, 1], [0, 2]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 25: 1, 29: 1, 32: 1, 37: 1}],
 265: [[[[58, 1]],
        [[59, 2], [60, 3], [0, 1]],
        [[58, 4], [45, 4]],
        [[58, 5], [45, 5]],
        [[0, 4]],
        [[60, 3], [0, 5]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 266: [[[[61, 1]], [[62, 0], [63, 0], [64, 0], [65, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 25: 1, 29: 1, 32: 1, 37: 1}],
 267: [[[[27, 1]], [[21, 2]], [[57, 1], [0, 2]]], {27: 1}],
 268: [[[[66, 1], [67, 2]],
        [[0, 1]],
        [[31, 3], [0, 2]],
        [[67, 4]],
        [[68, 5]],
        [[69, 1]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 269: [[[[70, 1]], [[57, 2], [0, 1]], [[70, 1], [0, 2]]], {21: 1}],
 270: [[[[21, 1]], [[71, 2], [0, 1]], [[21, 3]], [[0, 3]]], {21: 1}],
 271: [[[[11, 1]], [[72, 2], [73, 3]], [[69, 4]], [[72, 2]], [[0, 4]]],
       {11: 1}],
 272: [[[[18, 1]], [[0, 1]]], {18: 1}],
 273: [[[[13, 1]], [[21, 2]], [[57, 1], [0, 2]]], {13: 1}],
 274: [[[[7, 1], [74, 2]], [[38, 2]], [[0, 2]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 275: [[[[75, 1]], [[76, 0], [0, 1]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 276: [[[[77, 1]], [[78, 1], [79, 2], [0, 1]], [[49, 3]], [[0, 3]]],
       {8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 29: 1, 32: 1}],
 277: [[[[80, 1]], [[81, 0], [82, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 25: 1, 29: 1, 32: 1, 37: 1}],
 278: [[[[25, 1], [6, 1], [37, 1], [83, 2]], [[49, 2]], [[0, 2]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 25: 1, 29: 1, 32: 1, 37: 1}],
 279: [[[[26, 1]], [[58, 2], [0, 1]], [[0, 2]]], {26: 1}],
 280: [[[[63, 1], [84, 2], [79, 3]],
        [[69, 4]],
        [[57, 5], [0, 2]],
        [[69, 6]],
        [[57, 7], [0, 4]],
        [[63, 1], [84, 2], [79, 3], [0, 5]],
        [[0, 6]],
        [[84, 4], [79, 3]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1,
        63: 1,
        79: 1}],
 281: [[[[69, 1]], [[85, 2], [60, 3], [0, 1]], [[0, 2]], [[69, 2]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 282: [[[[20, 1]], [[69, 2]], [[57, 3], [0, 2]], [[69, 4]], [[0, 4]]],
       {20: 1}],
 283: [[[[86, 1],
         [87, 1],
         [88, 1],
         [89, 1],
         [90, 1],
         [91, 1],
         [92, 1],
         [93, 1],
         [94, 1],
         [95, 1],
         [96, 1],
         [97, 1]],
        [[0, 1]]],
       {86: 1,
        87: 1,
        88: 1,
        89: 1,
        90: 1,
        91: 1,
        92: 1,
        93: 1,
        94: 1,
        95: 1,
        96: 1,
        97: 1}],
 284: [[[[33, 1]], [[0, 1]]], {33: 1}],
 285: [[[[10, 1]],
        [[21, 2]],
        [[72, 3], [29, 4]],
        [[98, 5]],
        [[43, 6], [58, 7]],
        [[0, 5]],
        [[72, 3]],
        [[43, 6]]],
       {10: 1}],
 286: [[[[99, 1],
         [100, 1],
         [7, 2],
         [99, 1],
         [101, 1],
         [102, 1],
         [103, 1],
         [104, 3],
         [105, 1],
         [106, 1]],
        [[0, 1]],
        [[102, 1]],
        [[7, 1], [0, 3]]],
       {7: 1, 99: 1, 100: 1, 101: 1, 102: 1, 103: 1, 104: 1, 105: 1, 106: 1}],
 287: [[[[107, 1],
         [108, 1],
         [109, 1],
         [110, 1],
         [111, 1],
         [112, 1],
         [113, 1],
         [114, 1]],
        [[0, 1]]],
       {4: 1, 10: 1, 15: 1, 17: 1, 28: 1, 31: 1, 35: 1, 36: 1}],
 288: [[[[34, 1]], [[0, 1]]], {34: 1}],
 289: [[[[115, 1]], [[113, 2], [110, 2]], [[0, 2]]], {35: 1}],
 290: [[[[35, 1]],
        [[116, 2]],
        [[2, 4], [29, 3]],
        [[43, 5], [117, 6]],
        [[0, 4]],
        [[2, 4]],
        [[43, 5]]],
       {35: 1}],
 291: [[[[118, 1]], [[118, 1], [0, 1]]], {35: 1}],
 292: [[[[22, 1]], [[119, 2]], [[0, 2]]], {22: 1}],
 293: [[[[69, 1]],
        [[72, 2]],
        [[69, 3]],
        [[57, 4], [0, 3]],
        [[69, 1], [0, 4]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 294: [[[[116, 1]], [[71, 2], [0, 1]], [[21, 3]], [[0, 3]]], {21: 1}],
 295: [[[[120, 1]], [[57, 0], [0, 1]]], {21: 1}],
 296: [[[[21, 1]], [[121, 0], [0, 1]]], {21: 1}],
 297: [[[[21, 1]], [[0, 1]]], {21: 1}],
 298: [[[[58, 1]], [[2, 1], [122, 2]], [[0, 2]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 299: [[[[123, 1]],
        [[69, 2], [0, 1]],
        [[71, 3], [57, 3], [0, 2]],
        [[69, 4]],
        [[0, 4]]],
       {123: 1}],
 300: [[[[16, 1]],
        [[55, 2]],
        [[102, 3], [0, 2]],
        [[69, 4]],
        [[57, 5], [0, 4]],
        [[69, 6]],
        [[0, 6]]],
       {16: 1}],
 301: [[[[2, 0], [122, 1], [124, 0]], [[0, 1]]],
       {2: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        29: 1,
        30: 1,
        31: 1,
        32: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1,
        122: 1}],
 302: [[[[125, 1], [126, 1], [127, 1], [128, 1], [129, 1]], [[0, 1]]],
       {5: 1, 19: 1, 26: 1, 33: 1, 34: 1}],
 303: [[[[28, 1]],
        [[119, 2]],
        [[102, 3]],
        [[58, 4]],
        [[72, 5]],
        [[98, 6]],
        [[68, 7], [0, 6]],
        [[72, 8]],
        [[98, 9]],
        [[0, 9]]],
       {28: 1}],
 304: [[[[29, 1], [21, 2]], [[130, 3]], [[0, 2]], [[43, 2]]], {21: 1, 29: 1}],
 305: [[[[131, 1]], [[57, 2], [0, 1]], [[131, 1], [0, 2]]], {21: 1, 29: 1}],
 306: [[[[4, 1]], [[21, 2]], [[132, 3]], [[72, 4]], [[98, 5]], [[0, 5]]],
       {4: 1}],
 307: [[[[28, 1]],
        [[119, 2]],
        [[102, 3]],
        [[67, 4]],
        [[133, 5], [0, 4]],
        [[0, 5]]],
       {28: 1}],
 308: [[[[31, 1]], [[134, 2]], [[133, 3], [0, 2]], [[0, 3]]], {31: 1}],
 309: [[[[85, 1], [135, 1]], [[0, 1]]], {28: 1, 31: 1}],
 310: [[[[31, 1]],
        [[69, 2]],
        [[72, 3]],
        [[98, 4]],
        [[68, 5], [136, 1], [0, 4]],
        [[72, 6]],
        [[98, 7]],
        [[0, 7]]],
       {31: 1}],
 311: [[[[30, 1]],
        [[137, 2]],
        [[24, 3]],
        [[138, 4], [29, 5], [63, 4]],
        [[0, 4]],
        [[138, 6]],
        [[43, 4]]],
       {30: 1}],
 312: [[[[24, 1]], [[139, 2]], [[0, 2]]], {24: 1}],
 313: [[[[140, 1], [141, 1]], [[0, 1]]], {24: 1, 30: 1}],
 314: [[[[28, 1]],
        [[119, 2]],
        [[102, 3]],
        [[142, 4]],
        [[143, 5], [0, 4]],
        [[0, 5]]],
       {28: 1}],
 315: [[[[31, 1]], [[134, 2]], [[143, 3], [0, 2]], [[0, 3]]], {31: 1}],
 316: [[[[144, 1], [145, 1]], [[0, 1]]], {28: 1, 31: 1}],
 317: [[[[69, 1]],
        [[144, 2], [57, 3], [0, 1]],
        [[0, 2]],
        [[69, 4], [0, 3]],
        [[57, 3], [0, 4]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 318: [[[[11, 1]], [[72, 2], [73, 3]], [[134, 4]], [[72, 2]], [[0, 4]]],
       {11: 1}],
 319: [[[[146, 1], [67, 1]], [[0, 1]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 320: [[[[29, 1]], [[43, 2], [73, 3]], [[0, 2]], [[43, 2]]], {29: 1}],
 321: [[[[23, 1]], [[0, 1]]], {23: 1}],
 322: [[[[12, 1]],
        [[69, 2], [81, 3], [0, 1]],
        [[57, 4], [0, 2]],
        [[69, 5]],
        [[69, 2], [0, 4]],
        [[57, 6], [0, 5]],
        [[69, 7]],
        [[57, 8], [0, 7]],
        [[69, 7], [0, 8]]],
       {12: 1}],
 323: [[[[5, 1]],
        [[69, 2], [0, 1]],
        [[57, 3], [0, 2]],
        [[69, 4]],
        [[57, 5], [0, 4]],
        [[69, 6]],
        [[0, 6]]],
       {5: 1}],
 324: [[[[19, 1]], [[58, 2], [0, 1]], [[0, 2]]], {19: 1}],
 325: [[[[147, 1]], [[2, 2], [148, 3]], [[0, 2]], [[147, 1], [2, 2]]],
       {5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        16: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        29: 1,
        30: 1,
        32: 1,
        33: 1,
        34: 1,
        37: 1}],
 326: [[[[72, 1]], [[69, 2], [0, 1]], [[0, 2]]], {72: 1}],
 327: [[[[149, 1],
         [150, 1],
         [151, 1],
         [152, 1],
         [153, 1],
         [154, 1],
         [155, 1],
         [156, 1],
         [157, 1],
         [158, 1]],
        [[0, 1]]],
       {5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        16: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        29: 1,
        30: 1,
        32: 1,
        33: 1,
        34: 1,
        37: 1}],
 328: [[[[1, 1], [3, 1]], [[0, 1]]],
       {4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        29: 1,
        30: 1,
        31: 1,
        32: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1}],
 329: [[[[72, 1], [69, 2], [121, 3]],
        [[159, 4], [69, 5], [0, 1]],
        [[72, 1], [0, 2]],
        [[121, 6]],
        [[0, 4]],
        [[159, 4], [0, 5]],
        [[121, 4]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1,
        72: 1,
        121: 1}],
 330: [[[[160, 1]], [[57, 2], [0, 1]], [[160, 1], [0, 2]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1,
        72: 1,
        121: 1}],
 331: [[[[1, 1], [2, 2]],
        [[0, 1]],
        [[161, 3]],
        [[124, 4]],
        [[162, 1], [124, 4]]],
       {2: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        16: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        29: 1,
        30: 1,
        32: 1,
        33: 1,
        34: 1,
        37: 1}],
 332: [[[[69, 1]], [[57, 2], [0, 1]], [[69, 1], [0, 2]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 333: [[[[69, 1]], [[57, 0], [0, 1]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 334: [[[[69, 1]],
        [[85, 2], [57, 3], [0, 1]],
        [[0, 2]],
        [[69, 4], [0, 3]],
        [[57, 3], [0, 4]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 335: [[[[134, 1]],
        [[57, 2], [0, 1]],
        [[134, 3]],
        [[57, 4], [0, 3]],
        [[134, 3], [0, 4]]],
       {6: 1,
        7: 1,
        8: 1,
        9: 1,
        11: 1,
        14: 1,
        18: 1,
        21: 1,
        25: 1,
        29: 1,
        32: 1,
        37: 1}],
 336: [[[[29, 1], [121, 2], [32, 3]],
        [[43, 4], [117, 5]],
        [[21, 4]],
        [[163, 6]],
        [[0, 4]],
        [[43, 4]],
        [[42, 4]]],
       {29: 1, 32: 1, 121: 1}],
 337: [[[[15, 1]],
        [[72, 2]],
        [[98, 3]],
        [[164, 4], [165, 5]],
        [[72, 6]],
        [[72, 7]],
        [[98, 8]],
        [[98, 9]],
        [[164, 4], [68, 10], [165, 5], [0, 8]],
        [[0, 9]],
        [[72, 11]],
        [[98, 12]],
        [[165, 5], [0, 12]]],
       {15: 1}],
 338: [[[[63, 1], [131, 2], [79, 3]],
        [[21, 4]],
        [[60, 5], [57, 6], [0, 2]],
        [[21, 7]],
        [[57, 8], [0, 4]],
        [[69, 9]],
        [[63, 1], [131, 2], [79, 3], [0, 6]],
        [[0, 7]],
        [[79, 3]],
        [[57, 6], [0, 9]]],
       {21: 1, 29: 1, 63: 1, 79: 1}],
 339: [[[[17, 1]],
        [[69, 2]],
        [[72, 3]],
        [[98, 4]],
        [[68, 5], [0, 4]],
        [[72, 6]],
        [[98, 7]],
        [[0, 7]]],
       {17: 1}],
 340: [[[[36, 1]],
        [[69, 2]],
        [[72, 3], [166, 4]],
        [[98, 5]],
        [[72, 3]],
        [[0, 5]]],
       {36: 1}],
 341: [[[[71, 1]], [[55, 2]], [[0, 2]]], {71: 1}],
 342: [[[[45, 1]], [[0, 1]]], {26: 1}]},
states:
[[[[1, 1], [2, 1], [3, 2]], [[0, 1]], [[2, 1]]],
 [[[38, 1]], [[39, 0], [0, 1]]],
 [[[40, 1]], [[25, 0], [37, 0], [0, 1]]],
 [[[21, 1], [8, 1], [9, 4], [29, 3], [32, 2], [14, 5], [18, 6]],
  [[0, 1]],
  [[41, 7], [42, 1]],
  [[43, 1], [44, 8], [45, 8]],
  [[46, 9], [47, 1]],
  [[48, 10]],
  [[18, 6], [0, 6]],
  [[42, 1]],
  [[43, 1]],
  [[47, 1]],
  [[14, 1]]],
 [[[49, 1]], [[50, 0], [0, 1]]],
 [[[51, 1]], [[52, 0], [0, 1]]],
 [[[53, 1]], [[54, 0], [0, 1]]],
 [[[55, 1]], [[56, 0], [0, 1]]],
 [[[55, 1]], [[57, 2], [0, 1]], [[55, 1], [0, 2]]],
 [[[58, 1]],
  [[59, 2], [60, 3], [0, 1]],
  [[58, 4], [45, 4]],
  [[58, 5], [45, 5]],
  [[0, 4]],
  [[60, 3], [0, 5]]],
 [[[61, 1]], [[62, 0], [63, 0], [64, 0], [65, 0], [0, 1]]],
 [[[27, 1]], [[21, 2]], [[57, 1], [0, 2]]],
 [[[66, 1], [67, 2]],
  [[0, 1]],
  [[31, 3], [0, 2]],
  [[67, 4]],
  [[68, 5]],
  [[69, 1]]],
 [[[70, 1]], [[57, 2], [0, 1]], [[70, 1], [0, 2]]],
 [[[21, 1]], [[71, 2], [0, 1]], [[21, 3]], [[0, 3]]],
 [[[11, 1]], [[72, 2], [73, 3]], [[69, 4]], [[72, 2]], [[0, 4]]],
 [[[18, 1]], [[0, 1]]],
 [[[13, 1]], [[21, 2]], [[57, 1], [0, 2]]],
 [[[7, 1], [74, 2]], [[38, 2]], [[0, 2]]],
 [[[75, 1]], [[76, 0], [0, 1]]],
 [[[77, 1]], [[78, 1], [79, 2], [0, 1]], [[49, 3]], [[0, 3]]],
 [[[80, 1]], [[81, 0], [82, 0], [0, 1]]],
 [[[25, 1], [6, 1], [37, 1], [83, 2]], [[49, 2]], [[0, 2]]],
 [[[26, 1]], [[58, 2], [0, 1]], [[0, 2]]],
 [[[63, 1], [84, 2], [79, 3]],
  [[69, 4]],
  [[57, 5], [0, 2]],
  [[69, 6]],
  [[57, 7], [0, 4]],
  [[63, 1], [84, 2], [79, 3], [0, 5]],
  [[0, 6]],
  [[84, 4], [79, 3]]],
 [[[69, 1]], [[85, 2], [60, 3], [0, 1]], [[0, 2]], [[69, 2]]],
 [[[20, 1]], [[69, 2]], [[57, 3], [0, 2]], [[69, 4]], [[0, 4]]],
 [[[86, 1],
   [87, 1],
   [88, 1],
   [89, 1],
   [90, 1],
   [91, 1],
   [92, 1],
   [93, 1],
   [94, 1],
   [95, 1],
   [96, 1],
   [97, 1]],
  [[0, 1]]],
 [[[33, 1]], [[0, 1]]],
 [[[10, 1]],
  [[21, 2]],
  [[72, 3], [29, 4]],
  [[98, 5]],
  [[43, 6], [58, 7]],
  [[0, 5]],
  [[72, 3]],
  [[43, 6]]],
 [[[99, 1],
   [100, 1],
   [7, 2],
   [99, 1],
   [101, 1],
   [102, 1],
   [103, 1],
   [104, 3],
   [105, 1],
   [106, 1]],
  [[0, 1]],
  [[102, 1]],
  [[7, 1], [0, 3]]],
 [[[107, 1],
   [108, 1],
   [109, 1],
   [110, 1],
   [111, 1],
   [112, 1],
   [113, 1],
   [114, 1]],
  [[0, 1]]],
 [[[34, 1]], [[0, 1]]],
 [[[115, 1]], [[113, 2], [110, 2]], [[0, 2]]],
 [[[35, 1]],
  [[116, 2]],
  [[2, 4], [29, 3]],
  [[43, 5], [117, 6]],
  [[0, 4]],
  [[2, 4]],
  [[43, 5]]],
 [[[118, 1]], [[118, 1], [0, 1]]],
 [[[22, 1]], [[119, 2]], [[0, 2]]],
 [[[69, 1]], [[72, 2]], [[69, 3]], [[57, 4], [0, 3]], [[69, 1], [0, 4]]],
 [[[116, 1]], [[71, 2], [0, 1]], [[21, 3]], [[0, 3]]],
 [[[120, 1]], [[57, 0], [0, 1]]],
 [[[21, 1]], [[121, 0], [0, 1]]],
 [[[21, 1]], [[0, 1]]],
 [[[58, 1]], [[2, 1], [122, 2]], [[0, 2]]],
 [[[123, 1]],
  [[69, 2], [0, 1]],
  [[71, 3], [57, 3], [0, 2]],
  [[69, 4]],
  [[0, 4]]],
 [[[16, 1]],
  [[55, 2]],
  [[102, 3], [0, 2]],
  [[69, 4]],
  [[57, 5], [0, 4]],
  [[69, 6]],
  [[0, 6]]],
 [[[2, 0], [122, 1], [124, 0]], [[0, 1]]],
 [[[125, 1], [126, 1], [127, 1], [128, 1], [129, 1]], [[0, 1]]],
 [[[28, 1]],
  [[119, 2]],
  [[102, 3]],
  [[58, 4]],
  [[72, 5]],
  [[98, 6]],
  [[68, 7], [0, 6]],
  [[72, 8]],
  [[98, 9]],
  [[0, 9]]],
 [[[29, 1], [21, 2]], [[130, 3]], [[0, 2]], [[43, 2]]],
 [[[131, 1]], [[57, 2], [0, 1]], [[131, 1], [0, 2]]],
 [[[4, 1]], [[21, 2]], [[132, 3]], [[72, 4]], [[98, 5]], [[0, 5]]],
 [[[28, 1]], [[119, 2]], [[102, 3]], [[67, 4]], [[133, 5], [0, 4]], [[0, 5]]],
 [[[31, 1]], [[134, 2]], [[133, 3], [0, 2]], [[0, 3]]],
 [[[85, 1], [135, 1]], [[0, 1]]],
 [[[31, 1]],
  [[69, 2]],
  [[72, 3]],
  [[98, 4]],
  [[68, 5], [136, 1], [0, 4]],
  [[72, 6]],
  [[98, 7]],
  [[0, 7]]],
 [[[30, 1]],
  [[137, 2]],
  [[24, 3]],
  [[138, 4], [29, 5], [63, 4]],
  [[0, 4]],
  [[138, 6]],
  [[43, 4]]],
 [[[24, 1]], [[139, 2]], [[0, 2]]],
 [[[140, 1], [141, 1]], [[0, 1]]],
 [[[28, 1]], [[119, 2]], [[102, 3]], [[142, 4]], [[143, 5], [0, 4]], [[0, 5]]],
 [[[31, 1]], [[134, 2]], [[143, 3], [0, 2]], [[0, 3]]],
 [[[144, 1], [145, 1]], [[0, 1]]],
 [[[69, 1]],
  [[144, 2], [57, 3], [0, 1]],
  [[0, 2]],
  [[69, 4], [0, 3]],
  [[57, 3], [0, 4]]],
 [[[11, 1]], [[72, 2], [73, 3]], [[134, 4]], [[72, 2]], [[0, 4]]],
 [[[146, 1], [67, 1]], [[0, 1]]],
 [[[29, 1]], [[43, 2], [73, 3]], [[0, 2]], [[43, 2]]],
 [[[23, 1]], [[0, 1]]],
 [[[12, 1]],
  [[69, 2], [81, 3], [0, 1]],
  [[57, 4], [0, 2]],
  [[69, 5]],
  [[69, 2], [0, 4]],
  [[57, 6], [0, 5]],
  [[69, 7]],
  [[57, 8], [0, 7]],
  [[69, 7], [0, 8]]],
 [[[5, 1]],
  [[69, 2], [0, 1]],
  [[57, 3], [0, 2]],
  [[69, 4]],
  [[57, 5], [0, 4]],
  [[69, 6]],
  [[0, 6]]],
 [[[19, 1]], [[58, 2], [0, 1]], [[0, 2]]],
 [[[147, 1]], [[2, 2], [148, 3]], [[0, 2]], [[147, 1], [2, 2]]],
 [[[72, 1]], [[69, 2], [0, 1]], [[0, 2]]],
 [[[149, 1],
   [150, 1],
   [151, 1],
   [152, 1],
   [153, 1],
   [154, 1],
   [155, 1],
   [156, 1],
   [157, 1],
   [158, 1]],
  [[0, 1]]],
 [[[1, 1], [3, 1]], [[0, 1]]],
 [[[72, 1], [69, 2], [121, 3]],
  [[159, 4], [69, 5], [0, 1]],
  [[72, 1], [0, 2]],
  [[121, 6]],
  [[0, 4]],
  [[159, 4], [0, 5]],
  [[121, 4]]],
 [[[160, 1]], [[57, 2], [0, 1]], [[160, 1], [0, 2]]],
 [[[1, 1], [2, 2]], [[0, 1]], [[161, 3]], [[124, 4]], [[162, 1], [124, 4]]],
 [[[69, 1]], [[57, 2], [0, 1]], [[69, 1], [0, 2]]],
 [[[69, 1]], [[57, 0], [0, 1]]],
 [[[69, 1]],
  [[85, 2], [57, 3], [0, 1]],
  [[0, 2]],
  [[69, 4], [0, 3]],
  [[57, 3], [0, 4]]],
 [[[134, 1]],
  [[57, 2], [0, 1]],
  [[134, 3]],
  [[57, 4], [0, 3]],
  [[134, 3], [0, 4]]],
 [[[29, 1], [121, 2], [32, 3]],
  [[43, 4], [117, 5]],
  [[21, 4]],
  [[163, 6]],
  [[0, 4]],
  [[43, 4]],
  [[42, 4]]],
 [[[15, 1]],
  [[72, 2]],
  [[98, 3]],
  [[164, 4], [165, 5]],
  [[72, 6]],
  [[72, 7]],
  [[98, 8]],
  [[98, 9]],
  [[164, 4], [68, 10], [165, 5], [0, 8]],
  [[0, 9]],
  [[72, 11]],
  [[98, 12]],
  [[165, 5], [0, 12]]],
 [[[63, 1], [131, 2], [79, 3]],
  [[21, 4]],
  [[60, 5], [57, 6], [0, 2]],
  [[21, 7]],
  [[57, 8], [0, 4]],
  [[69, 9]],
  [[63, 1], [131, 2], [79, 3], [0, 6]],
  [[0, 7]],
  [[79, 3]],
  [[57, 6], [0, 9]]],
 [[[17, 1]],
  [[69, 2]],
  [[72, 3]],
  [[98, 4]],
  [[68, 5], [0, 4]],
  [[72, 6]],
  [[98, 7]],
  [[0, 7]]],
 [[[36, 1]], [[69, 2]], [[72, 3], [166, 4]], [[98, 5]], [[72, 3]], [[0, 5]]],
 [[[71, 1]], [[55, 2]], [[0, 2]]],
 [[[45, 1]], [[0, 1]]]],
labels:
[[0, 'EMPTY'],
 [325, null],
 [4, null],
 [287, null],
 [1, 'def'],
 [1, 'raise'],
 [32, null],
 [1, 'not'],
 [2, null],
 [26, null],
 [1, 'class'],
 [1, 'lambda'],
 [1, 'print'],
 [1, 'nonlocal'],
 [25, null],
 [1, 'try'],
 [1, 'exec'],
 [1, 'while'],
 [3, null],
 [1, 'return'],
 [1, 'assert'],
 [1, null],
 [1, 'del'],
 [1, 'pass'],
 [1, 'import'],
 [15, null],
 [1, 'yield'],
 [1, 'global'],
 [1, 'for'],
 [7, null],
 [1, 'from'],
 [1, 'if'],
 [9, null],
 [1, 'break'],
 [1, 'continue'],
 [50, null],
 [1, 'with'],
 [14, null],
 [274, null],
 [1, 'and'],
 [266, null],
 [317, null],
 [10, null],
 [8, null],
 [334, null],
 [279, null],
 [293, null],
 [27, null],
 [333, null],
 [278, null],
 [19, null],
 [262, null],
 [18, null],
 [260, null],
 [33, null],
 [258, null],
 [286, null],
 [12, null],
 [332, null],
 [283, null],
 [22, null],
 [277, null],
 [48, null],
 [16, null],
 [17, null],
 [24, null],
 [271, null],
 [275, null],
 [1, 'else'],
 [268, null],
 [270, null],
 [1, 'as'],
 [11, null],
 [338, null],
 [263, null],
 [257, null],
 [1, 'or'],
 [259, null],
 [336, null],
 [36, null],
 [261, null],
 [35, null],
 [34, null],
 [276, null],
 [281, null],
 [307, null],
 [46, null],
 [39, null],
 [41, null],
 [47, null],
 [42, null],
 [43, null],
 [37, null],
 [44, null],
 [49, null],
 [40, null],
 [38, null],
 [45, null],
 [331, null],
 [29, null],
 [21, null],
 [28, null],
 [1, 'in'],
 [30, null],
 [1, 'is'],
 [31, null],
 [20, null],
 [337, null],
 [310, null],
 [303, null],
 [285, null],
 [340, null],
 [339, null],
 [306, null],
 [289, null],
 [291, null],
 [296, null],
 [280, null],
 [290, null],
 [264, null],
 [294, null],
 [23, null],
 [0, null],
 [1, 'except'],
 [328, null],
 [284, null],
 [288, null],
 [323, null],
 [324, null],
 [342, null],
 [305, null],
 [304, null],
 [320, null],
 [309, null],
 [319, null],
 [308, null],
 [1, 'elif'],
 [272, null],
 [269, null],
 [295, null],
 [312, null],
 [311, null],
 [335, null],
 [316, null],
 [314, null],
 [315, null],
 [318, null],
 [327, null],
 [13, null],
 [273, null],
 [267, null],
 [265, null],
 [321, null],
 [322, null],
 [292, null],
 [300, null],
 [313, null],
 [282, null],
 [302, null],
 [326, null],
 [329, null],
 [5, null],
 [6, null],
 [330, null],
 [299, null],
 [1, 'finally'],
 [341, null]],
keywords:
{'and': 39,
 'as': 71,
 'assert': 20,
 'break': 33,
 'class': 10,
 'continue': 34,
 'def': 4,
 'del': 22,
 'elif': 136,
 'else': 68,
 'except': 123,
 'exec': 16,
 'finally': 165,
 'for': 28,
 'from': 30,
 'global': 27,
 'if': 31,
 'import': 24,
 'in': 102,
 'is': 104,
 'lambda': 11,
 'nonlocal': 13,
 'not': 7,
 'or': 76,
 'pass': 23,
 'print': 12,
 'raise': 5,
 'return': 19,
 'try': 15,
 'while': 17,
 'with': 36,
 'yield': 26},
tokens:
{0: 122,
 1: 21,
 2: 8,
 3: 18,
 4: 2,
 5: 161,
 6: 162,
 7: 29,
 8: 43,
 9: 32,
 10: 42,
 11: 72,
 12: 57,
 13: 148,
 14: 37,
 15: 25,
 16: 63,
 17: 64,
 18: 52,
 19: 50,
 20: 106,
 21: 100,
 22: 60,
 23: 121,
 24: 65,
 25: 14,
 26: 9,
 27: 47,
 28: 101,
 29: 99,
 30: 103,
 31: 105,
 32: 6,
 33: 54,
 34: 82,
 35: 81,
 36: 79,
 37: 92,
 38: 96,
 39: 87,
 40: 95,
 41: 88,
 42: 90,
 43: 91,
 44: 93,
 45: 97,
 46: 86,
 47: 89,
 48: 62,
 49: 94,
 50: 35},
start: 256
};

// Nothing more to see here.
