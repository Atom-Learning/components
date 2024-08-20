import * as React from 'react'

import { ChipDismissibleGroup } from '../chip-dismissible-group'
import { DropdownMenuContext } from './DropdownMenu.context'

export const DropdownMenuChipDismissibleGroup = () => {
  const { updateSelected, selected } = React.useContext(DropdownMenuContext)
  const handleDismiss = ({ name, value }) => {
    updateSelected(name, value, 'delete')
  }

  console.log(selected?.entries())
  return (
    <ChipDismissibleGroup onDismiss={handleDismiss}>
      {Array.from(selected?.entries()).map(([name, valueSet]) => {
        console.log(name, valueSet)
        return Array.from(valueSet?.values()).map(
          (value) => <ChipDismissibleGroup.Item value={{ name, value }}>{value}</ChipDismissibleGroup.Item>
        )
      })}
    </ChipDismissibleGroup>
  )
}
