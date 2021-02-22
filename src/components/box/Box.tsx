import * as React from 'react'

import { styled } from '~/stitches'

export const UnstyledBox = styled('div', {})

// wrapping the stitches component in a React.FC prevents a TS error
// when passing custom components as children
export const Box: React.FC<
  React.ComponentPropsWithoutRef<typeof UnstyledBox>
> = (props) => <UnstyledBox {...props} />

Box.displayName = 'Box'
