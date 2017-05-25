import SymbolTableScope from './SymbolTableScope';
export default class Symbol {
    private __name;
    private __flags;
    private __scope;
    private __namespaces;
    /**
     * @constructor
     * @param {string} name
     * @param {number} flags
     * @param {Array.<SymbolTableScope>} namespaces
     */
    constructor(name: string, flags: number, namespaces: SymbolTableScope[]);
    get_name(): string;
    is_referenced(): boolean;
    is_parameter(): boolean;
    is_global(): boolean;
    is_declared_global(): boolean;
    is_local(): boolean;
    is_free(): boolean;
    is_imported(): boolean;
    is_assigned(): boolean;
    is_namespace(): boolean;
    get_namespaces(): SymbolTableScope[];
}
