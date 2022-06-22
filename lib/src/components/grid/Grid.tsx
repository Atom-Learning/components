import * as React from 'react'

import { CSS, styled, theme } from '~/stitches'

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
  minItemSize?: string
  maxItemSize?: string
}

export const Grid: React.FC<GridProps> = ({
  css,
  gap = 2,
  minItemSize,
  maxItemSize = '1fr',
  ...remainingProps
}) => (
  <GridContainer
    css={{
      ...(minItemSize && {
        gridTemplateColumns: `repeat(auto-fit, minmax(${minItemSize}, ${maxItemSize}))`
      }),
      ...(css as any)
    }}
    gap={gap}
    {...remainingProps}
  />
)

Grid.displayName = 'Grid'
