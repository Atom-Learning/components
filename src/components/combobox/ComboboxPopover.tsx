import { ComboboxPopover as BaseComboboxPopover } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxPopover = styled(BaseComboboxPopover, {
  bg: 'white',
  border: 'solid 1px $tonal200',
  borderRadius: '$0',
  boxShadow: '$1',
  boxSizing: 'border-box',
  fontFamily: '$body',
  fontSize: '$md',
  outline: 'none',
  p: '$1',
  transform: 'translateY($space$2)'
})
