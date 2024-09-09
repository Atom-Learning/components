import { ComboboxOption as BaseComboboxOption } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxOption = styled(BaseComboboxOption, {
  color: '$grey900',
  cursor: 'pointer',
  m: 0,
  p: '$2',
  '&:hover, &[aria-selected="true"]': {
    bg: '$grey100',
    borderRadius: '$0'
  },
  '[data-user-value]': {
    color: '$primary800'
  }
})
