import { CSS, styled } from '~/stitches'
import { createThemeVariants } from '~/utilities'

const createVariants = <T extends GlobalValue[]>(
  variants: T,
  fn: (string: T[number]) => CSS
) => {
  return variants.reduce(
    (prev, variant) => ({ ...prev, [variant]: fn(variant) }),
    {} as Record<T[number], CSS>
  )
}

const globalValues = [
  'inherit',
  'initial',
  'revert',
  'revert-layer',
  'unset'
] as const

/*
 * The following type is partially a hack to get the rest of the createVariants array parameter to be recognised as const.
 * Thus giving is the correct types generated for these generated variant props.
 * No clue how we can do it cleaner.
 * Mad props to: Elliot for getting this to working as is.
 *
 */
// eslint-disable-next-line @typescript-eslint/ban-types
type GlobalValue = typeof globalValues[number] | (string & {})

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    direction: createVariants(
      [...globalValues, 'row', 'row-reverse', 'column', 'column-reverse'],
      (v) => {
        return { flexDirection: v }
      }
    ),
    wrap: createVariants(
      [...globalValues, 'nowrap', 'wrap', 'wrap-reverse'],
      (v) => {
        return { flexWrap: v }
      }
    ),
    // Why is both `start` and `flex-start` valid values? Answer: https://csslayout.news/whats-the-difference-between-the-alignment-values-of-start-flex-start-and-self-start/
    justify: createVariants(
      [
        ...globalValues,
        'normal',
        'unsafe',
        'safe',
        'start',
        'center',
        'end',
        'flex-start',
        'flex-end',
        'left',
        'right',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch'
      ],
      (v) => {
        return { justifyContent: v }
      }
    ),
    align: createVariants(
      [
        ...globalValues,
        'normal',
        'unsafe',
        'safe',
        'center',
        'start',
        'end',
        'self-start',
        'self-end',
        'flex-start',
        'flex-end',
        'baseline',
        'first baseline',
        'last baseline',
        'stretch'
      ],
      (v) => {
        return { alignItems: v }
      }
    ),
    gap: createThemeVariants('space', { gap: '$key' })
  }
})

Flex.displayName = 'Flex'
