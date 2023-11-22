import { styled } from '~/stitches'

export const EmptyStateTitle = styled('h2', {
  color: '$tonal400',
  fontFamily: '$body',
  fontWeight: '600',
  m: 0,
  variants: {
    size: {
      xs: { fontSize: '$md' },
      sm: { fontSize: '$md' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$lg' }
    }
  }
})
