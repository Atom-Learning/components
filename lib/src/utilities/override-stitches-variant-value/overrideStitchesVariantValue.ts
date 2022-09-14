/*
 * Utility function to allow for overriding responsive variants using logic provided via the `overrideFunction` argument.
 *
 * It was developed out of a design requirement to override and pass through size properties to the <Icon /> component; depending
 * on the size of its parent component. It could be used for various other props where we want to tweak the value but
 * maintain the flexibility of a stitches variant property (which allows for use either via a string or a breakpoint object)
 * Documentation on stitches responsive variants: https://stitches.dev/docs/breakpoints#responsive-variants
 *
 */
export const overrideStitchesVariantValue = (
  prop: any,
  overrideFunction: (any) => any
) => {
  let overrideValue
  switch (typeof prop) {
    case 'object':
      overrideValue = {}
      Object.keys(prop).forEach((breakpoint) => {
        const propAtBreakpoint = prop[breakpoint]
        overrideValue[breakpoint] = propAtBreakpoint
          ? overrideFunction(propAtBreakpoint)
          : propAtBreakpoint
      })
      break
    default:
      overrideValue = overrideFunction(prop)
  }

  return overrideValue
}
