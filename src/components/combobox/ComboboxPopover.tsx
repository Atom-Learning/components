import { ComboboxPopover as BaseComboboxPopover } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxPopover = styled(BaseComboboxPopover, {
  bg: 'white',
  border: 'solid 1px $tonal500',
  borderRadius: '$0',
  boxShadow: '$0',
  boxSizing: 'border-box',
  fontFamily: '$sans',
  fontSize: '$sm',
  outline: 'none',
  p: '$2',

  // top and position are set by @reach/ui and
  // override our styling without !important
  // ... but !important causes a compilation error on position!
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  position: 'relative !important',
  top: '$1 !important'
})
