import React from 'react'

import { ColorScheme, TcolorScheme } from '~/experiments/color-scheme'
import { styled } from '~/stitches'

export const StyledTile = styled('div', {
  all: 'unset', // important for buttons etc
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative', // for pseudo-elements
  border: '1px solid',
  bg: '$base1',
  color: '$foreground',
  borderColor: 'transparent',
  variants: {
    borderRadius: {
      sm: { borderRadius: '$0' },
      md: { borderRadius: '$1' },
      lg: { borderRadius: '$3' }
    },
    border: {
      true: { borderColor: '$base3' }
    }
  }
})

type TTileProps = React.ComponentProps<typeof StyledTile> & {
  colorScheme?: TcolorScheme
}

export const Tile = React.forwardRef<HTMLDivElement, TTileProps>(
  ({ children, colorScheme = {}, ...rest }, ref) => (
    <ColorScheme
      asChild
      base="grey1"
      accent="blue2"
      interactive="loContrast"
      {...colorScheme}
    >
      <StyledTile ref={ref} {...rest}>
        {children}
      </StyledTile>
    </ColorScheme>
  )
)

Tile.displayName = 'Tile'
