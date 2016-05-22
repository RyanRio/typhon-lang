define(['pytools'], function(mod) {

  var fileName = '<stdin>';

  describe('builder', function() {

    it('123', function() {
      var cst = mod.parser.parse(fileName, '123');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=Num(n=123))])');
    });

    it('1.23', function() {
      var cst = mod.parser.parse(fileName, '1.23');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=Num(n=1.23))])');
    });

    it('123L', function() {
      var cst = mod.parser.parse(fileName, '123L');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=Num(n=123))])');
    });

    it('0xFFFFFF', function() {
      var cst = mod.parser.parse(fileName, '0xFFFFFF');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=Num(n=16777215))])');
    });

    it('0O0505L', function() {
      var cst = mod.parser.parse(fileName, '0O0505L');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=Num(n=0O0505))])');
    });

    it('"Hello"', function() {
      var cst = mod.parser.parse(fileName, '"Hello"');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=Str(s=Hello))])');
    });

    xit('"a{,2}b"', function() {
      var cst = mod.parser.parse(fileName, '"a\{,b"');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=Str(s=Hello))])');
    });

    it('True', function() {
      var cst = mod.parser.parse(fileName, 'True');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=Name(id=True,ctx=Load()))])');
    });

    it('False', function() {
      var cst = mod.parser.parse(fileName, 'False');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=Name(id=False,ctx=Load()))])');
    });

    it('[]', function() {
      var cst = mod.parser.parse(fileName, '[]');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=List(elts=[],ctx=Load()))])');
    });

    it('{}', function() {
      var cst = mod.parser.parse(fileName, '{}');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=Dict(keys=[],values=[]))])');
    });

    it('a', function() {
      var cst = mod.parser.parse(fileName, 'a');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=Name(id=a,ctx=Load()))])');
    });

    it('+a', function() {
      var cst = mod.parser.parse(fileName, '+a');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=UnaryOp(op=UAdd(),operand=Name(id=a,ctx=Load())))])');
    });

    it('-a', function() {
      var cst = mod.parser.parse(fileName, '-a');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=UnaryOp(op=USub(),operand=Name(id=a,ctx=Load())))])');
    });

    it('~a', function() {
      var cst = mod.parser.parse(fileName, '~a');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=UnaryOp(op=Invert(),operand=Name(id=a,ctx=Load())))])');
    });

    it('a + b', function() {
      var cst = mod.parser.parse(fileName, 'a + b');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Add(),right=Name(id=b,ctx=Load())))])');
    });

    it('a - b', function() {
      var cst = mod.parser.parse(fileName, 'a - b');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Sub(),right=Name(id=b,ctx=Load())))])');
    });

    it('a * b', function() {
      var cst = mod.parser.parse(fileName, 'a * b');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Mult(),right=Name(id=b,ctx=Load())))])');
    });

    it('a / b', function() {
      var cst = mod.parser.parse(fileName, 'a / b');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Div(),right=Name(id=b,ctx=Load())))])');
    });

    it('a % b', function() {
      var cst = mod.parser.parse(fileName, 'a % b');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Mod(),right=Name(id=b,ctx=Load())))])');
    });

    it('a << b', function() {
      var cst = mod.parser.parse(fileName, 'a << b');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=LShift(),right=Name(id=b,ctx=Load())))])');
    });

    it('a >> b', function() {
      var cst = mod.parser.parse(fileName, 'a >> b');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=RShift(),right=Name(id=b,ctx=Load())))])');
    });

    it('a ^ b', function() {
      var cst = mod.parser.parse(fileName, 'a ^ b');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=BitXor(),right=Name(id=b,ctx=Load())))])');
    });

    it('a & b', function() {
      var cst = mod.parser.parse(fileName, 'a & b');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=BitAnd(),right=Name(id=b,ctx=Load())))])');
    });

    it('a | b', function() {
      var cst = mod.parser.parse(fileName, 'a | b');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=BitOr(),right=Name(id=b,ctx=Load())))])');
    });

    it('a or b', function() {
      var cst = mod.parser.parse(fileName, 'a or b');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BoolOp(op=Or(),values=[Name(id=a,ctx=Load()),Name(id=b,ctx=Load())]))])');
    });

    it('a and b', function() {
      var cst = mod.parser.parse(fileName, 'a and b');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BoolOp(op=And(),values=[Name(id=a,ctx=Load()),Name(id=b,ctx=Load())]))])');
    });

    it('a + b * c', function() {
      var cst = mod.parser.parse(fileName, 'a + b * c');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Add(),right=BinOp(left=Name(id=b,ctx=Load()),op=Mult(),right=Name(id=c,ctx=Load()))))])');
    });

    it('a + b ^ c', function() {
      var cst = mod.parser.parse(fileName, 'a + b ^ c');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Add(),right=BinOp(left=Name(id=b,ctx=Load()),op=BitXor(),right=Name(id=c,ctx=Load()))))])');
    });

    it('not a', function() {
      var cst = mod.parser.parse(fileName, 'not a');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[Expr(value=UnaryOp(op=Not(),operand=Name(id=a,ctx=Load())))])');
    });

    it('def foo():\n pass', function() {
      var cst = mod.parser.parse(fileName, 'def foo():\n pass');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[FunctionDef(name=foo,args=arguments(args=[],vararg=None,kwarg=None,defaults=[]),body=[Pass()],decorator_list=[])])');
    });

    it('def foo():\n return a', function() {
      var cst = mod.parser.parse(fileName, 'def foo():\n return a');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[FunctionDef(name=foo,args=arguments(args=[],vararg=None,kwarg=None,defaults=[]),body=[Return(value=Name(id=a,ctx=Load()))],decorator_list=[])])');
    });

    it('def foo(x):\n pass', function() {
      var cst = mod.parser.parse(fileName, 'def foo(x):\n pass');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[FunctionDef(name=foo,args=arguments(args=[Name(id=x,ctx=Param())],vararg=None,kwarg=None,defaults=[]),body=[Pass()],decorator_list=[])])');
    });

    it('def foo(x, y):\n pass', function() {
      var cst = mod.parser.parse(fileName, 'def foo(x, y):\n pass');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[FunctionDef(name=foo,args=arguments(args=[Name(id=x,ctx=Param()),Name(id=y,ctx=Param())],vararg=None,kwarg=None,defaults=[]),body=[Pass()],decorator_list=[])])');
    });

    it('if a:\n pass', function() {
      var cst = mod.parser.parse(fileName, 'if a:\n pass');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[If(test=Name(id=a,ctx=Load()),body=[Pass()],orelse=[])])');
    });

    it('if a:\n pass\nelse:\n pass', function() {
      var cst = mod.parser.parse(fileName, 'if a:\n pass\nelse:\n pass');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[If(test=Name(id=a,ctx=Load()),body=[Pass()],orelse=[Pass()])])');
    });

    it('while a:\n pass', function() {
      var cst = mod.parser.parse(fileName, 'while a:\n pass');
      var ast = mod.builder.astFromParse(cst, fileName);
      var dump = mod.builder.astDump(ast);
      expect(dump).toBe('Module(body=[While(test=Name(id=a,ctx=Load()),body=[Pass()],orelse=[])])');
    });

    it('ParseError', function() {
      try
      {
        var cst = mod.parser.parse(fileName, 'print 1s');
        var ast = mod.builder.astFromParse(cst, fileName);
        var dump = mod.builder.astDump(ast);
        console.log("ParseError???");
      }
      catch(e)
      {
        expect(e.name).toBe('ParseError');
        var message = 'bad input';
        expect(e.message).toBe(message);
//      console.log("expect: " + JSON.stringify(message));
//      console.log("actual: " + JSON.stringify(e.message));
        expect(e.fileName).toBe(fileName);
        expect(e.lineNumber).toBe(1);
        expect(e.columnNumber).toBe(7);
        expect(e.toString()).toBe(e.name + ": " + message);
      }
    });

    it('IndentationError', function() {
      try
      {
        var cst = mod.parser.parse(fileName, 'def f():\n    pass\n print');
        var ast = mod.builder.astFromParse(cst, fileName);
        var dump = mod.builder.astDump(ast);
        console.log("IndentationError???");
      }
      catch(e)
      {
        expect(e.name).toBe('IndentationError');
        var message = 'unindent does not match any outer indentation level';
        expect(e.message).toBe(message);
//      console.log("expect: " + JSON.stringify(message));
//      console.log("actual: " + JSON.stringify(e.message));
        expect(e.fileName).toBe(fileName);
        expect(e.lineNumber).toBe(3);
        expect(e.columnNumber).toBe(0);
        expect(e.toString()).toBe(e.name + ": " + message);
      }
    });

    it('SyntaxError from builder', function() {
      try
      {
        var cst = mod.parser.parse(fileName, '()=1');
        var ast = mod.builder.astFromParse(cst, fileName);
        var dump = mod.builder.astDump(ast);
        console.log("SyntaxError from builder???");
      }
      catch(e)
      {
        expect(e.name).toBe('SyntaxError');
        var message = "can't assign to ()";
        expect(e.message).toBe(message);
//      console.log("expect: " + JSON.stringify(message));
//      console.log("actual: " + JSON.stringify(e.message));
        expect(e.fileName).toBe(fileName);
        expect(e.lineNumber).toBe(1);
        expect(e.columnNumber).toBe(undefined);
        expect(e.toString()).toBe(e.name + ": " + message);
      }
    });

    it('SyntaxError from symtable', function() {
      try
      {
        var cst = mod.parser.parse(fileName, 'def f(x,x):\n  pass');
        var ast = mod.builder.astFromParse(cst, fileName);
        var dump = mod.builder.astDump(ast);
        var st = mod.symtable.symbolTable(ast, fileName);
        console.log("SyntaxError from symtable???");
      }
      catch(e)
      {
        expect(e.name).toBe('SyntaxError');
        var message = "duplicate argument 'x' in function definition";
        expect(e.message).toBe(message);
//      console.log("expect: " + JSON.stringify(message));
//      console.log("actual: " + JSON.stringify(e.message));
        expect(e.fileName).toBe(fileName);
        expect(e.lineNumber).toBe(1);
        expect(e.columnNumber).toBe(undefined);
        expect(e.toString()).toBe(e.name + ": " + message);
      }
    });

    it('TokenError', function() {
      try
      {
        var cst = mod.parser.parse(fileName, '"""');
        var ast = mod.builder.astFromParse(cst, fileName);
        var dump = mod.builder.astDump(ast);
        var st = mod.symtable.symbolTable(ast, fileName);
        console.log("SyntaxError from symtable???");
      }
      catch(e)
      {
        expect(e.name).toBe('TokenError');
        var message = "EOF in multi-line string";
        expect(e.message).toBe(message);
//      console.log("expect: " + JSON.stringify(message));
//      console.log("actual: " + JSON.stringify(e.message));
        expect(e.fileName).toBe(fileName);
        expect(e.lineNumber).toBe(1);
        expect(e.columnNumber).toBe(0);
        expect(e.toString()).toBe(e.name + ": " + message);
      }
    });

  });

});
