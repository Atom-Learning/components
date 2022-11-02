import React from 'react'
import { Image } from '~/components/image'
import { styled } from '~/stitches'

const StyledEmptyStateImage = styled(Image, {
  variants: {
    size: {
      xs: {
        width: '56px',
        height: '32px',
        mb: '$4'
      },
      sm: {
        size: '84px',
        mb: '$4'
      },
      md: {
        width: '126px',
        height: '72px',
        mb: '$4'
      },
      lg: {
        width: '190px',
        height: '142px',
        mb: '$5'
      },
      xl: {
        width: '285px',
        height: '213px',
        mb: '$5'
      }
    }
  }
})

type EmptyStateImageProps = React.ComponentProps<
  typeof StyledEmptyStateImage
> &
  React.ComponentProps<typeof Image>

export const EmptyStateImage: React.FC<EmptyStateImageProps> = (props) => (
  <StyledEmptyStateImage {...props} />
)
