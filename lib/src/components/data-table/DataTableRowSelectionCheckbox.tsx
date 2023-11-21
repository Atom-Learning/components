import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as React from 'react'

import { Checkbox } from '../checkbox'
import { Label } from '../label'
import { useDataTable } from './DataTableContext'
import type { Row } from '@tanstack/react-table'

interface DataTableRowSelectionCheckboxProps {
  row: Row<Record<string, unknown>>
  checked: boolean | 'indeterminate'
  onCheckedChange: (value: boolean) => void
  label?: string
}

export const DataTableRowSelectionCheckbox = ({
  row,
  checked,
  onCheckedChange,
  label = `Row ${row.id} selection`
}: DataTableRowSelectionCheckboxProps): React.ReactElement => {
  const { tableId } = useDataTable()

  return (
    <>
      <VisuallyHidden.Root>
        <Label htmlFor={`${tableId}_row_${row.id}_selection`}>{label}</Label>
      </VisuallyHidden.Root>
      <Checkbox
        css={{ ml: row.depth ? `$${row.depth * 2}` : 0 }}
        checked={checked}
        onCheckedChange={onCheckedChange}
        name={`${tableId}_row_${row.id}_selection`}
        disabled={!row.getCanSelect()}
      />
    </>
  )
}
