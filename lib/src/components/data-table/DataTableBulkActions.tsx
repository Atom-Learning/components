import * as React from 'react'

import { Button } from '../button'
import { Flex } from '../flex'
import { useDataTable } from './DataTableContext'
import { Box } from '../box'

export const DataTableBulkActions: React.FC = ({ children }) => {
  const { rowSelection, toggleAllPageRowsSelected } = useDataTable()

  const selectedRowCount = Object.keys(rowSelection).length

  const handleDeselectAllPageRows = () => toggleAllPageRowsSelected(false)

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
      {selectedRowCount}
      <Flex css={{ justifyContent: 'flex-end', alignItems: 'center' }}>
        {children}
        {React.Children.count(children) > 0 && (
          <Box css={{ width: '1px', height: '$2', bg: 'black', mx: '$2' }} />
        )}
        <Button theme="neutral" onClick={handleDeselectAllPageRows}>
          Cancel
        </Button>
      </Flex>
    </Flex>
  )
}
