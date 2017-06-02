"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asserts_1 = require("../pytools/asserts");
var Range = (function () {
    /**
     *
     */
    function Range(begin, end) {
        asserts_1.assert(begin, "begin must be defined");
        asserts_1.assert(end, "end must be defined");
        this.begin = begin;
        this.end = end;
    }
    return Range;
}());
exports.Range = Range;
