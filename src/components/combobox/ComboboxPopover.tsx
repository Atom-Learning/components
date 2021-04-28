import { ComboboxPopover as BaseComboboxPopover } from '@reach/combobox'

import { keyframes, styled } from '~/stitches'

const slideDown = keyframes({
  '0%': { transform: 'scaleY(0)' },
  '100%': { transform: 'scaleY(1)' }
})

export const ComboboxPopover = styled(BaseComboboxPopover, {
  '&[data-reach-combobox-popover]': {
    boxShadow: 'inset 0 0 0 1px $colors$primary900',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: '$sans',
    fontSize: '$sm', // prevent iOS zooming on focus
    p: '$2',
    border: 'solid 1px $primary900',
    borderTop: 'none',
    background: 'hsla(0, 100%, 100%, 0.99)',
    transformOrigin: 'top',
    animation: `${slideDown} 150ms ease-out`
  }
})
