import get from 'lodash.get'

export const getErrors = <T extends unknown>(obj: T, path: string) => {
  return get(obj, path)
}
