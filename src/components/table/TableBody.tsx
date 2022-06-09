import { styled } from '~/stitches'
import * as React from 'react'
import { TableRow } from './TableRow'

const StyledTableBody = styled('tbody', {
  variants: {
    appearance: {
      alternating: {
        [`${TableRow}`]: {
          '&:nth-child(odd)': { bg: 'white' },
          '&:nth-child(even)': { bg: '$tonal50' }
        }
      },
      simple: {
        bg: 'white'
      }
    }
  }
})

type TableBodyProps = React.ComponentProps<typeof StyledTableBody>

export const TableBody: React.FC<TableBodyProps> = ({
  appearance = 'alternating',
  ...rest
}) => <StyledTableBody appearance={appearance} {...rest} />

TableBody.displayName = 'TableBody'
