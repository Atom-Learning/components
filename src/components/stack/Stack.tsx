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
    gap
  }
})

type StackProps = React.ComponentProps<typeof StyledStack>

export const Stack: React.FC<StackProps> = ({
  css,
  gap = 2,
  direction = 'row',
  ...remainingProps
}) => (
  <CSSWrapper css={css}>
    <StyledStack gap={gap} direction={direction} {...remainingProps} />
  </CSSWrapper>
)

Stack.displayName = 'Stack'
