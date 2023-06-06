import * as React from 'react'

import { Box } from '../box'
import { Button } from '../button'
import { DataTable } from '../data-table'
import { Flex } from '../flex'
import { useDataTable } from './DataTableContext'

interface DataTableBulkActionsProps {
  copy?: {
    cancel?: string
  }
}

export const DataTableBulkActions: React.FC<DataTableBulkActionsProps> = ({
  children,
  copy = {
    cancel: 'Cancel'
  }
}) => {
  const { toggleAllPageRowsSelected, rowSelection } = useDataTable()

  const handleDeselectAllPageRows = () => toggleAllPageRowsSelected(false)

  if (Object.keys(rowSelection || {}).length === 0) {
    return null
  }

  return (
    <Flex
      css={{
        p: '$2',
        bg: '$primaryLight',
        width: '100%',
        mb: '$2',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <DataTable.MetaData />
      <Flex css={{ justifyContent: 'flex-end', alignItems: 'center' }}>
        {children}
        {React.Children.count(children) > 0 && (
          <Box css={{ width: '1px', height: '$2', bg: 'black', mx: '$2' }} />
        )}
        <Button theme="neutral" onClick={handleDeselectAllPageRows}>
          {copy.cancel}
        </Button>
      </Flex>
    </Flex>
  )
}
