import { Root } from '@radix-ui/react-collapsible'
import * as React from 'react'

import { DropdownMenu } from '../dropdown-menu-2'
import { ComboboxContext, ComboboxProvider } from './Combobox.context'
import { ComboboxInput } from './ComboboxInput'
import { ComboboxList } from './ComboboxList'
import { ComboboxOption } from './ComboboxOption'
import { ComboboxOptionText } from './ComboboxOptionText'
import { ComboboxPopover } from './ComboboxPopover'


type ComboboxProps = Omit<React.ComponentProps<typeof Root>, 'defaultOpen'> & { openOnFocus?: boolean }

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
  const { searchTerm, isDropdownMenuOpen, setIsDropdownMenuOpen } = React.useContext(ComboboxContext)

  const isDropdownMenuOpenRef = React.useRef<boolean>(isDropdownMenuOpen)
  const handleOpenChange = React.useCallback((newOpen) => {
    if (isDropdownMenuOpenRef.current === newOpen) return
    isDropdownMenuOpenRef.current = newOpen

    setIsDropdownMenuOpen(newOpen)
    onOpenChange?.(newOpen)
  }, [onOpenChange, setIsDropdownMenuOpen])


  const searchTermRef = React.useRef(searchTerm)
  React.useEffect(() => {
    if (searchTermRef.current === searchTerm) return
    searchTermRef.current = searchTerm

    if (!searchTerm) handleOpenChange(false)
    handleOpenChange(true)
  }, [searchTerm, handleOpenChange])


  console.log({ forceOpen, searchTerm, isDropdownMenuOpen })
  return (
    <DropdownMenu
      defaultOpen={false}
      {...rest}
      onOpenChange={typeof forceOpen === 'boolean' ? onOpenChange : handleOpenChange}
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
