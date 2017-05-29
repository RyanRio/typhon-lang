import { Attribute } from '../pytools/types';
import { FunctionDef } from '../pytools/types';
import { Name } from '../pytools/types';
/**
 * Determines whether the name or attribute should be considered to be a class.
 * This is a heuristic test based upon the JavaScript convention for class names.
 * In future we may be able to use type information.
 */
export declare function isClassNameByConvention(name: Attribute | Name): boolean;
export declare function isMethod(functionDef: FunctionDef): boolean;
