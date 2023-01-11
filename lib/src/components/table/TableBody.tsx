import * as React from 'react'

import { styled } from '~/stitches'

import { TableRow } from './TableRow'

const StyledTableBody = styled('tbody', {
  variants: {
    striped: {
      true: {
        [`${TableRow}`]: {
          '&:nth-child(odd)': { bg: 'white' },
          '&:nth-child(even)': { bg: '$tonal50' }
        }
      },
      false: {
        [`${TableRow}`]: {
          bg: 'white'
        }
      }
    }
  }
})

type TableBodyProps = React.ComponentProps<typeof StyledTableBody> & {
  numberOfStickyColumns?: number
}

export const TableBody: React.FC<TableBodyProps> = ({
  striped = true,
  numberOfStickyColumns = 0,
  css,
  ...rest
}) => {
  return (
    <StyledTableBody
      striped={striped}
      css={{
        ...(numberOfStickyColumns === 1 && {
          [`& td:nth-of-type(${numberOfStickyColumns})`]: {
            bg: 'inherit',
            position: 'sticky',
            left: '0',
            zIndex: '2'
          }
        }),
        ...css
      }}
      {...rest}
    />
  )
}

TableBody.displayName = 'TableBody'
