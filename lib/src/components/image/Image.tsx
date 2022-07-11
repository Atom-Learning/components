import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

// default styling lifted from https://www.zachleat.com/web/fluid-images/#copy-and-paste
export const StyledImage = styled('img', {
  verticalAlign: 'middle',
  maxWidth: '100%',
  '&[width]': {
    width: 'auto'
  },
  '&[width][height]': {
    height: 'auto'
  },
  '&[src$=".svg"]': {
    width: '100%',
    height: 'auto',
    maxWidth: 'none'
  }
})

type ImageProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledImage>,
  {
    as?: never
  }
>

export const Image: React.FC<ImageProps> = StyledImage

Image.displayName = 'Image'
