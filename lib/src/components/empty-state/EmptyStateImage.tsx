import React from 'react'

import { Image } from '~/components/image'
import { styled } from '~/stitches'

const StyledEmptyStateImage = styled(Image, {
  variants: {
    size: {
      xs: {
        maxWidth: '56px',
        maxHeight: '32px'
      },
      sm: {
        maxWidth: '84px',
        maxHeight: '48px'
      },
      md: {
        maxWidth: '126px',
        maxHeight: '72px'
      },
      lg: {
        maxWidth: '190px',
        maxHeight: '142px'
      },
      xl: {
        maxWidth: '285px',
        maxHeight: '213px'
      }
    }
  }
})

type EmptyStateImageProps = React.ComponentProps<typeof StyledEmptyStateImage> &
  React.ComponentProps<typeof Image>

export const EmptyStateImage: React.FC<EmptyStateImageProps> = (props) => (
  <StyledEmptyStateImage {...props} />
)
