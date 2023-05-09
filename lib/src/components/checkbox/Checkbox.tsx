import { Minus, Ok } from '@atom-learning/icons'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../icon'

const StyledIndicator = styled(RadixCheckbox.Indicator, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)'
})

const StyledCheckbox = styled(RadixCheckbox.Root, {
  appearance: 'none',
  position: 'relative',
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
      <StyledIndicator asChild>
        <Icon
          is={props.checked === 'indeterminate' ? Minus : Ok}
          css={{
            strokeWidth: '3',
            size: 14
          }}
        />
      </StyledIndicator>
    </StyledCheckbox>
  )
)

Checkbox.displayName = 'Checkbox'
