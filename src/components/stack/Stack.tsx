import theme from '@atom-learning/theme'
import * as React from 'react'

import { CSS, styled } from '~/stitches'
import { CSSWrapper } from '~/utilities/css-wrapper'

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
  width: 'max-content',
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

type StackProps = React.ComponentProps<typeof StyledStack> & {
  as?: 'div'
}

export const Stack: React.FC<StackProps> = ({
  gap = 2,
  direction = 'row',
  css,
  ...remainingProps
}) => (
  <CSSWrapper css={{ width: 'max-content', ...(css as any) }}>
    <StyledStack gap={gap} direction={direction} {...remainingProps} />
  </CSSWrapper>
)

Stack.displayName = 'Stack'
