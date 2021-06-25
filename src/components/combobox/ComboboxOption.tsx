import { ComboboxOption as BaseComboboxOption } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxOption = styled(BaseComboboxOption, {
  cursor: 'pointer',
  m: 0,
  p: '$2',

  '&:hover': {
    bg: '$tonal100',
    borderRadius: '$0'
  },
  '&[aria-selected="true"]': {
    bg: '$alpha200'
  },
  '[data-user-value]': {
    fontWeight: 'bold'
  }
})
