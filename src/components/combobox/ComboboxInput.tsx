import { ComboboxInput as BaseComboboxInput } from '@reach/combobox'

import { styled, theme } from '~/stitches'
import { encodeBackgroundIcon } from '~/utilities'

export const ComboboxInput = styled(BaseComboboxInput, {
  appearance: 'none',
  backgroundImage: encodeBackgroundIcon(theme.colors.primary.value, 'chevron'),
  backgroundPosition: 'right $space$3 top 50%, 0 0',
  backgroundRepeat: 'no-repeat, repeat',
  backgroundSize: '$sizes$2 auto, 100%',
  border: '1px solid $tonal400',
  borderRadius: '$0',
  boxShadow: 'none', // prevent default iOS default styling
  boxSizing: 'border-box',
  color: '$tonal900',
  cursor: 'text',
  display: 'block',
  fontFamily: '$body',
  fontSize: '$md', // prevent iOS zooming on focus
  height: '$4',
  p: '$3',
  width: '100%',
  transition: 'all 100ms ease-out',
  '&:focus-within': {
    borderColor: '$primary',
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
