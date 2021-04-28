import { ComboboxOption as BaseComboboxOption } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxOption = styled(BaseComboboxOption, {
  '&[data-reach-combobox-option]': {
    cursor: 'pointer',
    margin: 0,
    padding: '$2',

    '&[aria-selected="true"]': {
      background: 'hsl(211, 10%, 95%)',
      '&:hover': {
        background: 'hsl(211, 10%, 90%)'
      }
    },
    '&:hover': {
      background: 'hsl(211, 10%, 92%)'
    },

    '[data-user-value]': {
      fontWeight: 'bold'
    }
  }
})
