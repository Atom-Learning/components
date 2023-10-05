import * as React from 'react'
import { CheckboxTreeRootContext } from './CheckboxTreeRoot'

import { Checkbox } from '../checkbox'


export const CheckboxTreeAllItem = ({ onCheckedChange, ...rest }) => {
  const { checked: checkedContext, handleCheckedChange: handleCheckedChangeContext, mounted } = React.useContext(CheckboxTreeRootContext)

  const handleCheckedChange = (newChecked) => {
    mounted.forEach(value => {
      handleCheckedChangeContext(newChecked, value);
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
    onCheckedChange={handleCheckedChange}
    checked={isAllChecked}
    {...rest} />
}
