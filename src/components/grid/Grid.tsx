import theme from '@atom-learning/theme'
import * as React from 'react'

import { Flex } from '~/components/flex'
import { CSS, styled } from '~/stitches'

/**
 * output:
 * {
 *   0: {
 *     m: '-$space$0',
 *     '& > *': {
 *       m: '$space$0
 *     }
 *   },
 *   ...etc.
 * }
 **/
const gap = Object.keys(theme.space).reduce(
  (acc, key) => ({
    ...acc,
    [key]: {
      m: `-$space$${key}`,
      '& > *': {
        m: `$space$${key}`
      }
    }
  }),
  {}
) as Record<keyof typeof theme.space, CSS>

const GridContainer = styled(Flex, {
  flexWrap: 'wrap',
  variants: {
    gap
  }
})

type GridProps = React.ComponentProps<typeof GridContainer> & {
  minItemSize: string
}

export const Grid: React.FC<GridProps> = ({
  css,
  gap = 2,
  minItemSize,
  ...remainingProps
}) => (
  <GridContainer
    gap={gap}
    css={
      {
        ...(css as any),
        '& > *': {
          flex: `1 0 ${minItemSize}`
        }
      } as CSS
    }
    {...remainingProps}
  />
)

Grid.displayName = 'Grid'
