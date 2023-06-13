import * as React from 'react'

import { Button } from '../button'
import { DataTable } from '../data-table'
import { Divider } from '../divider'
import { Flex } from '../flex'
import { useDataTable } from './DataTableContext'

interface DataTableBulkActionsProps {
  cancelLabel?: string
}

export const DataTableBulkActions: React.FC<DataTableBulkActionsProps> = ({
  children,
  cancelLabel = 'Cancel'
}) => {
  const { toggleAllPageRowsSelected, rowSelection } = useDataTable()

  const handleDeselectAllPageRows = () => toggleAllPageRowsSelected(false)

  const isRowsSelected = Object.keys(rowSelection || {}).length > 0

  return (
    <Flex
      css={{
        p: '$2',
        bg: '$primaryLight',
        width: '100%',
        mb: '$2',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '$6'
      }}
    >
      <DataTable.MetaData />
      {isRowsSelected && (
        <Flex css={{ justifyContent: 'flex-end', alignItems: 'center' }}>
          {children}
          {React.Children.count(children) > 0 && (
            <Divider orientation="vertical" css={{ mx: '$4' }} />
          )}
          <Button theme="neutral" onClick={handleDeselectAllPageRows}>
            {cancelLabel}
          </Button>
        </Flex>
      )}
    </Flex>
  )
}
