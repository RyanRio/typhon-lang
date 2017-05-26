import { SymbolTable } from './SymbolTable';
import { Module } from './types';
/**
 * @param ast
 * @param fileName
 */
export declare function symbolTable(ast: Module, fileName: string): SymbolTable;
export interface SymbolInfo {
    get_name(): string;
    is_referenced(): boolean;
    is_imported(): boolean;
    is_parameter(): boolean;
    is_global(): boolean;
    is_declared_global(): boolean;
    is_local(): boolean;
    is_free(): boolean;
    is_assigned(): boolean;
    is_namespace(): boolean;
    get_namespaces(): SymbolObj[];
}
export interface SymbolObj {
    get_type(): string;
    get_name(): string;
    get_lineno(): number;
    is_nested(): boolean;
    has_children(): boolean;
    get_methods(): string[];
    get_parameters(): string[];
    get_locals(): string[];
    get_globals(): string[];
    get_frees(): string[];
    get_identifiers(): string[];
    lookup(identifier: string): SymbolInfo;
}
/**
 * @param st
 */
export declare function dumpSymbolTable(st: SymbolTable): string;