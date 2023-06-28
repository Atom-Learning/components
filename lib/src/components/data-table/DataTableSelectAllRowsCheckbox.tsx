import * as React from 'react'

import { Checkbox } from '../checkbox'
import { useDataTable } from './DataTableContext'
import { OptionallyVisuallyHiddenContainer } from '~/utilities/optionally-visually-hidden-container'
import { Label } from '../label'

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
    <>
      <OptionallyVisuallyHiddenContainer hidden>
        <Label htmlFor="allRowsSelection">All rows selection</Label>
      </OptionallyVisuallyHiddenContainer>
      <Checkbox
        checked={getCheckedState()}
        onCheckedChange={updateCheckedState}
        name="allRowsSelection"
      />
    </>
  )
}
