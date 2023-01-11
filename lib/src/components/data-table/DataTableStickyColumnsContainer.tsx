import React from 'react'

import { CSS } from '~/stitches'

import { Table } from '../table'
import { useDataTable } from './DataTableContext'

interface IDataTableStickyColumnsContainerProps {
  children: React.ReactNode
  css?: CSS
}

export const DataTableStickyColumnsContainer: React.FC<
  IDataTableStickyColumnsContainerProps
> = ({ children, css }) => {
  const { numberOfStickyColumns, setNumberOfStickyColumns } = useDataTable()

  React.useEffect(() => {
    // Temporarily hardcoded as 1 and it will be a prop once we add support to multiple sticky columns
    setNumberOfStickyColumns(1)
  }, [])

  return (
    <Table.StickyColumnsContainer
      numberOfStickyColumns={numberOfStickyColumns}
      css={css}
    >
      {children}
    </Table.StickyColumnsContainer>
  )
}
