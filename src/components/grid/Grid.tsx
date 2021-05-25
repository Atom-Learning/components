import theme from '@atom-learning/theme'
import * as React from 'react'

import { CSS, styled } from '~/stitches'

/**
 * output:
 * {
 *   0: {
 *     gap: '-$space$0',
 *   },
 *   ...etc.
 * }
 **/
const gap = Object.keys(theme.space).reduce(
  (acc, key) => ({
    ...acc,
    [key]: {
      gap: `$space$${key}`
    }
  }),
  {}
) as Record<keyof typeof theme.space, CSS>

const GridContainer = styled('div', {
  display: 'grid',
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
    css={{
      ...(css as any),
      gridTemplateColumns: `repeat(auto-fit, minmax(${minItemSize}, 1fr))`
    }}
    gap={gap}
    {...remainingProps}
  />
)

Grid.displayName = 'Grid'
