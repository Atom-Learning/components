import * as React from 'react'

import { Checkbox } from '../checkbox'

export const DataTableRowSelectionCheckbox = ({
  isChecked,
  onCheckedChange
}) => {
  return <Checkbox checked={isChecked} onCheckedChange={onCheckedChange} />
}
