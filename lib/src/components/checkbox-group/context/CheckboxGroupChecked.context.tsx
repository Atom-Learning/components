import * as React from 'react'

import type { CheckboxGroupItemValue } from '../CheckboxGroup.types'

type CheckboxGroupCheckedContextValue = {
  checked: CheckboxGroupItemValue[]
  handleItemCheckedChange: (
    newItemChecked: boolean,
    itemValue: CheckboxGroupItemValue
  ) => void
}

type CheckboxGroupCheckedContextProps = {
  checked?: CheckboxGroupCheckedContextValue['checked']
  defaultChecked?: CheckboxGroupCheckedContextValue['checked']
  onCheckedChange?: (
    checked: CheckboxGroupCheckedContextValue['checked']
  ) => void
}

export const CheckboxGroupCheckedContext =
  React.createContext<CheckboxGroupCheckedContextValue>({
    checked: [],
    handleItemCheckedChange: () => null
  })

const generateNewCheckedFn = (
  currentChecked: CheckboxGroupCheckedContextValue['checked']
) => {
  return (newItemChecked, itemValue) => {
    const newCheckedSet = new Set(currentChecked)
    newItemChecked
      ? newCheckedSet.add(itemValue)
      : newCheckedSet.delete(itemValue)
    const newChecked = Array.from(newCheckedSet)
    return newChecked
  }
}

export const CheckboxGroupCheckedProvider = ({
  checked: controlledChecked,
  defaultChecked = [],
  onCheckedChange,
  ...rest
}: CheckboxGroupCheckedContextProps) => {
  const [checked, setChecked] = React.useState(defaultChecked)

  const handleItemControlledCheckedChange = React.useCallback(
    (newItemChecked, itemValue) => {
      if (!controlledChecked) return () => null
      const newCheckedFn = generateNewCheckedFn(controlledChecked)
      const newChecked = newCheckedFn(newItemChecked, itemValue)
      onCheckedChange?.(newChecked)
    },
    [onCheckedChange, controlledChecked]
  )

  const handleItemCheckedChange = React.useCallback(
    (newItemChecked, itemValue) => {
      setChecked((prevChecked) => {
        const newCheckedFn = generateNewCheckedFn(prevChecked)
        const newChecked = newCheckedFn(newItemChecked, itemValue)
        onCheckedChange?.(newChecked)
        return newChecked
      })
    },
    [onCheckedChange]
  )

  const value = React.useMemo<CheckboxGroupCheckedContextValue>(() => {
    const isControlled = Array.isArray(controlledChecked)
    return {
      checked: isControlled
        ? (controlledChecked as CheckboxGroupCheckedContextValue['checked']) // We're literally JUST checking it above but TS still flags it, wrongly, so casting
        : checked,
      handleItemCheckedChange: isControlled
        ? handleItemControlledCheckedChange
        : handleItemCheckedChange
    }
  }, [
    checked,
    handleItemCheckedChange,
    handleItemControlledCheckedChange,
    controlledChecked
  ])

  return <CheckboxGroupCheckedContext.Provider value={value} {...rest} />
}
