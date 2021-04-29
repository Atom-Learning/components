import { ComboboxInput as BaseComboboxInput } from '@reach/combobox'

import { styled } from '~/stitches'
import { encodeBackgroundIcon } from '~/utilities'

export const ComboboxInput = styled(BaseComboboxInput, {
  appearance: 'none',
  backgroundImage: encodeBackgroundIcon('hsl(208,85%,38%)', 'chevron'),
  backgroundPosition: 'right $space$3 top 50%, 0 0',
  backgroundRepeat: 'no-repeat, repeat',
  backgroundSize: '$sizes$2 auto, 100%',
  border: '1px solid $tonal500',
  borderRadius: '$0',
  boxShadow: 'none', // prevent default iOS default styling
  boxSizing: 'border-box',
  color: '$tonal900',
  cursor: 'text',
  display: 'block',
  fontFamily: '$sans',
  fontSize: '$md', // prevent iOS zooming on focus
  height: '$4',
  p: '$3',
  width: '100%',
  transition: 'all 100ms ease-out',
  '&:focus-within': {
    borderColor: '$primary900',
    boxShadow: 'inset 0 0 0 1px $colors$primary900',
    outline: 'none'
  },
  '&[disabled]': {
    backgroundColor: '$tonal300',
    color: '$tonal700',
    cursor: 'not-allowed'
  },
  variants: {
    state: {
      error: {
        border: '1px solid $danger'
      }
    }
  }
})
