import * as React from 'react'

import { Checkbox } from '../checkbox'
import { OptionallyVisuallyHiddenContainer } from '~/utilities/optionally-visually-hidden-container'
import { Label } from '../label'

interface DataTableRowSelectionCheckboxProps {
  checked: boolean
  onCheckedChange: (value: boolean) => void
  rowIndex: number
}

export const DataTableRowSelectionCheckbox = ({
  rowIndex,
  checked,
  onCheckedChange
}: DataTableRowSelectionCheckboxProps): React.ReactElement => {
  return (
    <>
      <OptionallyVisuallyHiddenContainer hidden>
        <Label htmlFor={`row${rowIndex}Selection`}>
          {`Row ${rowIndex} selection`}
        </Label>
      </OptionallyVisuallyHiddenContainer>
      <Checkbox
        checked={checked}
        onCheckedChange={onCheckedChange}
        name={`row${rowIndex}Selection`}
      />
    </>
  )
}
