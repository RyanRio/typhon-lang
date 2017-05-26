import { parse, PyNode } from './parser';
import { astFromParse, astDump } from './builder';
import { symbolTable } from './symtable';
// import { dumpSymbolTable } from './symtable';
import { Module } from './types';

const fileName = '<stdin>';

describe('AST', function () {

    it('123', function () {
        const cst: boolean | PyNode = parse(fileName, '123');
        if (typeof cst === 'object') {
            const ast: Module = astFromParse(cst, fileName);
            const dump = astDump(ast);
            expect(dump).toBe('Module(body=[Expr(value=Num(n=123))])');
            const st = symbolTable(ast, fileName);
            expect(st.fileName).toBe(fileName);
            // const dumpST = dumpSymbolTable(st);
            // console.log(dumpST);
        }
    });

    it('1.23', function () {
        const cst = parse(fileName, '1.23') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=Num(n=1.23))])');
    });

    it('123L', function () {
        const cst = parse(fileName, '123L') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=Num(n=123))])');
    });

    it('0xFFFFFF', function () {
        const cst = parse(fileName, '0xFFFFFF') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=Num(n=16777215))])');
    });

    it('0O0505L', function () {
        const cst = parse(fileName, '0O0505L') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=Num(n=0O0505))])');
    });

    it('"Hello"', function () {
        const cst = parse(fileName, '"Hello"') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=Str(s=Hello))])');
    });

    xit('"a{,2}b"', function () {
        const cst = parse(fileName, '"a\{,b"') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=Str(s=Hello))])');
        const st = symbolTable(ast, fileName);
        expect(st.fileName).toBe(fileName);
        // const dumpST = dumpSymbolTable(st);
        // console.log(dumpST);
    });

    it('True', function () {
        const cst = parse(fileName, 'True') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=Name(id=True,ctx=Load()))])');
    });

    it('False', function () {
        const cst = parse(fileName, 'False') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=Name(id=False,ctx=Load()))])');
    });

    it('[]', function () {
        const cst = parse(fileName, '[]') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=List(elts=[],ctx=Load()))])');
    });

    it('{}', function () {
        const cst = parse(fileName, '{}') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=Dict(keys=[],values=[]))])');
    });

    it('a', function () {
        const cst = parse(fileName, 'a') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=Name(id=a,ctx=Load()))])');
    });

    it('+a', function () {
        const cst = parse(fileName, '+a') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=UnaryOp(op=UAdd(),operand=Name(id=a,ctx=Load())))])');
    });

    it('-a', function () {
        const cst = parse(fileName, '-a') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=UnaryOp(op=USub(),operand=Name(id=a,ctx=Load())))])');
    });

    it('~a', function () {
        const cst = parse(fileName, '~a') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=UnaryOp(op=Invert(),operand=Name(id=a,ctx=Load())))])');
    });

    it('a + b', function () {
        const cst = parse(fileName, 'a + b') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Add(),right=Name(id=b,ctx=Load())))])');
    });

    it('a - b', function () {
        const cst = parse(fileName, 'a - b') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Sub(),right=Name(id=b,ctx=Load())))])');
    });

    it('a * b', function () {
        const cst = parse(fileName, 'a * b') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Mult(),right=Name(id=b,ctx=Load())))])');
    });

    it('a / b', function () {
        const cst = parse(fileName, 'a / b') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Div(),right=Name(id=b,ctx=Load())))])');
    });

    it('a % b', function () {
        const cst = parse(fileName, 'a % b') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Mod(),right=Name(id=b,ctx=Load())))])');
    });

    it('a << b', function () {
        const cst = parse(fileName, 'a << b') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=LShift(),right=Name(id=b,ctx=Load())))])');
    });

    it('a >> b', function () {
        const cst = parse(fileName, 'a >> b') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=RShift(),right=Name(id=b,ctx=Load())))])');
    });

    it('a ^ b', function () {
        const cst = parse(fileName, 'a ^ b') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=BitXor(),right=Name(id=b,ctx=Load())))])');
    });

    it('a & b', function () {
        const cst = parse(fileName, 'a & b') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=BitAnd(),right=Name(id=b,ctx=Load())))])');
    });

    it('a | b', function () {
        const cst = parse(fileName, 'a | b') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=BitOr(),right=Name(id=b,ctx=Load())))])');
    });

    it('a or b', function () {
        const cst = parse(fileName, 'a or b') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BoolOp(op=Or(),values=[Name(id=a,ctx=Load()),Name(id=b,ctx=Load())]))])');
    });

    it('a and b', function () {
        const cst = parse(fileName, 'a and b') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BoolOp(op=And(),values=[Name(id=a,ctx=Load()),Name(id=b,ctx=Load())]))])');
    });

    it('a + b * c', function () {
        const cst = parse(fileName, 'a + b * c') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Add(),right=BinOp(left=Name(id=b,ctx=Load()),op=Mult(),right=Name(id=c,ctx=Load()))))])');
    });

    it('a + b ^ c', function () {
        const cst = parse(fileName, 'a + b ^ c') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=BinOp(left=Name(id=a,ctx=Load()),op=Add(),right=BinOp(left=Name(id=b,ctx=Load()),op=BitXor(),right=Name(id=c,ctx=Load()))))])');
    });

    it('not a', function () {
        const cst = parse(fileName, 'not a') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[Expr(value=UnaryOp(op=Not(),operand=Name(id=a,ctx=Load())))])');
    });

    it('def foo():\n pass', function () {
        const cst = parse(fileName, 'def foo():\n pass') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[FunctionDef(name=foo,args=Arguments(args=[],vararg=None,kwarg=None,defaults=[]),body=[Pass()],decorator_list=[])])');
        const st = symbolTable(ast, fileName);
        expect(st.fileName).toBe(fileName);
        // const dumpST = dumpSymbolTable(st);
        // console.log(dumpST);
    });

    it('def foo():\n return a', function () {
        const cst = parse(fileName, 'def foo():\n return a') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[FunctionDef(name=foo,args=Arguments(args=[],vararg=None,kwarg=None,defaults=[]),body=[ReturnStatement(value=Name(id=a,ctx=Load()))],decorator_list=[])])');
    });

    it('def foo(x):\n pass', function () {
        const cst = parse(fileName, 'def foo(x):\n pass') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[FunctionDef(name=foo,args=Arguments(args=[Name(id=x,ctx=Param())],vararg=None,kwarg=None,defaults=[]),body=[Pass()],decorator_list=[])])');
    });

    it('def foo(x, y):\n pass', function () {
        const cst = parse(fileName, 'def foo(x, y):\n pass') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[FunctionDef(name=foo,args=Arguments(args=[Name(id=x,ctx=Param()),Name(id=y,ctx=Param())],vararg=None,kwarg=None,defaults=[]),body=[Pass()],decorator_list=[])])');
    });

    it('if a:\n pass', function () {
        const cst = parse(fileName, 'if a:\n pass') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[IfStatement(test=Name(id=a,ctx=Load()),consequent=[Pass()],alternate=[])])');
    });

    it('if a:\n pass\nelse:\n pass', function () {
        const cst = parse(fileName, 'if a:\n pass\nelse:\n pass') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[IfStatement(test=Name(id=a,ctx=Load()),consequent=[Pass()],alternate=[Pass()])])');
    });

    it('while a:\n pass', function () {
        const cst = parse(fileName, 'while a:\n pass') as PyNode;
        const ast = astFromParse(cst, fileName);
        const dump = astDump(ast);
        expect(dump).toBe('Module(body=[WhileStatement(test=Name(id=a,ctx=Load()),body=[Pass()],orelse=[])])');
    });

    it('ParseError', function () {
        try {
            const cst = parse(fileName, 'print 1s') as PyNode;
            const ast = astFromParse(cst, fileName);
            const dump = astDump(ast);
            console.log(`ParseError??? ${dump}`);
        }
        catch (e) {
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

    it('IndentationError', function () {
        try {
            const cst = parse(fileName, 'def f():\n    pass\n print') as PyNode;
            const ast = astFromParse(cst, fileName);
            const dump = astDump(ast);
            console.log(`IndentationError??? ${dump}`);
        }
        catch (e) {
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

    it('SyntaxError from builder', function () {
        try {
            const cst = parse(fileName, '()=1') as PyNode;
            const ast = astFromParse(cst, fileName);
            const dump = astDump(ast);
            console.log(`SyntaxError from builder??? ${dump}`);
        }
        catch (e) {
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

    // FIXME
    xit('SyntaxError from symtable', function () {
        try {
            const cst = parse(fileName, 'def f(x,x):\n  pass') as PyNode;
            const ast = astFromParse(cst, fileName);
            /*const dump =*/ astDump(ast);
            /*var st =*/ symbolTable(ast, fileName);
        }
        catch (e) {
            console.log(e);
            // expect(e.name).toBe('SyntaxError');
            // var message = "duplicate argument 'x' in function definition";
            // expect(e.message).toBe(message);
            //      console.log("expect: " + JSON.stringify(message));
            //      console.log("actual: " + JSON.stringify(e.message));
            // expect(e.fileName).toBe(fileName);
            // expect(e.lineNumber).toBe(1);
            // expect(e.columnNumber).toBe(undefined);
            // expect(e.toString()).toBe(e.name + ": " + message);
        }
    });

    xit('TokenError', function () {
        try {
            const cst = parse(fileName, '"""') as PyNode;
            const ast = astFromParse(cst, fileName);
            /*const dump =*/ astDump(ast);
            /*var st =*/ symbolTable(ast, fileName);
            console.log("SyntaxError from symtable???");
        }
        catch (e) {
            expect(e.name).toBe('TokenError');
            var message = "EOF in multi-line string";
            // expect(e.message).toBe(message);
            //      console.log("expect: " + JSON.stringify(message));
            //      console.log("actual: " + JSON.stringify(e.message));
            expect(e.fileName).toBe(fileName);
            expect(e.lineNumber).toBe(1);
            expect(e.columnNumber).toBe(0);
            expect(e.toString()).toBe(e.name + ": " + message);
        }
    });
});