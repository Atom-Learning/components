import { ComboboxPopover as BaseComboboxPopover } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxPopover = styled(BaseComboboxPopover, {
  bg: 'white',
  border: 'solid 1px $tonal400',
  borderRadius: '$0',
  boxShadow: '$0',
  boxSizing: 'border-box',
  fontFamily: '$body',
  fontSize: '$md',
  outline: 'none',
  p: '$1',
  transform: 'translateY($space$2)'
})
