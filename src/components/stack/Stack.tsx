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
console.log({ theme })
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
  flexWrap: 'wrap',
  '& > *': {
    m: 0
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
        alignItems: 'center'
      },
      column: {
        flexDirection: 'column'
      }
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      end: { justifyContent: 'flex-end' },
      center: { justifyContent: 'center' }
    },
    gap
  }
})

type StackProps = React.ComponentProps<typeof StyledStack>

export const Stack: React.FC<StackProps> = ({
  css,
  gap = 2,
  direction = 'row',
  justify = 'start',
  ...remainingProps
}) => (
  <CSSWrapper css={css}>
    <StyledStack
      direction={direction}
      gap={gap}
      justify={justify}
      {...remainingProps}
    />
  </CSSWrapper>
)

Stack.displayName = 'Stack'
