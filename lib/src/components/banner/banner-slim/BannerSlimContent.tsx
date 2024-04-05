import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../../flex'

const StyledBannerSlimContent = styled(Flex, {
  width: '100%'
})

export const BannerSlimContent = (
  props: React.ComponentProps<typeof StyledBannerSlimContent>
) => <StyledBannerSlimContent align="center" gap={4} {...props} />

BannerSlimContent.displayName = 'BannerSlimContent'
