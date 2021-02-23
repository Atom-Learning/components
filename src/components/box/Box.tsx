import * as React from 'react'

import { styled } from '~/stitches'

export const StyledBox = styled('div', {})

// wrapping the stitches component in a React.FC prevents a TS error
// when passing custom components as children
export const Box: React.FC<
  React.ComponentProps<typeof StyledBox>
> = React.forwardRef((props, ref) => <StyledBox ref={ref} {...props} />)

Box.displayName = 'Box'
