import * as React from 'react'

import { styled } from '~/stitches'
import { createThemeVariants } from '~/utilities'

const GridContainer = styled('div', {
  display: 'grid',
  variants: {
    gap: createThemeVariants('space', { gap: '$key' })
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
