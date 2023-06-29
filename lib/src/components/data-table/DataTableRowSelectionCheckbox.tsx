import * as React from 'react'

import { Checkbox } from '../checkbox'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Label } from '../label'
import { useDataTable } from './DataTableContext'

interface DataTableRowSelectionCheckboxProps {
  checked: boolean
  onCheckedChange: (value: boolean) => void
  rowId: string
  label?: string
}

export const DataTableRowSelectionCheckbox = ({
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
        checked={checked}
        onCheckedChange={onCheckedChange}
        name={`${tableId}_row_${rowId}_selection`}
      />
    </>
  )
}
