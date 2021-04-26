import {
  Combobox as BaseCombobox,
  ComboboxInput as BaseComboboxInput,
  ComboboxList as BaseComboboxList,
  ComboboxOption as BaseComboboxOption,
  ComboboxOptionText as BaseComboboxOptionText,
  ComboboxPopover as BaseComboboxPopover,
  useComboboxContext
} from '@reach/combobox'
import { useEffect } from 'react'
import * as React from 'react'

import { keyframes, styled } from '~/stitches'
import { encodeBackgroundIcon } from '~/utilities'

const slideDown = keyframes({
  '0%': { transform: 'scaleY(0)' },
  '100%': { transform: 'scaleY(1)' }
})

const StyledCombobox = styled(BaseCombobox, {
  '--reach-combobox': 1
})
const StyledComboboxInput = styled(BaseComboboxInput, {
  '&[data-reach-combobox-input]': {
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
    },
    '&[data-state="suggesting"]': {
      borderBottomLeftRadius: 'unset',
      borderBottomRightRadius: 'unset',
      borderBottom: 'none'
    },
    '&[data-state="navigating"]': {
      borderBottomLeftRadius: 'unset',
      borderBottomRightRadius: 'unset',
      borderBottomColor: 'none'
    }
  }
})

const StyledComboboxPopover = styled(BaseComboboxPopover, {
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

const StyledComboboxList = styled(BaseComboboxList, {
  '&[data-reach-combobox-list]': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    userSelect: 'none'
  }
})

const StyledComboboxOption = styled(BaseComboboxOption, {
  '&[data-reach-combobox-option]': {
    cursor: 'pointer',
    margin: 0,
    padding: '$2',

    '&[aria-selected="true"]': {
      background: 'hsl(211, 10%, 95%)',
      '&:hover': {
        background: 'hsl(211, 10%, 90%)'
      }
    },
    '&:hover': {
      background: 'hsl(211, 10%, 92%)'
    },

    '[data-user-value]': {
      fontWeight: 'bold'
    }
  }
})

type ComboboxProps = React.ComponentProps<typeof StyledCombobox> & {
  persistSelection?: boolean
}

export const Combobox: React.FC<ComboboxProps> & {
  Option: typeof StyledComboboxOption
} = ({ children, persistSelection, ...props }) => {
  return (
    <StyledCombobox {...props}>
      <StyledComboboxInput />
      <StyledComboboxPopover>
        <StyledComboboxList persistSelection={persistSelection}>
          {children}
        </StyledComboboxList>
      </StyledComboboxPopover>
    </StyledCombobox>
  )
}

Combobox.displayName = 'Combobox'
Combobox.Option = StyledComboboxOption
