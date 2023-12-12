import * as React from 'react'

import { Checkbox } from '../checkbox'
import {
  CheckboxGroupCheckedContext,
  CheckboxGroupMountedContext
} from './CheckboxGroup.context'

type CheckboxGroupAllItemProps = {
  onCheckedChange?: (newChecked: boolean | 'indeterminate') => void
}

export const CheckboxGroupAllItem = ({
  onCheckedChange,
  ...rest
}: CheckboxGroupAllItemProps): JSX.Element => {
  const {
    checked: checkedItems,
    handleItemCheckedChange: handleItemCheckedChangeContext
  } = React.useContext(CheckboxGroupCheckedContext)
  const { mounted: mountedItems } = React.useContext(
    CheckboxGroupMountedContext
  )

  const handleItemCheckedChange = (newChecked) => {
    console.log({ mountedItems })
    mountedItems.forEach((value) => {
      handleItemCheckedChangeContext(newChecked, value)
    })
    onCheckedChange?.(newChecked)
  }

  const isAllChecked = (() => {
    if (
      mountedItems.every((mountedItem) => checkedItems.includes(mountedItem))
    ) {
      return true
    }

    if (
      mountedItems.some((mountedItem) => checkedItems.includes(mountedItem))
    ) {
      return 'indeterminate'
    }

    return false
  })()

  return (
    <Checkbox
      onClick={(e) => e.stopPropagation()}
      onCheckedChange={handleItemCheckedChange}
      checked={isAllChecked}
      {...rest}
    />
  )
}
