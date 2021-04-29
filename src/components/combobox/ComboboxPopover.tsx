import { ComboboxPopover as BaseComboboxPopover } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxPopover = styled(BaseComboboxPopover, {
  bg: 'white',
  border: 'solid 1px $tonal500',
  borderRadius: '$0',
  boxShadow: '$0',
  boxSizing: 'border-box',
  fontFamily: '$sans',
  fontSize: '$md',
  outline: 'none',
  p: '$2',
  transform: 'translateY(8px)'
})
