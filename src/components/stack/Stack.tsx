import theme from '@atom-learning/theme'
import { StitchesVariants } from '@stitches/core'
import * as React from 'react'

import { CSS, styled } from '~/stitches'

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

type StackProps = StitchesVariants<typeof StyledStack> & {
  as?: 'div'
}

export const Stack: React.FC<StackProps> = ({
  gap = 2,
  direction = 'row',
  ...remainingProps
}) => <StyledStack gap={gap} direction={direction} {...remainingProps} />

Stack.displayName = 'Stack'
