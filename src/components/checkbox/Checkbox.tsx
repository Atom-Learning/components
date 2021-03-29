import { Ok } from '@atom-learning/icons'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../icon'

const StyledCheckbox = styled(RadixCheckbox.Root, {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$0',
  boxShadow: 'inset 0 0 0 2px $colors$secondary300',
  color: 'white',
  cursor: 'pointer',
  size: '20px',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 100ms ease-out',
  '&[data-state="unchecked"]:focus, &[data-state="unchecked"]:hover': {
    backgroundColor: '$tonal300',
    boxShadow: 'inset 0 0 0 2px $colors$secondary700',
    outline: 'none'
  },
  '&[data-state="checked"]': {
    backgroundColor: '$secondary300'
  },
  '&[data-state="checked"]:hover, &[data-state="unchecked"]:focus': {
    backgroundColor: '$secondary700',
    boxShadow: 'inset 0 0 0 2px $colors$secondary700',
    outline: 'none'
  },
  '&:focus-within': {
    outline: 'none'
  }
})

type CheckboxProps = React.ComponentPropsWithoutRef<typeof StyledCheckbox>

const CheckboxIcon = () => <Icon is={Ok} size="sm" />

export const Checkbox: React.FC<CheckboxProps> = (props) => (
  <StyledCheckbox {...props}>
    <RadixCheckbox.Indicator as={CheckboxIcon} />
  </StyledCheckbox>
)

Checkbox.displayName = 'Checkbox'
