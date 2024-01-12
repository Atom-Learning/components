import { ComboboxInput as BaseComboboxInput } from '@reach/combobox'
import * as React from 'react'

import { styled, theme } from '~/stitches'
import { encodeBackgroundIcon } from '~/utilities'
import { Override } from '~/utilities/types'

export const StyledComboboxInput = styled(BaseComboboxInput, {
  boxShadow: 'none', // prevent default iOS default styling
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
  pr: '$6',
  transition: 'all 100ms ease-out',
  width: '100%',
  '&::placeholder': {
    color: '$tonal300',
    opacity: 1
  },
  '&:focus-within': {
    borderColor: '$primary800',
    outline: 'none'
  },
  '&[disabled]': {
    backgroundColor: '$tonal100',
    color: '$tonal400',
    cursor: 'not-allowed'
  },
  variants: {
    size: {
      sm: {
        height: '$3',
        fontSize: '$sm',
        lineHeight: 1.7
      },
      md: {
        height: '$4',
        fontSize: '$md',
        lineHeight: 2
      },
      lg: {
        height: '$5',
        fontSize: '$md',
        lineHeight: 2
      }
    },
    state: {
      error: {
        border: '1px solid $danger'
      }
    }
  }
})

export type ComboboxInputProps = React.ComponentProps<
  typeof StyledComboboxInput
>

export const ComboboxInput: React.FC<ComboboxInputProps> = React.forwardRef(
  ({ size = 'md', ...rest }, ref) => {
    return <StyledComboboxInput size={size} {...rest} ref={ref} />
  }
)
