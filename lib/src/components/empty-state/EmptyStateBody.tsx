import { Text } from '~/components/text'
import { styled } from '~/stitches'

export const EmptyStateBody = styled(Text, {
  color: '$tonal400',
  fontWeight: '400',
  variants: {
    size: {
      xs: {
        fontSize: '$sm',
        mb: '$4'
      },
      sm: {
        fontSize: '$sm',
        mb: '$4'
      },
      md: {
        fontSize: '$sm',
        mb: '$4'
      },
      lg: {
        fontSize: '$md',
        mb: 'calc($4 + $2)'
      },
      xl: {
        fontSize: '$md',
        mb: 'calc($4 + $2)'
      }
    }
  }
})
