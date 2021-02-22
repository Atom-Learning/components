import * as React from 'react'

import { styled } from '~/stitches'

const UnstyledFlex = styled('div', { display: 'flex' })

// wrapping the stitches component in a React.FC prevents a TS error
// when passing custom components as children
export const Flex: React.FC<
  React.ComponentPropsWithoutRef<typeof UnstyledFlex>
> = (props) => <UnstyledFlex {...props} />

Flex.displayName = 'Flex'
