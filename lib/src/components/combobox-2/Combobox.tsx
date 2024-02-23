import * as React from 'react'

import { DropdownMenu } from '../dropdown-menu-2'
import { ComboboxContext, ComboboxProvider } from './Combobox.context'
import { ComboboxInput } from './ComboboxInput'
import { ComboboxList } from './ComboboxList'
import { ComboboxOption } from './ComboboxOption'
import { ComboboxOptionText } from './ComboboxOptionText'
import { ComboboxPopover } from './ComboboxPopover'


type ComboboxProps = Omit<React.ComponentProps<typeof DropdownMenu>, 'defaultOpen'> & { openOnFocus?: boolean }

type ComboboxProviderProps = {

}

const withComboboxProvider = (WrappedComponent: (props: ComboboxProps) => JSX.Element) =>
  ({ openOnFocus, ...rest }: ComboboxProps & ComboboxProviderProps) => {
    return (
      <ComboboxProvider openOnFocus={openOnFocus}>
        <WrappedComponent {...rest} />
      </ComboboxProvider>
    )
  }

export const ComboboxRoot = withComboboxProvider(({ onOpenChange, open: forceOpen, ...rest }: ComboboxProps) => {
  const { searchTerm, isDropdownMenuOpen, setIsDropdownMenuOpen, isDropdownMenuOpenRef } = React.useContext(ComboboxContext)

  const handleOpenChange = (newOpen) => {
    console.log(2)
    isDropdownMenuOpenRef.current = newOpen
    setIsDropdownMenuOpen(newOpen)
    onOpenChange?.(newOpen)
  }

  React.useEffect(() => {
    if (!searchTerm) return
    if (!isDropdownMenuOpenRef.current) setIsDropdownMenuOpen(true)
    console.log(0)
  }, [isDropdownMenuOpenRef, searchTerm, setIsDropdownMenuOpen])


  console.log({ isDropdownMenuOpen })
  return (
    <DropdownMenu
      defaultOpen={false}
      {...rest}
      onOpenChange={typeof forceOpen === 'boolean' ? handleOpenChange : onOpenChange}
      open={typeof forceOpen === 'boolean' ? forceOpen : isDropdownMenuOpen}
    />
  )
})

// ComboboxRoot.displayName = 'Combobox'

export const Combobox = Object.assign(ComboboxRoot, {
  Option: ComboboxOption,
  Input: ComboboxInput,
  Popover: ComboboxPopover,
  List: ComboboxList,
  OptionText: ComboboxOptionText
})
