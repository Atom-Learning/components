import { ComboboxPopover as BaseComboboxPopover } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxPopover = styled(BaseComboboxPopover, {
  borderRadius: '$0',
  boxShadow: '$0',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: '$sans',
  fontSize: '$sm',
  p: '$2',
  border: 'solid 1px $tonal500',
  background: 'white',
  // top and position are set by @reach/ui and
  // override our styling without !important
  top: '$1 !important',
  // ... but !important causes a compilation error on position!
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  position: 'relative !important'
})
