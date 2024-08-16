import * as React from 'react'

import { ComboboxContext } from './Combobox.context'

export const ComboboxOptionText = (): React.ReactText => {
  const { searchTerm } = React.useContext(ComboboxContext)
  return searchTerm
}
