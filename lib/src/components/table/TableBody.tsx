import * as React from 'react'

import { styled } from '~/stitches'

import { StyledRow } from './TableRow'

const StyledTableBody = styled('tbody', {
  variants: {
    striped: {
      true: {
        [`${StyledRow}`]: {
          '&:nth-child(odd)': { bg: 'white' },
          '&:nth-child(even)': { bg: '$tonal50' }
        }
      },
      false: {
        bg: 'white'
      }
    }
  }
})

type TableBodyProps = React.ComponentProps<typeof StyledTableBody>

export const TableBody: React.FC<TableBodyProps> = ({
  striped = true,
  ...rest
}) => <StyledTableBody striped={striped} {...rest} />

TableBody.displayName = 'TableBody'
