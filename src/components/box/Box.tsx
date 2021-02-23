import * as React from 'react'

import { styled } from '~/stitches'

export const StyledBox = styled('div', {})

// wrapping the stitches component in a React.FC prevents a TS error
// when passing custom components as children
export const Box: React.FC<React.ComponentPropsWithoutRef<typeof StyledBox>> = (
  props
) => <StyledBox {...props} />

Box.displayName = 'Box'
