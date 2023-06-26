import * as React from 'react'

import { Button } from '../../../button'
import { Divider } from '../../../divider'
import { useDataTable } from '../../DataTableContext'

interface BulkActionsSelectedRowActionsProps {
  cancelLabel?: string
  children: React.ReactNode
}

export const BulkActionsSelectedRowActions: React.FC<
  BulkActionsSelectedRowActionsProps
> = ({ cancelLabel = 'Cancel', children }) => {
  const { toggleAllPageRowsSelected, rowSelection } = useDataTable()

  const handleDeselectAllPageRows = () => toggleAllPageRowsSelected(false)

  if (Object.keys(rowSelection).length === 0) return null

  return (
    <>
      {children}
      {React.Children.count(children) > 0 && (
        <Divider orientation="vertical" css={{ mx: '$4' }} />
      )}
      <Button theme="neutral" onClick={handleDeselectAllPageRows}>
        {cancelLabel}
      </Button>
    </>
  )
}
