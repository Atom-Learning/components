import { Theme } from '@atom-learning/theme/lib/theme-atom'

import { CSS, theme } from '../../stitches'

/**
 * Generates a Stitches variants object based on keys in our theme.
 * You can use the string `$key` in your CSS object, which will be replaced
 * with the token from our theme.
 *
 *
 * @example
 * ```ts
 * createThemeVariants('space', { p: '$key' })
 *
 * // Result:
 * // {
 * //   0: { p: '$space$0' },
 * //   1: { p: '$space$1' },
 * //   2: { p: '$space$2' },
 * //   ...etc
 * // }
 * ```
 */
export const createThemeVariants = <ThemeProperty extends keyof Theme>(
  themeProperty: ThemeProperty,
  styles: CSS
): Record<keyof typeof theme[ThemeProperty], CSS> =>
  Object.keys(theme[themeProperty]).reduce(
    (acc, key) => ({
      ...acc,
      [key]: JSON.parse(
        JSON.stringify(styles).replace(/\$key/g, `$${themeProperty}$${key}`)
      )
    }),
    {}
  ) as Record<keyof typeof theme[ThemeProperty], CSS>
