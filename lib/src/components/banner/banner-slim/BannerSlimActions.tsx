import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../../flex'
import { useBannerContext } from '../BannerContext'

const StyledBannerSlimActions = styled(Flex, {
  variants: {
    size: {
      sm: { width: '100%' },
      md: { width: 'auto' }
    }
  }
})

export const BannerSlimActions: React.FC<React.ComponentProps<typeof Flex>> = ({
  children,
  ...props
}) => {
  const { size } = useBannerContext()
  return (
    <StyledBannerSlimActions size={size} gap={4} {...props}>
      {children}
    </StyledBannerSlimActions>
  )
}

BannerSlimActions.displayName = 'BannerSlimActions'
