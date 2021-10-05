import { Ok } from '@atom-learning/icons'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../icon'

const StyledCheckbox = styled(RadixCheckbox.Root, {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: '1px solid $colors$tonal500',
  borderRadius: '3px',
  color: 'white',
  cursor: 'pointer',
  size: '$1',
  p: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 50ms ease-out',
  '&[data-state="unchecked"]:focus, &[data-state="unchecked"]:hover': {
    outline: 'none'
  },
  '&[data-state="checked"]': {
    backgroundColor: '$primary',
    borderColor: '$primary'
  },
  '&[data-state="checked"]:hover, &[data-state="unchecked"]:focus': {
    borderColor: '$primary',
    outline: 'none'
  },
  '&[disabled]': {
    backgroundColor: '$tonal200',
    borderColor: '$tonal400',
    cursor: 'not-allowed'
  },
  '&:focus-within': {
    outline: 'none'
  }
})

type CheckboxProps = React.ComponentProps<typeof StyledCheckbox>

export const Checkbox: React.FC<CheckboxProps> = React.forwardRef(
  (props, ref) => (
    <StyledCheckbox {...props} ref={ref}>
      <RadixCheckbox.Indicator>
        <Icon
          is={Ok}
          size="xs"
          css={{
            left: '2px',
            pointerEvents: 'none',
            position: 'absolute',
            strokeWidth: '3',
            top: '2px'
          }}
        />
      </RadixCheckbox.Indicator>
    </StyledCheckbox>
  )
)

Checkbox.displayName = 'Checkbox'
