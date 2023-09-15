import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../../box'
import { Image } from '../../image'
import { useBannerContext } from '../BannerContext'

const Container = styled(Box, {
  overflow: 'hidden',
  borderRadius: '$round',
  variants: {
    size: {
      sm: {
        minHeight: '$4',
        maxHeight: '$4',
        minWidth: '$4',
        maxWidth: '$4'
      },
      md: {
        minHeight: '$5',
        maxHeight: '$5',
        minWidth: '$5',
        maxWidth: '$5'
      }
    }
  }
})

const StyledImage = styled(Image, {
  maxWidth: 'auto',
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})

export const BannerSlimImage: React.FC<React.ComponentProps<typeof Image>> = (
  props
) => {
  const { size } = useBannerContext()

  return (
    <Container size={size}>
      <StyledImage {...props} />
    </Container>
  )
}

BannerSlimImage.displayName = 'BannerSlimImage'
