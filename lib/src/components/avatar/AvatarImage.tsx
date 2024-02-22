import * as React from 'react'

import { styled } from '~/stitches'

import { Image } from '../image'
import { AvatarInitial } from './AvatarInitial'

const StyledImage = styled(Image, {
  size: '100%',
  objectFit: 'cover'
})

export const AvatarImage = ({ src, alt }: { src: string; alt: string }) => {
  if (!src) {
    return <AvatarInitial />
  }

  return <StyledImage src={src} alt={alt} />
}
