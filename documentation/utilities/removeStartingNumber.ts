export const removeStartingNumber = (string: string) =>
  /^\d/i.test(string) ? string.slice(1).trim() : string
