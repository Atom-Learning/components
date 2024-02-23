import * as React from 'react'

type ComboboxProviderProps = {
  openOnFocus?: boolean,
}

type ComboboxContext = {
  searchTerm: string
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>,
  openOnFocus: boolean,
  isDropdownMenuOpen: boolean
  setIsDropdownMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isDropdownMenuOpenRef: React.MutableRefObject<boolean>,
  selectedValue?: React.ReactText,
  setSelectedValue: React.Dispatch<React.SetStateAction<React.ReactText | undefined>>,
}

export const ComboboxContext = React.createContext<ComboboxContext>({
  searchTerm: '',
  openOnFocus: false,
  isDropdownMenuOpen: false,
  setIsDropdownMenuOpen: () => null,
  isDropdownMenuOpenRef: { current: false },
  setSelectedValue: () => null,
})

export const ComboboxProvider = ({ children, openOnFocus = false }: React.PropsWithChildren<ComboboxProviderProps>): JSX.Element => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = React.useState(false) // @TODO?: take default/forced open into account
  const isDropdownMenuOpenRef = React.useRef<boolean>(false)
  const [selectedValue, setSelectedValue] = React.useState<React.ReactText>()

  const value = React.useMemo<ComboboxContext>(
    () => ({ searchTerm, setSearchTerm, openOnFocus, isDropdownMenuOpenRef, isDropdownMenuOpen, setIsDropdownMenuOpen, selectedValue, setSelectedValue }),
    [searchTerm, openOnFocus, isDropdownMenuOpen, setIsDropdownMenuOpen, selectedValue, setSelectedValue]
  )
  return <ComboboxContext.Provider value={value}>{children}</ComboboxContext.Provider>
}
