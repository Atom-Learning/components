import { ComboboxOption as BaseComboboxOption } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxFieldOption = styled(BaseComboboxOption, {
  color: '$tonal500',
  cursor: 'pointer',
  m: 0,
  p: '$2',
  '&:hover, &[aria-selected="true"]': {
    bg: '$tonal50',
    borderRadius: '$0'
  },
  '[data-user-value]': {
    color: '$primary'
  }
})
