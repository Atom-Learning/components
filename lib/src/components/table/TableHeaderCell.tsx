import { styled } from '~/stitches'

export const TableHeaderCell = styled('th', {
  borderBottom: '1px solid $grey200',
  color: 'white',
  fontFamily: '$body',
  fontWeight: 600,
  lineHeight: 1.5,
  textAlign: 'left',
  verticalAlign: 'middle'
})

TableHeaderCell.displayName = 'TableHeaderCell'
