import * as React from 'react'

import { Checkbox } from '../checkbox'
import { useDataTable } from './DataTableContext'
import { Label } from '../label'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

interface DataTableSelectAllRowsCheckboxProps {
  label?: string
}

export const DataTableSelectAllRowsCheckbox = ({
  label = 'All rows selection'
}: DataTableSelectAllRowsCheckboxProps) => {
  const {
    getIsAllPageRowsSelected,
    getIsSomePageRowsSelected,
    toggleAllPageRowsSelected,
    tableId
  } = useDataTable()

  const getCheckedState = () => {
    if (getIsSomePageRowsSelected()) return 'indeterminate'
    if (getIsAllPageRowsSelected()) return true
    return false
  }

  const updateCheckedState = () => {
    if (getIsSomePageRowsSelected()) {
      return toggleAllPageRowsSelected(false)
    }
    return toggleAllPageRowsSelected(!getIsAllPageRowsSelected())
  }

  return (
    <>
      <VisuallyHidden.Root>
        <Label htmlFor={`${tableId}_all_rows_selection`}>{label}</Label>
      </VisuallyHidden.Root>

      <Checkbox
        checked={getCheckedState()}
        onCheckedChange={updateCheckedState}
        name={`${tableId}_allRowsSelection`}
      />
    </>
  )
}
