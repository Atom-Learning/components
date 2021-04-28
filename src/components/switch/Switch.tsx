import * as RadixSwitch from '@radix-ui/react-switch'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledSwitch = styled(RadixSwitch.Root, {
  appearance: 'none',
  backgroundColor: '$tonal400',
  border: 'none',
  padding: '$0',
  boxShadow: 'inset 0 0 0 1px $tonal400',
  overflow: 'hidden',
  borderRadius: '$round',
  cursor: 'pointer',
  display: 'inline-flex',
  width: '$4',
  position: 'relative',
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 2px $colors$secondary700'
  },
  '&[data-state="checked"]': {
    backgroundColor: '$success'
  }
})

const StyledThumb = styled(RadixSwitch.Thumb, {
  display: 'block',
  width: '$1',
  height: '$1',
  backgroundColor: 'white',
  borderRadius: '$round',
  transition: 'transform 100ms',
  transform: 'translateX(1px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(27px)'
  }
})

type SwitchProps = React.ComponentProps<typeof StyledSwitch> & {
  'aria-label'?: string
}

export const Switch: React.FC<SwitchProps> = (props) => (
  <StyledSwitch {...props}>
    <StyledThumb />
  </StyledSwitch>
)

Switch.displayName = 'Switch'
