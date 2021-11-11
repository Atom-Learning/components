import { styled } from '~/stitches'

export const TableHeaderCell = styled('th', {
  color: 'white',
  fontFamily: '$body',
  fontWeight: 600,
  lineHeight: 1.5,
  p: '$2 $3',
  textAlign: 'left',
  verticalAlign: 'middle',
  '&:first-of-type': {
    borderTopLeftRadius: '$0'
  },
  '&:last-of-type': {
    borderTopRightRadius: '$0'
  }
})

TableHeaderCell.displayName = 'TableHeaderCell'
