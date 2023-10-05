import * as React from 'react'

type TCheckboxGroupContextValue = {
  checked: React.ReactText[],
  handleItemCheckedChange: (newItemChecked: boolean, itemValue: React.ReactText) => void,
  mounted: React.ReactText[],
  handleItemMountedChange: (newItemMounted: boolean, itemValue: React.ReactText) => void,
}

type TCheckboxGroupContextProps = {
  checked?: TCheckboxGroupContextValue['checked'],
  defaultChecked?: TCheckboxGroupContextValue['checked'],
  onCheckedChange?: (checked: TCheckboxGroupContextValue['checked']) => void,
}

export const CheckboxGroupContext = React.createContext<TCheckboxGroupContextValue>({
  checked: [],
  handleItemCheckedChange: () => null,
  mounted: [],
  handleItemMountedChange: () => null
})

export const CheckboxGroupProvider: React.FC<TCheckboxGroupContextProps> = ({
  checked: forcedChecked,
  defaultChecked = [],
  onCheckedChange,
  ...rest
}) => {
  const { checked: checkedFurtherUpContext, handleItemCheckedChange: handleItemCheckedChangeFurtherUpContext, handleItemMountedChange: handleItemMountedChangeFurtherUpContext } = React.useContext(CheckboxGroupContext)

  const [checked, setChecked] = React.useState(defaultChecked)

  React.useEffect(() => { if (forcedChecked) setChecked(forcedChecked) }, [forcedChecked])
  React.useEffect(() => { if (checkedFurtherUpContext) setChecked(checkedFurtherUpContext) }, [checkedFurtherUpContext]) // uuuuuugh how does this work w forceChecked... does it?

  const handleItemCheckedChange = React.useCallback((newItemChecked, itemValue) => {
    handleItemCheckedChangeFurtherUpContext?.(newItemChecked, itemValue)
    setChecked((prevChecked) => {
      const newCheckedSet = new Set(prevChecked)
      newItemChecked ? newCheckedSet.add(itemValue) : newCheckedSet.delete(itemValue)
      const newChecked = Array.from(newCheckedSet)
      onCheckedChange?.(newChecked)
      return newChecked
    })
  }, [onCheckedChange, handleItemCheckedChangeFurtherUpContext])

  const [mounted, setMounted] = React.useState<React.ReactText[]>([])
  const handleItemMountedChange = React.useCallback((newItemMounted, itemValue) => {
    handleItemMountedChangeFurtherUpContext?.(newItemMounted, itemValue)
    setMounted((prevMounted) => {
      const newMountedSet = new Set(prevMounted)
      newItemMounted ? newMountedSet.add(itemValue) : newMountedSet.delete(itemValue)
      const newMounted = Array.from(newMountedSet)
      return newMounted
    })
  }, [])

  const value = React.useMemo<TCheckboxGroupContextValue>(
    () => ({ checked, handleItemCheckedChange, mounted, handleItemMountedChange }),
    [checked, handleItemCheckedChange, mounted, handleItemMountedChange]
  )

  return (
    <CheckboxGroupContext.Provider value={value} {...rest} />
  )
}
