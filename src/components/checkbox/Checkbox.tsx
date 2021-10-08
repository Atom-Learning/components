import { Minus, Ok } from '@atom-learning/icons'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../icon'

const StyledIndicator = styled(RadixCheckbox.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const StyledCheckbox = styled(RadixCheckbox.Root, {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: '1px solid $colors$tonal400',
  borderRadius: '3px',
  color: 'white',
  cursor: 'pointer',
  size: '$1',
  p: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 50ms ease-out',
  '&[data-state="checked"]': {
    backgroundColor: '$primary',
    borderColor: '$primary'
  },
  '&[data-state="indeterminate"]': {
    backgroundColor: '$primary',
    borderColor: '$primary'
  },
  '&:focus': {
    outline: '2px solid $primary',
    outlineOffset: '1px'
  },
  '&[disabled]': {
    backgroundColor: '$tonal100',
    borderColor: '$tonal400',
    cursor: 'not-allowed',
    color: '$tonal400'
  },
  variants: {
    state: {
      error: {
        borderColor: '$danger'
      }
    }
  }
})

type CheckboxProps = React.ComponentProps<typeof StyledCheckbox>

export const Checkbox: React.FC<CheckboxProps> = React.forwardRef(
  (props, ref) => (
    <StyledCheckbox {...props} ref={ref}>
      <StyledIndicator>
        <Icon
          is={props.checked === 'indeterminate' ? Minus : Ok}
          size="sm"
          css={{
            pointerEvents: 'none',
            position: 'absolute',
            strokeWidth: '3'
          }}
        />
      </StyledIndicator>
    </StyledCheckbox>
  )
)

Checkbox.displayName = 'Checkbox'
