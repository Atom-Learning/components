import * as React from 'react'

import { Checkbox } from '../checkbox'
import {
  CheckboxGroupCheckedContext,
  CheckboxGroupMountedContext
} from './CheckboxGroup.context'

type CheckboxGroupAllItemProps = Omit<
  React.ComponentProps<typeof Checkbox>,
  'checked' | 'defaultChecked'
>

export const CheckboxGroupAllItem = ({
  onCheckedChange,
  title = 'all',
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
    mountedItems.forEach((value) => {
      handleItemCheckedChangeContext(newChecked, value)
    })
    onCheckedChange?.(newChecked)
  }

  const isAllChecked = (() => {
    if (mountedItems.every((mountedItem) => checkedItems.includes(mountedItem)))
      return true

    if (mountedItems.some((mountedItem) => checkedItems.includes(mountedItem)))
      return 'indeterminate'

    return false
  })()

  return (
    <Checkbox
      onCheckedChange={handleItemCheckedChange}
      checked={isAllChecked}
      title={title}
      {...rest}
    />
  )
}
