import * as React from 'react'

import { CSS, styled, theme } from '~/stitches'
import { CSSWrapper } from '~/utilities/css-wrapper'

/**
 * output:
 * {
 *   0: {
 *     mt: `-$space$0`,
 *     ml: `-$space$0`,
 *     '& > *': {
 *       mt: `$space$0`,
 *       ml: `$space$0`
 *     }
 *   },
 *   ...etc.
 * }
 **/
const gap = Object.keys(theme.space).reduce(
  (acc, key) => ({
    ...acc,
    [key]: {
      mt: `-$space$${key}`,
      ml: `-$space$${key}`,
      '& > *': {
        mt: `$space$${key}`,
        ml: `$space$${key}`
      }
    }
  }),
  {}
) as Record<keyof typeof theme.space, CSS>

const StyledStack = styled('div', {
  display: 'flex',
  '& > *': {
    m: 0
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      },
      'row-reverse': {
        flexDirection: 'row-reverse'
      },
      column: {
        flexDirection: 'column'
      }
    },
    wrap: {
      wrap: {
        flexWrap: 'wrap'
      },
      'no-wrap': {
        flexWrap: 'no-wrap'
      },
      'wrap-reverse': {
        flexWrap: 'wrap-reverse'
      }
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      false: {}
    },
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      false: {}
    },
    gap: {
      ...gap,
      false: {}
    }
  }
})

type StackPropsType = React.ComponentProps<typeof StyledStack> & { css?: CSS }

export const Stack: React.FC<StackPropsType> = ({
  css,
  gap = 2,
  direction = 'row',
  wrap = 'wrap',
  justify = 'start',
  align,
  ...remainingProps
}) => {
  return (
    <CSSWrapper css={css}>
      <StyledStack
        direction={direction}
        gap={gap}
        wrap={wrap}
        justify={justify}
        align={(typeof align === 'undefined') && (direction !== 'column') ? 'center' : align}
        {...remainingProps}
      />
    </CSSWrapper>
  )
}

Stack.displayName = 'Stack'
