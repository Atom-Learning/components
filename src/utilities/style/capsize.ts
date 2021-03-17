import { CSS } from '~/stitches'

/**
 * https://seek-oss.github.io/capsize/
 *
 * Capsize is an online tool (or npm package) that allows us to trim the whitespace above capital letters and below the baseline.
 * The following utility returns pseudo elements for use in a `styled()` function.
 * Using the tool above, choose a font, pass a font-size and line-height, and get a value to use as an offset for the whitespace. e.g.
 *
 *   styled('p', {
 *     fontFamily: 'Inter',
 *     fontSize: 16,
 *     lineHeight: 1.5,
 *     ...capsize('-0.3864em') // this value is a result of the font family, size and line-height
 *   })
 *
 */
export const capsize = (margin: string): Record<string, CSS> => ({
  '&::before': {
    content: "''",
    marginBottom: margin,
    display: 'table'
  },
  '&::after': {
    content: "''",
    marginTop: margin,
    display: 'table'
  }
})
