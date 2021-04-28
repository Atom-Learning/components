import { ComboboxOption as BaseComboboxOption } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxOption = styled(BaseComboboxOption, {
  cursor: 'pointer',
  margin: 0,
  padding: '$2',

  '&:hover': {
    bg: '$alpha100'
  },
  '&[aria-selected="true"]': {
    bg: '$alpha200'
  },
  '[data-user-value]': {
    fontWeight: 'bold'
  }
})
