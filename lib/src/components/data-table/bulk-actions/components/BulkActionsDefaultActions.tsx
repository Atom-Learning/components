import * as React from 'react'

import { Box } from '~/components/box'
import { useDataTable } from '../../DataTableContext'

export const BulkActionsDefaultActions: React.FC = ({
  children
}: {
  children: React.ReactNode
}) => {
  const { rowSelection } = useDataTable()

  if (Object.keys(rowSelection).length > 0) return null

  return <Box>{children}</Box>
}
