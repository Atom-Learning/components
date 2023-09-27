import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../../flex'

const StyledBannerSlimContent = styled(Flex, {
  width: '100%'
})

export const BannerSlimContent: React.FC<
  React.ComponentProps<typeof StyledBannerSlimContent>
> = (props) => {
  return <StyledBannerSlimContent align="center" gap={4} {...props} />
}

BannerSlimContent.displayName = 'BannerSlimContent'
