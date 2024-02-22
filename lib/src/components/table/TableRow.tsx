import * as React from 'react'

import { styled } from '~/stitches'

export const StyledRow = styled('tr', {
  bg: 'unset'
})

export const TableRow: React.ForwardRefExoticComponent<
  React.ComponentProps<typeof StyledRow>
> = React.forwardRef((props, ref) => <StyledRow {...props} ref={ref} />)

TableRow.displayName = 'TableRow'
