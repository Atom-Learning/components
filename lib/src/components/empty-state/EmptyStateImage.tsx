import React from 'react'
import { Image } from '~/components/image'
import { styled } from '~/stitches'

const EmptyStateImageContainer = styled('div', {
  height: 'auto',
  variants: {
    size: {
      xs: {
        width: '56px',
        maxHeight: '56px',
        mb: '$4'
      },
      sm: {
        width: '84px',
        maxHeight: '84px',
        mb: '$4'
      },
      md: {
        width: '126px',
        maxHeight: '126px',
        mb: '$4'
      },
      lg: {
        width: '190px',
        maxHeight: '190px',
        mb: '$5'
      },
      xl: {
        width: '285px',
        maxHeight: '285px',
        mb: '$5'
      }
    }
  }
})

const StyledImage = styled(Image, { objectFit: 'contain', maxHeight: '100%' })

type EmptyStateImageProps = React.ComponentProps<
  typeof EmptyStateImageContainer
> &
  React.ComponentProps<typeof Image>

export const EmptyStateImage: React.FC<EmptyStateImageProps> = ({
  size,
  ...rest
}) => (
  <EmptyStateImageContainer size={size}>
    <StyledImage {...rest} />
  </EmptyStateImageContainer>
)
