import * as React from 'react'

import { useCallbackRef } from '~/utilities/hooks/useCallbackRef'

interface IDropdownMenuContext {
  isOpen: boolean,
  setIsOpen: (open: boolean) => void,
  contentRef: React.Ref<HTMLElement>, // erm D:
  setContentRef: (el: HTMLElement) => void
}

export const DropdownMenuContext = React.createContext<IDropdownMenuContext>({
  isOpen: false,
  setIsOpen: () => null,
  contentRef: null,
  setContentRef: () => null
})

type IDropdownMenuProps = {
  defaultOpen?: boolean,
  onOpenChange?: (open: boolean) => void
}

export const DropdownMenuProvider: React.FC<IDropdownMenuProps> = ({
  defaultOpen = false,
  onOpenChange = () => null,
  children
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen) // also for typeahead huh
  React.useEffect(() => { onOpenChange(isOpen) }, [isOpen])

  const [contentRef, setContentRef] = useCallbackRef() // typeahead trigger?

  // const [selected, setSelected] = React.useState(new Set())
  // const select = (item) => {
  //   setSelected((prevSelected) => {
  //     const newSelected = prevSelected
  //     if (Array.isArray(item)) {
  //       item.forEach(newSelected.add, newSelected)
  //     } else if (item) {
  //       newSelected.add(item)
  //     }
  //     return newSelected
  //   })
  // }
  // const deselect = (item) => {
  //   setSelected((prevSelected) => {
  //     const newSelected = prevSelected
  //     if (Array.isArray(item)) {
  //       item.forEach(newSelected.delete, newSelected)
  //     } else if (item) {
  //       newSelected.delete(item)
  //     }
  //     return newSelected
  //   })
  // }

  const [selected, setSelected] = React.useState(new Map())
  const updateSelected = (name, value, method = "add") => {
    setSelected((prevSelected) => {
      const newSelected = prevSelected
      let newValues = prevSelected.get(name) || new Set()
      let mode = method
      if (method === 'replace') {
        newValues = new Set()
        mode = 'add'
      }
      if (Array.isArray(value)) {
        value.forEach(newValues[mode], newValues)
      } else if (value) {
        newValues[mode](value)
      }
      newSelected.set(name, newValues)
      return newSelected
    })
  }
  const checkSelected = (name, value) => {
    return selected.get(name)?.has(value)
  }

  console.log({ selected })
  const value = React.useMemo<IDropdownMenuContext>(
    () => ({ isOpen, setIsOpen, contentRef, setContentRef, selected, updateSelected, checkSelected }),
    [isOpen, setIsOpen, contentRef, setContentRef, selected, updateSelected, checkSelected]
  )
  return (
    <DropdownMenuContext.Provider value={value}>{children}</DropdownMenuContext.Provider>
  )
}
