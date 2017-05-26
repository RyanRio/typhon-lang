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
 LambdaExpr: 269,
 NonLocalStmt: 270,
 NotExpr: 271,
 OrExpr: 272,
 PowerExpr: 273,
 ShiftExpr: 274,
 UnaryExpr: 275,
 YieldExpr: 276,
 arglist: 277,
 argument: 278,
 assert_stmt: 279,
 augassign: 280,
 break_stmt: 281,
 classdef: 282,
 comp_op: 283,
 compound_stmt: 284,
 continue_stmt: 285,
 decorated: 286,
 decorator: 287,
 decorators: 288,
 del_stmt: 289,
 dictmaker: 290,
 dotted_as_name: 291,
 dotted_as_names: 292,
 dotted_name: 293,
 encoding_decl: 294,
 eval_input: 295,
 except_clause: 296,
 exec_stmt: 297,
 file_input: 298,
 flow_stmt: 299,
 for_stmt: 300,
 fpdef: 301,
 fplist: 302,
 funcdef: 303,
 gen_for: 304,
 gen_if: 305,
 gen_iter: 306,
 if_stmt: 307,
 import_as_name: 308,
 import_as_names: 309,
 import_from: 310,
 import_name: 311,
 import_stmt: 312,
 list_for: 313,
 list_if: 314,
 list_iter: 315,
 listmaker: 316,
 old_LambdaExpr: 317,
 old_test: 318,
 parameters: 319,
 pass_stmt: 320,
 print_stmt: 321,
 raise_stmt: 322,
 return_stmt: 323,
 simple_stmt: 324,
 single_input: 256,
 sliceop: 325,
 small_stmt: 326,
 stmt: 327,
 subscript: 328,
 subscriptlist: 329,
 suite: 330,
 testlist: 331,
 testlist1: 332,
 testlist_gexp: 333,
 testlist_safe: 334,
 trailer: 335,
 try_stmt: 336,
 varargslist: 337,
 while_stmt: 338,
 with_stmt: 339,
 with_var: 340,
 yield_stmt: 341},
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
 269: 'LambdaExpr',
 270: 'NonLocalStmt',
 271: 'NotExpr',
 272: 'OrExpr',
 273: 'PowerExpr',
 274: 'ShiftExpr',
 275: 'UnaryExpr',
 276: 'YieldExpr',
 277: 'arglist',
 278: 'argument',
 279: 'assert_stmt',
 280: 'augassign',
 281: 'break_stmt',
 282: 'classdef',
 283: 'comp_op',
 284: 'compound_stmt',
 285: 'continue_stmt',
 286: 'decorated',
 287: 'decorator',
 288: 'decorators',
 289: 'del_stmt',
 290: 'dictmaker',
 291: 'dotted_as_name',
 292: 'dotted_as_names',
 293: 'dotted_name',
 294: 'encoding_decl',
 295: 'eval_input',
 296: 'except_clause',
 297: 'exec_stmt',
 298: 'file_input',
 299: 'flow_stmt',
 300: 'for_stmt',
 301: 'fpdef',
 302: 'fplist',
 303: 'funcdef',
 304: 'gen_for',
 305: 'gen_if',
 306: 'gen_iter',
 307: 'if_stmt',
 308: 'import_as_name',
 309: 'import_as_names',
 310: 'import_from',
 311: 'import_name',
 312: 'import_stmt',
 313: 'list_for',
 314: 'list_if',
 315: 'list_iter',
 316: 'listmaker',
 317: 'old_LambdaExpr',
 318: 'old_test',
 319: 'parameters',
 320: 'pass_stmt',
 321: 'print_stmt',
 322: 'raise_stmt',
 323: 'return_stmt',
 324: 'simple_stmt',
 325: 'sliceop',
 326: 'small_stmt',
 327: 'stmt',
 328: 'subscript',
 329: 'subscriptlist',
 330: 'suite',
 331: 'testlist',
 332: 'testlist1',
 333: 'testlist_gexp',
 334: 'testlist_safe',
 335: 'trailer',
 336: 'try_stmt',
 337: 'varargslist',
 338: 'while_stmt',
 339: 'with_stmt',
 340: 'with_var',
 341: 'yield_stmt'},
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
 269: [[[[11, 1]], [[70, 2], [71, 3]], [[69, 4]], [[70, 2]], [[0, 4]]],
       {11: 1}],
 270: [[[[13, 1]], [[21, 2]], [[57, 1], [0, 2]]], {13: 1}],
 271: [[[[7, 1], [72, 2]], [[38, 2]], [[0, 2]]],
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
 272: [[[[73, 1]], [[74, 0], [0, 1]]],
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
 273: [[[[75, 1]], [[76, 1], [77, 2], [0, 1]], [[49, 3]], [[0, 3]]],
       {8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 29: 1, 32: 1}],
 274: [[[[78, 1]], [[79, 0], [80, 0], [0, 1]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 25: 1, 29: 1, 32: 1, 37: 1}],
 275: [[[[25, 1], [6, 1], [37, 1], [81, 2]], [[49, 2]], [[0, 2]]],
       {6: 1, 8: 1, 9: 1, 14: 1, 18: 1, 21: 1, 25: 1, 29: 1, 32: 1, 37: 1}],
 276: [[[[26, 1]], [[58, 2], [0, 1]], [[0, 2]]], {26: 1}],
 277: [[[[63, 1], [82, 2], [77, 3]],
        [[69, 4]],
        [[57, 5], [0, 2]],
        [[69, 6]],
        [[57, 7], [0, 4]],
        [[63, 1], [82, 2], [77, 3], [0, 5]],
        [[0, 6]],
        [[82, 4], [77, 3]]],
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
        77: 1}],
 278: [[[[69, 1]], [[83, 2], [60, 3], [0, 1]], [[0, 2]], [[69, 2]]],
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
 279: [[[[20, 1]], [[69, 2]], [[57, 3], [0, 2]], [[69, 4]], [[0, 4]]],
       {20: 1}],
 280: [[[[84, 1],
         [85, 1],
         [86, 1],
         [87, 1],
         [88, 1],
         [89, 1],
         [90, 1],
         [91, 1],
         [92, 1],
         [93, 1],
         [94, 1],
         [95, 1]],
        [[0, 1]]],
       {84: 1,
        85: 1,
        86: 1,
        87: 1,
        88: 1,
        89: 1,
        90: 1,
        91: 1,
        92: 1,
        93: 1,
        94: 1,
        95: 1}],
 281: [[[[33, 1]], [[0, 1]]], {33: 1}],
 282: [[[[10, 1]],
        [[21, 2]],
        [[70, 3], [29, 4]],
        [[96, 5]],
        [[43, 6], [58, 7]],
        [[0, 5]],
        [[70, 3]],
        [[43, 6]]],
       {10: 1}],
 283: [[[[97, 1],
         [98, 1],
         [7, 2],
         [99, 1],
         [97, 1],
         [100, 1],
         [101, 1],
         [102, 3],
         [103, 1],
         [104, 1]],
        [[0, 1]],
        [[100, 1]],
        [[7, 1], [0, 3]]],
       {7: 1, 97: 1, 98: 1, 99: 1, 100: 1, 101: 1, 102: 1, 103: 1, 104: 1}],
 284: [[[[105, 1],
         [106, 1],
         [107, 1],
         [108, 1],
         [109, 1],
         [110, 1],
         [111, 1],
         [112, 1]],
        [[0, 1]]],
       {4: 1, 10: 1, 15: 1, 17: 1, 28: 1, 31: 1, 35: 1, 36: 1}],
 285: [[[[34, 1]], [[0, 1]]], {34: 1}],
 286: [[[[113, 1]], [[111, 2], [108, 2]], [[0, 2]]], {35: 1}],
 287: [[[[35, 1]],
        [[114, 2]],
        [[2, 4], [29, 3]],
        [[43, 5], [115, 6]],
        [[0, 4]],
        [[2, 4]],
        [[43, 5]]],
       {35: 1}],
 288: [[[[116, 1]], [[116, 1], [0, 1]]], {35: 1}],
 289: [[[[22, 1]], [[117, 2]], [[0, 2]]], {22: 1}],
 290: [[[[69, 1]],
        [[70, 2]],
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
 291: [[[[114, 1]], [[118, 2], [0, 1]], [[21, 3]], [[0, 3]]], {21: 1}],
 292: [[[[119, 1]], [[57, 0], [0, 1]]], {21: 1}],
 293: [[[[21, 1]], [[120, 0], [0, 1]]], {21: 1}],
 294: [[[[21, 1]], [[0, 1]]], {21: 1}],
 295: [[[[58, 1]], [[2, 1], [121, 2]], [[0, 2]]],
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
 296: [[[[122, 1]],
        [[69, 2], [0, 1]],
        [[118, 3], [57, 3], [0, 2]],
        [[69, 4]],
        [[0, 4]]],
       {122: 1}],
 297: [[[[16, 1]],
        [[55, 2]],
        [[100, 3], [0, 2]],
        [[69, 4]],
        [[57, 5], [0, 4]],
        [[69, 6]],
        [[0, 6]]],
       {16: 1}],
 298: [[[[2, 0], [121, 1], [123, 0]], [[0, 1]]],
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
        121: 1}],
 299: [[[[124, 1], [125, 1], [126, 1], [127, 1], [128, 1]], [[0, 1]]],
       {5: 1, 19: 1, 26: 1, 33: 1, 34: 1}],
 300: [[[[28, 1]],
        [[117, 2]],
        [[100, 3]],
        [[58, 4]],
        [[70, 5]],
        [[96, 6]],
        [[68, 7], [0, 6]],
        [[70, 8]],
        [[96, 9]],
        [[0, 9]]],
       {28: 1}],
 301: [[[[29, 1], [21, 2]], [[129, 3]], [[0, 2]], [[43, 2]]], {21: 1, 29: 1}],
 302: [[[[130, 1]], [[57, 2], [0, 1]], [[130, 1], [0, 2]]], {21: 1, 29: 1}],
 303: [[[[4, 1]], [[21, 2]], [[131, 3]], [[70, 4]], [[96, 5]], [[0, 5]]],
       {4: 1}],
 304: [[[[28, 1]],
        [[117, 2]],
        [[100, 3]],
        [[67, 4]],
        [[132, 5], [0, 4]],
        [[0, 5]]],
       {28: 1}],
 305: [[[[31, 1]], [[133, 2]], [[132, 3], [0, 2]], [[0, 3]]], {31: 1}],
 306: [[[[83, 1], [134, 1]], [[0, 1]]], {28: 1, 31: 1}],
 307: [[[[31, 1]],
        [[69, 2]],
        [[70, 3]],
        [[96, 4]],
        [[68, 5], [135, 1], [0, 4]],
        [[70, 6]],
        [[96, 7]],
        [[0, 7]]],
       {31: 1}],
 308: [[[[21, 1]], [[118, 2], [0, 1]], [[21, 3]], [[0, 3]]], {21: 1}],
 309: [[[[136, 1]], [[57, 2], [0, 1]], [[136, 1], [0, 2]]], {21: 1}],
 310: [[[[30, 1]],
        [[114, 2], [120, 3]],
        [[24, 4]],
        [[114, 2], [24, 4], [120, 3]],
        [[137, 5], [63, 5], [29, 6]],
        [[0, 5]],
        [[137, 7]],
        [[43, 5]]],
       {30: 1}],
 311: [[[[24, 1]], [[138, 2]], [[0, 2]]], {24: 1}],
 312: [[[[139, 1], [140, 1]], [[0, 1]]], {24: 1, 30: 1}],
 313: [[[[28, 1]],
        [[117, 2]],
        [[100, 3]],
        [[141, 4]],
        [[142, 5], [0, 4]],
        [[0, 5]]],
       {28: 1}],
 314: [[[[31, 1]], [[133, 2]], [[142, 3], [0, 2]], [[0, 3]]], {31: 1}],
 315: [[[[143, 1], [144, 1]], [[0, 1]]], {28: 1, 31: 1}],
 316: [[[[69, 1]],
        [[143, 2], [57, 3], [0, 1]],
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
 317: [[[[11, 1]], [[70, 2], [71, 3]], [[133, 4]], [[70, 2]], [[0, 4]]],
       {11: 1}],
 318: [[[[145, 1], [67, 1]], [[0, 1]]],
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
 319: [[[[29, 1]], [[43, 2], [71, 3]], [[0, 2]], [[43, 2]]], {29: 1}],
 320: [[[[23, 1]], [[0, 1]]], {23: 1}],
 321: [[[[12, 1]],
        [[69, 2], [80, 3], [0, 1]],
        [[57, 4], [0, 2]],
        [[69, 5]],
        [[69, 2], [0, 4]],
        [[57, 6], [0, 5]],
        [[69, 7]],
        [[57, 8], [0, 7]],
        [[69, 7], [0, 8]]],
       {12: 1}],
 322: [[[[5, 1]],
        [[69, 2], [0, 1]],
        [[57, 3], [0, 2]],
        [[69, 4]],
        [[57, 5], [0, 4]],
        [[69, 6]],
        [[0, 6]]],
       {5: 1}],
 323: [[[[19, 1]], [[58, 2], [0, 1]], [[0, 2]]], {19: 1}],
 324: [[[[146, 1]], [[2, 2], [147, 3]], [[0, 2]], [[146, 1], [2, 2]]],
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
 325: [[[[70, 1]], [[69, 2], [0, 1]], [[0, 2]]], {70: 1}],
 326: [[[[148, 1],
         [149, 1],
         [150, 1],
         [151, 1],
         [152, 1],
         [153, 1],
         [154, 1],
         [155, 1],
         [156, 1],
         [157, 1]],
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
 327: [[[[1, 1], [3, 1]], [[0, 1]]],
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
 328: [[[[70, 1], [69, 2], [120, 3]],
        [[158, 4], [69, 5], [0, 1]],
        [[70, 1], [0, 2]],
        [[120, 6]],
        [[0, 4]],
        [[158, 4], [0, 5]],
        [[120, 4]]],
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
        70: 1,
        120: 1}],
 329: [[[[159, 1]], [[57, 2], [0, 1]], [[159, 1], [0, 2]]],
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
        70: 1,
        120: 1}],
 330: [[[[1, 1], [2, 2]],
        [[0, 1]],
        [[160, 3]],
        [[123, 4]],
        [[161, 1], [123, 4]]],
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
 331: [[[[69, 1]], [[57, 2], [0, 1]], [[69, 1], [0, 2]]],
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
 332: [[[[69, 1]], [[57, 0], [0, 1]]],
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
 333: [[[[69, 1]],
        [[83, 2], [57, 3], [0, 1]],
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
 334: [[[[133, 1]],
        [[57, 2], [0, 1]],
        [[133, 3]],
        [[57, 4], [0, 3]],
        [[133, 3], [0, 4]]],
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
 335: [[[[29, 1], [120, 2], [32, 3]],
        [[43, 4], [115, 5]],
        [[21, 4]],
        [[162, 6]],
        [[0, 4]],
        [[43, 4]],
        [[42, 4]]],
       {29: 1, 32: 1, 120: 1}],
 336: [[[[15, 1]],
        [[70, 2]],
        [[96, 3]],
        [[163, 4], [164, 5]],
        [[70, 6]],
        [[70, 7]],
        [[96, 8]],
        [[96, 9]],
        [[163, 4], [68, 10], [164, 5], [0, 8]],
        [[0, 9]],
        [[70, 11]],
        [[96, 12]],
        [[164, 5], [0, 12]]],
       {15: 1}],
 337: [[[[63, 1], [130, 2], [77, 3]],
        [[21, 4]],
        [[60, 5], [57, 6], [0, 2]],
        [[21, 7]],
        [[57, 8], [0, 4]],
        [[69, 9]],
        [[63, 1], [130, 2], [77, 3], [0, 6]],
        [[0, 7]],
        [[77, 3]],
        [[57, 6], [0, 9]]],
       {21: 1, 29: 1, 63: 1, 77: 1}],
 338: [[[[17, 1]],
        [[69, 2]],
        [[70, 3]],
        [[96, 4]],
        [[68, 5], [0, 4]],
        [[70, 6]],
        [[96, 7]],
        [[0, 7]]],
       {17: 1}],
 339: [[[[36, 1]],
        [[69, 2]],
        [[70, 3], [165, 4]],
        [[96, 5]],
        [[70, 3]],
        [[0, 5]]],
       {36: 1}],
 340: [[[[118, 1]], [[55, 2]], [[0, 2]]], {118: 1}],
 341: [[[[45, 1]], [[0, 1]]], {26: 1}]},
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
 [[[11, 1]], [[70, 2], [71, 3]], [[69, 4]], [[70, 2]], [[0, 4]]],
 [[[13, 1]], [[21, 2]], [[57, 1], [0, 2]]],
 [[[7, 1], [72, 2]], [[38, 2]], [[0, 2]]],
 [[[73, 1]], [[74, 0], [0, 1]]],
 [[[75, 1]], [[76, 1], [77, 2], [0, 1]], [[49, 3]], [[0, 3]]],
 [[[78, 1]], [[79, 0], [80, 0], [0, 1]]],
 [[[25, 1], [6, 1], [37, 1], [81, 2]], [[49, 2]], [[0, 2]]],
 [[[26, 1]], [[58, 2], [0, 1]], [[0, 2]]],
 [[[63, 1], [82, 2], [77, 3]],
  [[69, 4]],
  [[57, 5], [0, 2]],
  [[69, 6]],
  [[57, 7], [0, 4]],
  [[63, 1], [82, 2], [77, 3], [0, 5]],
  [[0, 6]],
  [[82, 4], [77, 3]]],
 [[[69, 1]], [[83, 2], [60, 3], [0, 1]], [[0, 2]], [[69, 2]]],
 [[[20, 1]], [[69, 2]], [[57, 3], [0, 2]], [[69, 4]], [[0, 4]]],
 [[[84, 1],
   [85, 1],
   [86, 1],
   [87, 1],
   [88, 1],
   [89, 1],
   [90, 1],
   [91, 1],
   [92, 1],
   [93, 1],
   [94, 1],
   [95, 1]],
  [[0, 1]]],
 [[[33, 1]], [[0, 1]]],
 [[[10, 1]],
  [[21, 2]],
  [[70, 3], [29, 4]],
  [[96, 5]],
  [[43, 6], [58, 7]],
  [[0, 5]],
  [[70, 3]],
  [[43, 6]]],
 [[[97, 1],
   [98, 1],
   [7, 2],
   [99, 1],
   [97, 1],
   [100, 1],
   [101, 1],
   [102, 3],
   [103, 1],
   [104, 1]],
  [[0, 1]],
  [[100, 1]],
  [[7, 1], [0, 3]]],
 [[[105, 1],
   [106, 1],
   [107, 1],
   [108, 1],
   [109, 1],
   [110, 1],
   [111, 1],
   [112, 1]],
  [[0, 1]]],
 [[[34, 1]], [[0, 1]]],
 [[[113, 1]], [[111, 2], [108, 2]], [[0, 2]]],
 [[[35, 1]],
  [[114, 2]],
  [[2, 4], [29, 3]],
  [[43, 5], [115, 6]],
  [[0, 4]],
  [[2, 4]],
  [[43, 5]]],
 [[[116, 1]], [[116, 1], [0, 1]]],
 [[[22, 1]], [[117, 2]], [[0, 2]]],
 [[[69, 1]], [[70, 2]], [[69, 3]], [[57, 4], [0, 3]], [[69, 1], [0, 4]]],
 [[[114, 1]], [[118, 2], [0, 1]], [[21, 3]], [[0, 3]]],
 [[[119, 1]], [[57, 0], [0, 1]]],
 [[[21, 1]], [[120, 0], [0, 1]]],
 [[[21, 1]], [[0, 1]]],
 [[[58, 1]], [[2, 1], [121, 2]], [[0, 2]]],
 [[[122, 1]],
  [[69, 2], [0, 1]],
  [[118, 3], [57, 3], [0, 2]],
  [[69, 4]],
  [[0, 4]]],
 [[[16, 1]],
  [[55, 2]],
  [[100, 3], [0, 2]],
  [[69, 4]],
  [[57, 5], [0, 4]],
  [[69, 6]],
  [[0, 6]]],
 [[[2, 0], [121, 1], [123, 0]], [[0, 1]]],
 [[[124, 1], [125, 1], [126, 1], [127, 1], [128, 1]], [[0, 1]]],
 [[[28, 1]],
  [[117, 2]],
  [[100, 3]],
  [[58, 4]],
  [[70, 5]],
  [[96, 6]],
  [[68, 7], [0, 6]],
  [[70, 8]],
  [[96, 9]],
  [[0, 9]]],
 [[[29, 1], [21, 2]], [[129, 3]], [[0, 2]], [[43, 2]]],
 [[[130, 1]], [[57, 2], [0, 1]], [[130, 1], [0, 2]]],
 [[[4, 1]], [[21, 2]], [[131, 3]], [[70, 4]], [[96, 5]], [[0, 5]]],
 [[[28, 1]], [[117, 2]], [[100, 3]], [[67, 4]], [[132, 5], [0, 4]], [[0, 5]]],
 [[[31, 1]], [[133, 2]], [[132, 3], [0, 2]], [[0, 3]]],
 [[[83, 1], [134, 1]], [[0, 1]]],
 [[[31, 1]],
  [[69, 2]],
  [[70, 3]],
  [[96, 4]],
  [[68, 5], [135, 1], [0, 4]],
  [[70, 6]],
  [[96, 7]],
  [[0, 7]]],
 [[[21, 1]], [[118, 2], [0, 1]], [[21, 3]], [[0, 3]]],
 [[[136, 1]], [[57, 2], [0, 1]], [[136, 1], [0, 2]]],
 [[[30, 1]],
  [[114, 2], [120, 3]],
  [[24, 4]],
  [[114, 2], [24, 4], [120, 3]],
  [[137, 5], [63, 5], [29, 6]],
  [[0, 5]],
  [[137, 7]],
  [[43, 5]]],
 [[[24, 1]], [[138, 2]], [[0, 2]]],
 [[[139, 1], [140, 1]], [[0, 1]]],
 [[[28, 1]], [[117, 2]], [[100, 3]], [[141, 4]], [[142, 5], [0, 4]], [[0, 5]]],
 [[[31, 1]], [[133, 2]], [[142, 3], [0, 2]], [[0, 3]]],
 [[[143, 1], [144, 1]], [[0, 1]]],
 [[[69, 1]],
  [[143, 2], [57, 3], [0, 1]],
  [[0, 2]],
  [[69, 4], [0, 3]],
  [[57, 3], [0, 4]]],
 [[[11, 1]], [[70, 2], [71, 3]], [[133, 4]], [[70, 2]], [[0, 4]]],
 [[[145, 1], [67, 1]], [[0, 1]]],
 [[[29, 1]], [[43, 2], [71, 3]], [[0, 2]], [[43, 2]]],
 [[[23, 1]], [[0, 1]]],
 [[[12, 1]],
  [[69, 2], [80, 3], [0, 1]],
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
 [[[146, 1]], [[2, 2], [147, 3]], [[0, 2]], [[146, 1], [2, 2]]],
 [[[70, 1]], [[69, 2], [0, 1]], [[0, 2]]],
 [[[148, 1],
   [149, 1],
   [150, 1],
   [151, 1],
   [152, 1],
   [153, 1],
   [154, 1],
   [155, 1],
   [156, 1],
   [157, 1]],
  [[0, 1]]],
 [[[1, 1], [3, 1]], [[0, 1]]],
 [[[70, 1], [69, 2], [120, 3]],
  [[158, 4], [69, 5], [0, 1]],
  [[70, 1], [0, 2]],
  [[120, 6]],
  [[0, 4]],
  [[158, 4], [0, 5]],
  [[120, 4]]],
 [[[159, 1]], [[57, 2], [0, 1]], [[159, 1], [0, 2]]],
 [[[1, 1], [2, 2]], [[0, 1]], [[160, 3]], [[123, 4]], [[161, 1], [123, 4]]],
 [[[69, 1]], [[57, 2], [0, 1]], [[69, 1], [0, 2]]],
 [[[69, 1]], [[57, 0], [0, 1]]],
 [[[69, 1]],
  [[83, 2], [57, 3], [0, 1]],
  [[0, 2]],
  [[69, 4], [0, 3]],
  [[57, 3], [0, 4]]],
 [[[133, 1]],
  [[57, 2], [0, 1]],
  [[133, 3]],
  [[57, 4], [0, 3]],
  [[133, 3], [0, 4]]],
 [[[29, 1], [120, 2], [32, 3]],
  [[43, 4], [115, 5]],
  [[21, 4]],
  [[162, 6]],
  [[0, 4]],
  [[43, 4]],
  [[42, 4]]],
 [[[15, 1]],
  [[70, 2]],
  [[96, 3]],
  [[163, 4], [164, 5]],
  [[70, 6]],
  [[70, 7]],
  [[96, 8]],
  [[96, 9]],
  [[163, 4], [68, 10], [164, 5], [0, 8]],
  [[0, 9]],
  [[70, 11]],
  [[96, 12]],
  [[164, 5], [0, 12]]],
 [[[63, 1], [130, 2], [77, 3]],
  [[21, 4]],
  [[60, 5], [57, 6], [0, 2]],
  [[21, 7]],
  [[57, 8], [0, 4]],
  [[69, 9]],
  [[63, 1], [130, 2], [77, 3], [0, 6]],
  [[0, 7]],
  [[77, 3]],
  [[57, 6], [0, 9]]],
 [[[17, 1]],
  [[69, 2]],
  [[70, 3]],
  [[96, 4]],
  [[68, 5], [0, 4]],
  [[70, 6]],
  [[96, 7]],
  [[0, 7]]],
 [[[36, 1]], [[69, 2]], [[70, 3], [165, 4]], [[96, 5]], [[70, 3]], [[0, 5]]],
 [[[118, 1]], [[55, 2]], [[0, 2]]],
 [[[45, 1]], [[0, 1]]]],
labels:
[[0, 'EMPTY'],
 [324, null],
 [4, null],
 [284, null],
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
 [271, null],
 [1, 'and'],
 [266, null],
 [316, null],
 [10, null],
 [8, null],
 [333, null],
 [276, null],
 [290, null],
 [27, null],
 [332, null],
 [275, null],
 [19, null],
 [262, null],
 [18, null],
 [260, null],
 [33, null],
 [258, null],
 [283, null],
 [12, null],
 [331, null],
 [280, null],
 [22, null],
 [274, null],
 [48, null],
 [16, null],
 [17, null],
 [24, null],
 [269, null],
 [272, null],
 [1, 'else'],
 [268, null],
 [11, null],
 [337, null],
 [263, null],
 [257, null],
 [1, 'or'],
 [259, null],
 [335, null],
 [36, null],
 [261, null],
 [34, null],
 [35, null],
 [273, null],
 [278, null],
 [304, null],
 [46, null],
 [39, null],
 [41, null],
 [47, null],
 [42, null],
 [43, null],
 [37, null],
 [44, null],
 [49, null],
 [45, null],
 [38, null],
 [40, null],
 [330, null],
 [29, null],
 [21, null],
 [28, null],
 [1, 'in'],
 [30, null],
 [1, 'is'],
 [31, null],
 [20, null],
 [336, null],
 [307, null],
 [300, null],
 [282, null],
 [339, null],
 [338, null],
 [303, null],
 [286, null],
 [288, null],
 [293, null],
 [277, null],
 [287, null],
 [264, null],
 [1, 'as'],
 [291, null],
 [23, null],
 [0, null],
 [1, 'except'],
 [327, null],
 [281, null],
 [285, null],
 [322, null],
 [323, null],
 [341, null],
 [302, null],
 [301, null],
 [319, null],
 [306, null],
 [318, null],
 [305, null],
 [1, 'elif'],
 [308, null],
 [309, null],
 [292, null],
 [311, null],
 [310, null],
 [334, null],
 [315, null],
 [313, null],
 [314, null],
 [317, null],
 [326, null],
 [13, null],
 [299, null],
 [270, null],
 [265, null],
 [320, null],
 [267, null],
 [321, null],
 [289, null],
 [297, null],
 [279, null],
 [312, null],
 [325, null],
 [328, null],
 [5, null],
 [6, null],
 [329, null],
 [296, null],
 [1, 'finally'],
 [340, null]],
keywords:
{'and': 39,
 'as': 118,
 'assert': 20,
 'break': 33,
 'class': 10,
 'continue': 34,
 'def': 4,
 'del': 22,
 'elif': 135,
 'else': 68,
 'except': 122,
 'exec': 16,
 'finally': 164,
 'for': 28,
 'from': 30,
 'global': 27,
 'if': 31,
 'import': 24,
 'in': 100,
 'is': 102,
 'lambda': 11,
 'nonlocal': 13,
 'not': 7,
 'or': 74,
 'pass': 23,
 'print': 12,
 'raise': 5,
 'return': 19,
 'try': 15,
 'while': 17,
 'with': 36,
 'yield': 26},
tokens:
{0: 121,
 1: 21,
 2: 8,
 3: 18,
 4: 2,
 5: 160,
 6: 161,
 7: 29,
 8: 43,
 9: 32,
 10: 42,
 11: 70,
 12: 57,
 13: 147,
 14: 37,
 15: 25,
 16: 63,
 17: 64,
 18: 52,
 19: 50,
 20: 104,
 21: 98,
 22: 60,
 23: 120,
 24: 65,
 25: 14,
 26: 9,
 27: 47,
 28: 99,
 29: 97,
 30: 101,
 31: 103,
 32: 6,
 33: 54,
 34: 79,
 35: 80,
 36: 77,
 37: 90,
 38: 94,
 39: 85,
 40: 95,
 41: 86,
 42: 88,
 43: 89,
 44: 91,
 45: 93,
 46: 84,
 47: 87,
 48: 62,
 49: 92,
 50: 35},
start: 256
};

// Nothing more to see here.
