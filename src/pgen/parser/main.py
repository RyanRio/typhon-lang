import pgen
import sys
out = """// DO NOT MODIFY. File automatically generated by pgen/main.py
define(['pytools/tokenize'], function(Tokenizer) {
var OpMap = {
"(": Tokenizer.Tokens.T_LPAR,
")": Tokenizer.Tokens.T_RPAR,
"[": Tokenizer.Tokens.T_LSQB,
"]": Tokenizer.Tokens.T_RSQB,
":": Tokenizer.Tokens.T_COLON,
",": Tokenizer.Tokens.T_COMMA,
";": Tokenizer.Tokens.T_SEMI,
"+": Tokenizer.Tokens.T_PLUS,
"-": Tokenizer.Tokens.T_MINUS,
"*": Tokenizer.Tokens.T_STAR,
"/": Tokenizer.Tokens.T_SLASH,
"|": Tokenizer.Tokens.T_VBAR,
"&": Tokenizer.Tokens.T_AMPER,
"<": Tokenizer.Tokens.T_LESS,
">": Tokenizer.Tokens.T_GREATER,
"=": Tokenizer.Tokens.T_EQUAL,
".": Tokenizer.Tokens.T_DOT,
"%": Tokenizer.Tokens.T_PERCENT,
"`": Tokenizer.Tokens.T_BACKQUOTE,
"{": Tokenizer.Tokens.T_LBRACE,
"}": Tokenizer.Tokens.T_RBRACE,
"@": Tokenizer.Tokens.T_AT,
"==": Tokenizer.Tokens.T_EQEQUAL,
"!=": Tokenizer.Tokens.T_NOTEQUAL,
"<>": Tokenizer.Tokens.T_NOTEQUAL,
"<=": Tokenizer.Tokens.T_LESSEQUAL,
">=": Tokenizer.Tokens.T_GREATEREQUAL,
"~": Tokenizer.Tokens.T_TILDE,
"^": Tokenizer.Tokens.T_CIRCUMFLEX,
"<<": Tokenizer.Tokens.T_LEFTSHIFT,
">>": Tokenizer.Tokens.T_RIGHTSHIFT,
"**": Tokenizer.Tokens.T_DOUBLESTAR,
"+=": Tokenizer.Tokens.T_PLUSEQUAL,
"-=": Tokenizer.Tokens.T_MINEQUAL,
"*=": Tokenizer.Tokens.T_STAREQUAL,
"/=": Tokenizer.Tokens.T_SLASHEQUAL,
"%=": Tokenizer.Tokens.T_PERCENTEQUAL,
"&=": Tokenizer.Tokens.T_AMPEREQUAL,
"|=": Tokenizer.Tokens.T_VBAREQUAL,
"^=": Tokenizer.Tokens.T_CIRCUMFLEXEQUAL,
"<<=": Tokenizer.Tokens.T_LEFTSHIFTEQUAL,
">>=": Tokenizer.Tokens.T_RIGHTSHIFTEQUAL,
"**=": Tokenizer.Tokens.T_DOUBLESTAREQUAL,
"//": Tokenizer.Tokens.T_DOUBLESLASH,
"//=": Tokenizer.Tokens.T_DOUBLESLASHEQUAL,
"->": Tokenizer.Tokens.T_RARROW
};
""" + pgen.generate_grammar('grammar-pytools.txt').genjs() + \
"""
var that =
{
  'OpMap': OpMap,
  'ParseTables': ParseTables
};
return that;
});
"""
open(sys.argv[1], "w").write(out)
