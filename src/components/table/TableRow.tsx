import { styled } from '~/stitches'

export const TableRow = styled('tr', {
  '&:last-child': {
    'td:first-child': { borderBottomLeftRadius: '$0' },
    'td:last-child': { borderBottomRightRadius: '$0' }
  }
})

TableRow.displayName = 'TableRow'
