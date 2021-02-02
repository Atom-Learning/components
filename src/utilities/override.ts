// create a new type by overriding any of T's fields
// with U's. It's like Object.assign for types.
// Useful when StitchesProps<typeof {something}> is a little too permissive.

export type Override<T, U> = Omit<T, keyof U> & U
