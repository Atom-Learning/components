import { styled } from '@stitches/react'
import * as React from 'react'

import { Table } from '../table'
import { DataTable } from './DataTable'
import { ApiQueryStatus } from './DataTable.types'
import { useDataTable } from './RemoteDataTableContext'

type DataTableTableProps = Omit<
  React.ComponentProps<typeof Table>,
  'children'
> &
  Partial<
    Pick<React.ComponentProps<typeof DataTable.Head>, 'theme' | 'sortable'>
  > &
  Partial<Pick<React.ComponentProps<typeof Table.Body>, 'striped'>>

const TableStyled = styled(Table, {
  variants: {
    isLoading: {
      true: {
        filter: 'blur(3px)'
      }
    }
  }
})

export const DataTableTable: React.FC<DataTableTableProps> = ({
  sortable,
  striped,
  theme,
  ...props
}) => {
  const { apiQueryStatus } = useDataTable()
  const isLoading = apiQueryStatus === ApiQueryStatus.PENDING

  return (
    <TableStyled isLoading={isLoading} {...props}>
      <DataTable.Head theme={theme} sortable={sortable} />
      <DataTable.Body striped={striped} />
    </TableStyled>
  )
}
