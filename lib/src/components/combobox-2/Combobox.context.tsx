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
  selectedValue?: React.ReactText,
  setSelectedValue: React.Dispatch<React.SetStateAction<React.ReactText | undefined>>,
}

export const ComboboxContext = React.createContext<ComboboxContext>({
  searchTerm: '',
  openOnFocus: false,
  isDropdownMenuOpen: false,
  setIsDropdownMenuOpen: () => null,
  setSelectedValue: () => null,
})

export const ComboboxProvider = ({ children, openOnFocus = false }: React.PropsWithChildren<ComboboxProviderProps>): JSX.Element => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = React.useState(false) // @TODO?: take default/forced open into account
  const [selectedValue, setSelectedValue] = React.useState<React.ReactText>()

  React.useEffect(() => { console.log({ isDropdownMenuOpen }) }, [isDropdownMenuOpen])
  const value = React.useMemo<ComboboxContext>(
    () => ({ searchTerm, setSearchTerm, openOnFocus, isDropdownMenuOpen, setIsDropdownMenuOpen, selectedValue, setSelectedValue }),
    [searchTerm, openOnFocus, isDropdownMenuOpen, setIsDropdownMenuOpen, selectedValue, setSelectedValue]
  )
  return <ComboboxContext.Provider value={value}>{children}</ComboboxContext.Provider>
}
