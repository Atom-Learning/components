import * as React from 'react'

import { CSS } from '~/stitches'

import { Table } from '../table'
import { TableBody } from '../table/TableBody'
import { DataTable } from './DataTable'
import { AsyncDataState } from './DataTable.types'
import { useDataTable } from './DataTableContext'
import { DataTableHead } from './DataTableHead'
import { DataTableLoading } from './DataTableLoading'

export type DataTableTableProps = Omit<
  React.ComponentProps<typeof Table>,
  'children' | 'numberOfStickyColumns'
> &
  Partial<
    Pick<React.ComponentProps<typeof DataTableHead>, 'theme' | 'sortable'>
  > &
  Partial<Pick<React.ComponentProps<typeof TableBody>, 'striped'>> & {
    scrollOptions?: {
      hasStickyHeader?: boolean
      headerCss?: CSS
      numberOfStickyColumns?: number
      scrollContainerCss?: CSS
    }
  }

export const DataTableTable = ({
  sortable,
  striped,
  theme,
  css,
  scrollOptions = {
    numberOfStickyColumns: 0,
    hasStickyHeader: false
  },
  ...props
}: DataTableTableProps) => {
  const {
    asyncDataState,
    getTotalRows,
    getCanSomeRowsExpand,
    enableRowSelection,
    tableId
  } = useDataTable()

  const isPending = asyncDataState === AsyncDataState.PENDING
  const isEmpty = !isPending && getTotalRows() === 0

  const buildScrollContainerKey = (): string => {
    let controlColumnCount = 0

    if (getCanSomeRowsExpand() && !!enableRowSelection) {
      controlColumnCount = 2
    } else if (getCanSomeRowsExpand() || !!enableRowSelection) {
      controlColumnCount = 1
    }

    return `${tableId}_${controlColumnCount}_control_columns`
  }

  if (isEmpty) return null

  return (
    <>
      <DataTableLoading />

      <Table
        {...props}
        numberOfStickyColumns={scrollOptions.numberOfStickyColumns}
        scrollContainerCss={scrollOptions.scrollContainerCss}
        scrollContainerkey={buildScrollContainerKey()}
        css={{
          ...css,
          ...(isPending && {
            opacity: 0.5,
            pointerEvents: 'none',
            transition: 'opacity 250ms linear 150ms'
          })
        }}
      >
        <DataTable.Head
          theme={theme}
          sortable={sortable}
          isSticky={scrollOptions.hasStickyHeader}
          css={scrollOptions.headerCss}
        />
        <DataTable.Body striped={striped} />
      </Table>
    </>
  )
}
