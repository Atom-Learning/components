import { styled } from '~/stitches'

export const EmptyStateTitle = styled('h2', {
  color: '$tonal400',
  fontFamily: '$body',
  fontWeight: '600',
  variants: {
    size: {
      xs: {
        fontSize: '$md',
        mb: '$3'
      },
      sm: {
        fontSize: '$md',
        mb: '$3'
      },
      md: {
        fontSize: '$md',
        mb: '$3'
      },
      lg: {
        fontSize: '$lg',
        mb: '$4'
      },
      xl: {
        fontSize: '$lg',
        mb: '$4'
      }
    }
  }
})
