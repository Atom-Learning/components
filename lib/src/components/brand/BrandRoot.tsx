import React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../flex'
import { focusVisibleStyleBlock } from '~/utilities'

const StyledBrandRoot = styled('a', {
  textDecoration: 'none !important',
  color: '$grey800',
  '&:not([data-disabled])': {
    '&:focus-visible': {
      ...focusVisibleStyleBlock()
    }
  },
})

type BrandRootProps = React.ComponentProps<typeof StyledBrandRoot>

export const BrandRoot = (props: BrandRootProps): JSX.Element => {
  return <StyledBrandRoot as={Flex} align="center" gap={3} {...props} />
}
