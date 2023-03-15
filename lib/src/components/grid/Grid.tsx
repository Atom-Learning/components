import * as React from 'react'

import { CSS, styled } from '~/stitches'
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
} & {
  css?: CSS
  as?: any
} // (!) `css` and `as` are both props that come from `stitches`. It would be better to figure out and export the appropriate type for them in stitches!

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
