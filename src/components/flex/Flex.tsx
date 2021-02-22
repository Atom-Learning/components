import * as React from 'react'

import { styled } from '~/stitches'

const StyledFlex = styled('div', { display: 'flex' })

// wrapping the stitches component in a React.FC prevents a TS error
// when passing custom components as children
export const Flex: React.FC<
  React.ComponentPropsWithoutRef<typeof StyledFlex>
> = (props) => <StyledFlex {...props} />

Flex.displayName = 'Flex'
