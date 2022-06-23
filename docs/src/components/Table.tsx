import { styled } from '@atom-learning/components'

export const Table = styled('table', {
  borderCollapse: 'collapse',
  width: '100%'
})
export const Cell = styled('td', {
  borderBottom: '1px solid $tonal200',
  fontFamily: '$sans',
  pr: '$4',
  py: '$4',
  textAlign: 'left',
  verticalAlign: 'middle',
  variants: {
    appearance: {
      heading: {
        color: '$tonal700',
        fontWeight: 700,
        whiteSpace: 'nowrap'
      },
      content: {
        color: '$tonal600'
      }
    },
    size: {
      sm: {
        fontSize: '$sm'
      },
      md: {
        fontSize: '$md'
      }
    }
  },
  defaultVariants: {
    appearance: 'content',
    size: 'sm'
  }
})
