import * as React from 'react'

type CheckboxGroupMountedContextValue = {
  mounted: React.ReactText[]
  handleItemMountedChange: (
    newItemMounted: boolean,
    itemValue: React.ReactText
  ) => void
}

export const CheckboxGroupMountedContext =
  React.createContext<CheckboxGroupMountedContextValue>({
    mounted: [],
    handleItemMountedChange: () => null
  })

export const CheckboxGroupMountedProvider = (props) => {
  const { handleItemMountedChange: handleItemMountedChangeFurtherUpContext } =
    React.useContext(CheckboxGroupMountedContext)

  const [mounted, setMounted] = React.useState<React.ReactText[]>([])
  const handleItemMountedChange = React.useCallback(
    (newItemMounted, itemValue) => {
      handleItemMountedChangeFurtherUpContext?.(newItemMounted, itemValue)
      setMounted((prevMounted) => {
        const newMountedSet = new Set(prevMounted)
        newItemMounted
          ? newMountedSet.add(itemValue)
          : newMountedSet.delete(itemValue)
        const newMounted = Array.from(newMountedSet)
        return newMounted
      })
    },
    [handleItemMountedChangeFurtherUpContext]
  )

  const value = React.useMemo<CheckboxGroupMountedContextValue>(
    () => ({ mounted, handleItemMountedChange }),
    [mounted, handleItemMountedChange]
  )

  return <CheckboxGroupMountedContext.Provider value={value} {...props} />
}
