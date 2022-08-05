import { ComboboxInput as BaseComboboxInput } from '@reach/combobox'

import { styled, theme } from '~/stitches'
import { encodeBackgroundIcon } from '~/utilities'

export const ComboboxInput = styled(BaseComboboxInput, {
  boxShadow: 'none', // prevent default iOS default styling
  fontSize: '$md', // prevent iOS zooming on focus
  appearance: 'none',
  backgroundImage: encodeBackgroundIcon(theme.colors.tonal300.value, 'chevron'),
  backgroundPosition: 'right $space$3 top 50%, 0 0',
  backgroundRepeat: 'no-repeat, repeat',
  backgroundSize: '20px auto, 100%',
  border: '1px solid $tonal300',
  borderRadius: '$0',
  boxSizing: 'border-box',
  color: '$tonal600',
  cursor: 'text',
  display: 'block',
  fontFamily: '$body',
  height: '$4',
  pl: '$3',
  pr: '$7',
  transition: 'all 100ms ease-out',
  width: '100%',
  '&::placeholder': {
    color: '$tonal300',
    opacity: 1
  },
  '&:focus-within': {
    borderColor: '$primary',
    outline: 'none'
  },
  '&[disabled]': {
    backgroundColor: '$tonal100',
    color: '$tonal400',
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
