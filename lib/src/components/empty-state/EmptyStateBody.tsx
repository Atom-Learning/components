import { Text } from '~/components/text'
import { styled } from '~/stitches'

export const EmptyStateBody = styled(Text, {
  color: '$tonal400',
  fontWeight: '400',
  variants: {
    size: {
      xs: { fontSize: '$sm' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$sm' },
      lg: { fontSize: '$md' },
      xl: { fontSize: '$md' }
    }
  }
})
