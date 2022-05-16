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
      true: {
        flexWrap: 'wrap'
      }
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' }
    },
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' }
    },
    gap
  }
})

type StackProps = React.ComponentProps<typeof StyledStack> & { css?: CSS }

export const Stack: React.FC<StackProps> = ({
  css,
  gap = 2,
  direction = 'row',
  wrap = true,
  justify = 'start',
  align,
  ...remainingProps
}) => {
  const alignDefault = direction === 'column' ? undefined : 'center'

  return (
    <CSSWrapper css={css}>
      <StyledStack
        direction={direction}
        gap={gap}
        wrap={wrap}
        justify={justify}
        align={align || alignDefault}
        {...remainingProps}
      />
    </CSSWrapper>
  )
}

Stack.displayName = 'Stack'
