import { Image } from '~/components/image'
import { styled } from '~/stitches'

export const EmptyStateImage = styled(Image, {
  variants: {
    size: {
      xs: {
        width: '56px !important',
        height: '32px !important',
        mb: '$4'
      },
      sm: {
        size: '84px !important',
        mb: '$4'
      },
      md: {
        width: '126px !important',
        height: '72px !important',
        mb: '$4'
      },
      lg: {
        width: '190px !important',
        height: '142px !important',
        mb: '$5'
      },
      xl: {
        width: '285px !important',
        height: '213px !important',
        mb: '$5'
      }
    }
  }
})
