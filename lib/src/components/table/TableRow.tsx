import * as React from 'react'

import { styled } from '~/stitches'

export const StyledRow = styled('tr', {
  bg: 'unset'
})

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.ComponentProps<typeof StyledRow>
>((props, ref) => <StyledRow {...props} ref={ref} />)

TableRow.displayName = 'TableRow'
