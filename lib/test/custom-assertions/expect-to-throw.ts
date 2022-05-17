type JestToErrorArg = Parameters<
  jest.Matchers<unknown, () => unknown>['toThrow']
>[0]

/**
 * Helps prevent error logs blowing up as a result of expecting an error to be thrown,
 * when using a library (such as enzyme)
 *
 * @param func Function that you would normally pass to `expect(func).toThrow()`
 */
export const expectToThrow = (
  func: () => unknown,
  error?: JestToErrorArg
): void => {
  // Even though the error is caught, it still gets printed to the console
  // so we mock that out to avoid the wall of red text.
  const spy = jest.spyOn(console, 'error')
  spy.mockImplementation(() => null)

  expect(func).toThrow(error)

  spy.mockRestore()
}
