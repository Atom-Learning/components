import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../../box'
import { Image } from '../../image'
import { useBannerContext } from '../BannerContext'

const Container = styled(Box, {
  overflow: 'hidden',
  borderRadius: '$round',
  alignSelf: 'flex-start',
  flexShrink: 0,
  variants: {
    size: {
      sm: {
        size: '$4'
      },
      md: {
        size: '$5'
      }
    }
  }
})

const StyledImage = styled(Image, {
  maxWidth: 'auto',
  size: '100%',
  objectFit: 'cover'
})

export const BannerSlimImage = (props: React.ComponentProps<typeof Image>) => {
  const { size } = useBannerContext()

  return (
    <Container size={size}>
      <StyledImage {...props} />
    </Container>
  )
}

BannerSlimImage.displayName = 'BannerSlimImage'
