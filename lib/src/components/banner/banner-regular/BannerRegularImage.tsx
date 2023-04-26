import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../../box'
import { Image } from '../../image'
import { useBannerContext } from '../BannerContext'

const Container = styled(Box, {
  position: 'relative',
  overflow: 'hidden',
  width: '38%',
  variants: {
    size: {
      sm: {
        display: 'none'
      },
      md: {
        display: 'block'
      }
    }
  }
})

const StyledImage = styled(Image, {
  position: 'absolute',
  maxWidth: 'auto',
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})

export const BannerRegularImage: React.FC<
  React.ComponentProps<typeof Image>
> = (props) => {
  const { size } = useBannerContext()

  return (
    <Container size={size}>
      <StyledImage {...props} />
    </Container>
  )
}

BannerRegularImage.displayName = 'BannerRegularImage'
