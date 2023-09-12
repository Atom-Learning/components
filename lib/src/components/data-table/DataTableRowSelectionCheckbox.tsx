import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as React from 'react'

import { Checkbox } from '../checkbox'
import { Label } from '../label'
import { useDataTable } from './DataTableContext'

interface DataTableRowSelectionCheckboxProps {
  checked: boolean | 'indeterminate'
  onCheckedChange: (value: boolean) => void
  rowId: string
  label?: string
  rowDepth: number
}

export const DataTableRowSelectionCheckbox = ({
  rowDepth,
  rowId,
  checked,
  onCheckedChange,
  label = `Row ${rowId} selection`
}: DataTableRowSelectionCheckboxProps): React.ReactElement => {
  const { tableId } = useDataTable()

  return (
    <>
      <VisuallyHidden.Root>
        <Label htmlFor={`${tableId}_row_${rowId}_selection`}>{label}</Label>
      </VisuallyHidden.Root>
      <Checkbox
        css={{ ml: rowDepth ? `$${rowDepth * 2}` : 0 }}
        checked={checked}
        onCheckedChange={onCheckedChange}
        name={`${tableId}_row_${rowId}_selection`}
      />
    </>
  )
}
