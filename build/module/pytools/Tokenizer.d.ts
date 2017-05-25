import { Tokens } from './Tokens';
export declare type TokenizerCallback = (token: Tokens, text: string, start: number[], end: number[], line: string) => boolean | undefined;
/**
 * This is a port of tokenize.py by Ka-Ping Yee.
 *
 * each call to readline should return one line of input as a string, or
 * undefined if it's finished.
 *
 * callback is called for each token with 5 args:
 * 1. the token type
 * 2. the token string
 * 3. [ start_row, start_col ]
 * 4. [ end_row, end_col ]
 * 5. logical line where the token was found, including continuation lines
 *
 * callback can return true to abort.
 */
export declare class Tokenizer {
    fileName: string;
    callback: TokenizerCallback;
    lnum: number;
    parenlev: number;
    continued: boolean;
    namechars: string;
    numchars: string;
    contstr: string;
    needcont: boolean;
    contline: any;
    indents: number[];
    endprog: RegExp;
    strstart: number[];
    interactive: boolean;
    doneFunc: () => any;
    /**
     * Not sure who needs this yet.
     */
    static Tokens: typeof Tokens;
    /**
     * @constructor
     * @param {string} fileName
     */
    constructor(fileName: string, interactive: boolean, callback: TokenizerCallback);
    /**
     * @method generateTokens
     * @param line {string}
     * @return {boolean | string} 'done' or true?
     */
    generateTokens(line: string): boolean | string;
}
