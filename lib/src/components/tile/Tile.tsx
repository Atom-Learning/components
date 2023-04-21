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
  asWorkaround?: React.ElementType // (!?) `asWorkaround` rather than `as` because, it seems, when we extend this via `styled()` stitches overrides this component from the first argument for the value in `as`
  colorScheme?: TcolorScheme
}

export const Tile = React.forwardRef<HTMLButtonElement, TTileProps>(
  ({ children, asWorkaround, colorScheme = {}, ...rest }, ref) => (
    <ColorScheme
      asChild
      base="grey1"
      accent="blue1"
      interactive="loContrast"
      {...colorScheme}
    >
      <StyledTile ref={ref} as={asWorkaround} {...rest}>
        {children}
      </StyledTile>
    </ColorScheme>
  )
)

Tile.displayName = 'Tile'
