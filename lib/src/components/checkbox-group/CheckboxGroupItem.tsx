import * as React from 'react'

import { Checkbox } from '../checkbox'
import { CheckboxGroupContext } from './CheckboxGroup.context'
// import { useIsMounted } from '~/utilities/hooks/useIsMounted'

type TCheckboxGroupItemProps = {
  value: React.ReactText,
  onCheckedChange?: (newChecked: boolean) => void,
}

export const CheckboxGroupItem = ({ value, onCheckedChange, ...rest }: TCheckboxGroupItemProps): JSX.Element => {
  const { checked: checkedContext, handleItemCheckedChange: handleItemCheckedChangeContext, handleItemMountedChange } = React.useContext(CheckboxGroupContext)


  const handleItemCheckedChange = (newChecked) => {
    handleItemCheckedChangeContext(newChecked, value);
    onCheckedChange?.(newChecked)
  }

  React.useEffect(() => {
    handleItemMountedChange(true, value)
    return () => {
      handleItemMountedChange(false, value)
    }
  }, [handleItemMountedChange, value])

  return <Checkbox
    onCheckedChange={handleItemCheckedChange}
    checked={checkedContext.includes(value)}
    {...rest} />
}
