import { ComboboxPopover as BaseComboboxPopover } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxPopover = styled(BaseComboboxPopover, {
  '&[data-reach-combobox-popover]': {
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
    position: 'relative !important'
  }
})
