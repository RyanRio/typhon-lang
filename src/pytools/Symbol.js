define(["require", "exports", './SymbolConstants', './SymbolConstants', './SymbolConstants', './SymbolConstants', './SymbolConstants', './SymbolConstants', './SymbolConstants', './SymbolConstants', './SymbolConstants', './SymbolConstants'], function (require, exports, SymbolConstants_1, SymbolConstants_2, SymbolConstants_3, SymbolConstants_4, SymbolConstants_5, SymbolConstants_6, SymbolConstants_7, SymbolConstants_8, SymbolConstants_9, SymbolConstants_10) {
    "use strict";
    var Symbol = (function () {
        /**
         * @constructor
         * @param {string} name
         * @param {number} flags
         * @param {Array.<SymbolTableScope>} namespaces
         */
        function Symbol(name, flags, namespaces) {
            this.__name = name;
            this.__flags = flags;
            this.__scope = (flags >> SymbolConstants_9.SCOPE_OFF) & SymbolConstants_8.SCOPE_MASK;
            this.__namespaces = namespaces || [];
        }
        Symbol.prototype.get_name = function () { return this.__name; };
        Symbol.prototype.is_referenced = function () { return !!(this.__flags & SymbolConstants_10.USE); };
        Symbol.prototype.is_parameter = function () {
            return !!(this.__flags & SymbolConstants_4.DEF_PARAM);
        };
        Symbol.prototype.is_global = function () {
            return this.__scope === SymbolConstants_7.GLOBAL_IMPLICIT || this.__scope == SymbolConstants_6.GLOBAL_EXPLICIT;
        };
        Symbol.prototype.is_declared_global = function () {
            return this.__scope == SymbolConstants_6.GLOBAL_EXPLICIT;
        };
        Symbol.prototype.is_local = function () {
            return !!(this.__flags & SymbolConstants_1.DEF_BOUND);
        };
        Symbol.prototype.is_free = function () { return this.__scope == SymbolConstants_5.FREE; };
        Symbol.prototype.is_imported = function () { return !!(this.__flags & SymbolConstants_2.DEF_IMPORT); };
        Symbol.prototype.is_assigned = function () { return !!(this.__flags & SymbolConstants_3.DEF_LOCAL); };
        Symbol.prototype.is_namespace = function () { return this.__namespaces && this.__namespaces.length > 0; };
        Symbol.prototype.get_namespaces = function () { return this.__namespaces; };
        return Symbol;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Symbol;
});