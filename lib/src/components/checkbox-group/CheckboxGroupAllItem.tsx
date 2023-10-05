import * as React from 'react'

import { Checkbox } from '../checkbox'
import { CheckboxGroupContext } from './CheckboxGroup.context'

type TCheckboxGroupAllItemProps = {
  onCheckedChange?: (newChecked: boolean | 'indeterminate') => void,
}

export const CheckboxGroupAllItem = ({ onCheckedChange, ...rest }: TCheckboxGroupAllItemProps): JSX.Element => {
  const { checked: checkedContext, handleItemCheckedChange: handleItemCheckedChangeContext, mounted } = React.useContext(CheckboxGroupContext)

  const handleItemCheckedChange = (newChecked) => {
    mounted.forEach(value => {
      handleItemCheckedChangeContext(newChecked, value);
    });
    onCheckedChange?.(newChecked)
  }

  let isAllChecked = false
  if (mounted.every(m => checkedContext.includes(m))) {
    isAllChecked = true
  } else if (mounted.some(m => checkedContext.includes(m))) {
    isAllChecked = 'indeterminate'
  }

  return <Checkbox
    onCheckedChange={handleItemCheckedChange}
    checked={isAllChecked}
    {...rest} />
}
