import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../../flex'
import { useBannerContext } from '../BannerContext'

const StyledContainer = styled(Flex, {
  gap: '$4',
  p: '$4',
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
    <StyledContainer size={size} {...props}>
      {children}
    </StyledContainer>
  )
}

BannerSlimActions.displayName = 'BannerSlimActions'
