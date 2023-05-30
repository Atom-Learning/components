import * as React from 'react'

import { Checkbox } from '../checkbox'
import { useDataTable } from './DataTableContext'

export const DataTableSelectAllRowsCheckbox: React.FC = () => {
  const {
    getIsAllPageRowsSelected,
    getIsSomePageRowsSelected,
    toggleAllPageRowsSelected
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
    <Checkbox
      checked={getCheckedState()}
      onCheckedChange={updateCheckedState}
    />
  )
}
