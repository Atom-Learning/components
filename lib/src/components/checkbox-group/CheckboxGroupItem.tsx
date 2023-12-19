import * as React from 'react'

import { Checkbox } from '../checkbox'
import {
  CheckboxGroupCheckedContext,
  CheckboxGroupMountedContext
} from './CheckboxGroup.context'

type CheckboxGroupItemProps = Omit<
  React.ComponentProps<typeof Checkbox>,
  'onCheckedChange' | 'checked' | 'defaultChecked'
> & {
  onCheckedChange?: (newChecked: boolean) => void
}

export const CheckboxGroupItem = ({
  value,
  onCheckedChange,
  ...rest
}: CheckboxGroupItemProps): JSX.Element => {
  const {
    checked: checkedItems,
    handleItemCheckedChange: handleItemCheckedChangeContext
  } = React.useContext(CheckboxGroupCheckedContext)
  const { handleItemMountedChange } = React.useContext(
    CheckboxGroupMountedContext
  )

  const handleItemCheckedChange = (newChecked) => {
    handleItemCheckedChangeContext(newChecked, value)
    onCheckedChange?.(newChecked)
  }

  React.useEffect(() => {
    handleItemMountedChange(true, value)
    return () => {
      handleItemMountedChange(false, value)
    }
  }, [handleItemMountedChange, value])

  return (
    <Checkbox
      onCheckedChange={handleItemCheckedChange}
      checked={checkedItems.includes(value)}
      title={String(value)}
      {...rest}
    />
  )
}
