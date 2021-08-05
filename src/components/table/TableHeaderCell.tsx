import { styled } from '~/stitches'

export const TableHeaderCell = styled('th', {
  bg: '$tertiary',
  color: 'white',
  fontWeight: 600,
  p: '$2 $3',
  textAlign: 'left',
  verticalAlign: 'middle',
  '&:first-of-type': {
    borderTopLeftRadius: '$0',
    borderBottomLeftRadius: '$0'
  },
  '&:last-of-type': {
    borderTopRightRadius: '$0',
    borderBottomRightRadius: '$0'
  }
})

TableHeaderCell.displayName = 'TableHeaderCell'
