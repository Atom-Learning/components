import * as React from 'react'

type CheckboxGroupCheckedContextValue = {
  checked: React.ReactText[]
  handleItemCheckedChange: (
    newItemChecked: boolean,
    itemValue: React.ReactText
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

export const CheckboxGroupCheckedProvider: React.FC<
  CheckboxGroupCheckedContextProps
> = ({
  checked: controlledChecked,
  defaultChecked = [],
  onCheckedChange,
  ...rest
}) => {
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
    [onCheckedChange, controlledChecked]
  )

  const value = React.useMemo<CheckboxGroupCheckedContextValue>(() => {
    const isControlled = Array.isArray(controlledChecked)
    return {
      checked: isControlled ? controlledChecked : checked,
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
