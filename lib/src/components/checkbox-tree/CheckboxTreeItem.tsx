import * as React from 'react'
import { Checkbox } from '../checkbox'
import { CheckboxTreeRootContext } from './CheckboxTreeRoot'
// import { useIsMounted } from '~/utilities/hooks/useIsMounted'


export const CheckboxTreeItem = ({ value, onCheckedChange, ...rest }) => {
  const { checked: checkedContext, handleCheckedChange: handleCheckedChangeContext, handleMountedChange } = React.useContext(CheckboxTreeRootContext)


  const handleCheckedChange = (newChecked) => {
    handleCheckedChangeContext(newChecked, value);
    onCheckedChange?.(newChecked)
  }

  React.useEffect(() => {
    handleMountedChange(true, value)
    return () => {
      handleMountedChange(false, value)
    }
  }, [])

  return <Checkbox
    onCheckedChange={handleCheckedChange}
    checked={checkedContext.includes(value)}
    {...rest} />
}
