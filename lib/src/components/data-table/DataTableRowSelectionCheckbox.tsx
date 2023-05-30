import * as React from 'react'

import { Checkbox } from '../checkbox'
import { useDataTable } from './DataTableContext'

export const DataTableRowSelectionCheckbox = ({ isChecked, onCheckedChange }) => {
  return <Checkbox checked={isChecked} onCheckedChange={onCheckedChange} />
}
