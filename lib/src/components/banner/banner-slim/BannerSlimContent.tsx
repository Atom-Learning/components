import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../../flex'
import { useBannerContext } from '../BannerContext'

const Container = styled(Flex, {
  p: '$4',
  gap: '$4',
  variants: {
    size: {
      sm: { maxWidth: '736px', pb: 0 },
      md: {
        pl: '$24',
        minWidth: '737px',
        alignItems: 'center'
      }
    }
  }
})

export const BannerSlimContent: React.FC<
  React.ComponentProps<typeof Container>
> = (props) => {
  const { size } = useBannerContext()

  return <Container size={size} {...props} />
}

BannerSlimContent.displayName = 'BannerSlimContent'
