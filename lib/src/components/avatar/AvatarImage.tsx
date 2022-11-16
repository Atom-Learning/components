import * as React from 'react'

import { styled } from '~/stitches'

import { Image } from '../image'
import { AvatarInitial } from './AvatarInitial'

const StyledImage = styled(Image, {
  size: '100%',
  objectFit: 'cover'
})

type TAvatarImageProps = {
  src: string
  alt: string
}

export const AvatarImage: React.FC<TAvatarImageProps> = ({ src, alt }) => {
  if (!src) {
    return <AvatarInitial />
  }

  return <StyledImage src={src} alt={alt} />
}
