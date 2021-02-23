import * as React from 'react'

import { styled } from '~/stitches'

export const StyledBox = styled('div', {})
type BoxProps = React.ComponentProps<typeof StyledBox>

// wrapping the stitches component in a React.FC prevents a TS error
// when passing custom components as children
export const Box: React.FC<BoxProps> = React.forwardRef<
  HTMLElement,
  BoxProps
>((props, ref) => {
  return <StyledBox ref={ref} {...props} />
})

Box.displayName = 'Box'
