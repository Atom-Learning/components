import React from 'react'

import { Image } from '~/components/image'
import { styled } from '~/stitches'

import { EmptyStateContext } from './EmptyState.context'

const StyledEmptyStateImage = styled(Image, {
  variants: {
    size: {
      xs: {
        maxWidth: '56px',
        maxHeight: '32px',
        mb: '$4'
      },
      sm: {
        maxWidth: '84px',
        maxHeight: '48px',
        mb: '$4'
      },
      md: {
        maxWidth: '126px',
        maxHeight: '72px',
        mb: '$4'
      },
      lg: {
        maxWidth: '190px',
        maxHeight: '142px',
        mb: 'calc($4 + $2)'
      },
      xl: {
        maxWidth: '285px',
        maxHeight: '213px',
        mb: 'calc($4 + $2)'
      }
    }
  }
})

type EmptyStateImageProps = React.ComponentProps<typeof StyledEmptyStateImage>

export const EmptyStateImage = (props: EmptyStateImageProps) => {
  const { size } = React.useContext(EmptyStateContext)
  return <StyledEmptyStateImage size={size} {...props} />
}
