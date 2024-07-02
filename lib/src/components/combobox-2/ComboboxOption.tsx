import * as React from 'react'
import { DropdownMenu } from '../dropdown-menu-2'
import { Text } from '../text'
import { HighlightMatch } from '../highlight-match'
import { ComboboxContext } from './Combobox.context'
import { styled } from '~/stitches'

const StyledComboboxOption = styled(DropdownMenu.Link, {
  '&[aria-selected="true"]': {
    bg: '$tonal50',
    borderRadius: '$0'
  },
  '[data-user-value]': {
    color: '$primary800'
  }
})

export const ComboboxOption = ({ value, children, ...rest }) => {
  const { selectedValue, setSelectedValue, setIsDropdownMenuOpen, searchTerm } = React.useContext(ComboboxContext)

  const handleSelect = () => {
    setSelectedValue(value)
    setIsDropdownMenuOpen(false)
  }

  return (
    <StyledComboboxOption aria-selected={selectedValue === value} onClick={handleSelect} {...rest}>
      <Text>
        <HighlightMatch pattern={searchTerm}>
          {children || value}
        </HighlightMatch>
      </Text>
    </StyledComboboxOption>
  )
}

