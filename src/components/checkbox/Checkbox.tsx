import { Ok } from '@atom-learning/icons'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../icon'

const StyledCheckbox = styled(RadixCheckbox.Root, {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: '1px solid $colors$tonal600',
  borderRadius: '3px',
  color: 'white',
  cursor: 'pointer',
  size: '$1',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 50ms ease-out',
  '&[data-state="unchecked"]:focus, &[data-state="unchecked"]:hover': {
    outline: 'none'
  },
  '&[data-state="checked"]': {
    backgroundColor: '$primary'
  },
  '&[data-state="checked"]:hover, &[data-state="unchecked"]:focus': {
    borderColor: '$primary',
    outline: 'none'
  },
  '&:focus-within': {
    outline: 'none'
  }
})

type CheckboxProps = React.ComponentPropsWithoutRef<typeof StyledCheckbox>

const CheckboxIcon = () => <Icon is={Ok} size="xs" />

export const Checkbox: React.FC<CheckboxProps> = (props) => (
  <StyledCheckbox {...props}>
    <RadixCheckbox.Indicator as={CheckboxIcon} />
  </StyledCheckbox>
)

Checkbox.displayName = 'Checkbox'
