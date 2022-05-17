/**
 * Creates a new type by overriding any of T's fields
 * with U's fields of the same name.
 * It's like Object.assign() for types.
 *
 * @typeParam T - The base type
 * @typeParam U - The type with the overrides you want to apply
 *
 * @example
 * ```
 * type BaseType = {
 *  field1: "A" | "B" | "C"
 *  field2: "D" | "E" | "F"
 * }
 *
 * type NewType = Override<BaseType, { field2: "G" | "H" | "I" }>
 * //{
 * // field1: "A" |"B" | "C"
 * // field2: "G" | "H" | "I"
 * //}
 *
 * ```
 */
export type Override<T, U> = Omit<T, keyof U> & U
