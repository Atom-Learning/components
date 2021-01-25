import { StitchesProps } from '@stitches/react'
import * as React from 'react'

import { styled } from '../../stitches'

const BaseInput = styled('input', {
  display: 'block',
  p: '$3',
  appearance: 'none',
  width: '100%',
  height: '50px',
  borderRadius: '$1',
  border: '1px solid $tonal500',
  boxShadow: 'none', // necessary to remove default iOS default styling
  fontSize: 'md', // necessary to prevent iOS zooming on focus
  fontFamily: 'sans',
  color: '$tonal900',
  transition: 'all 75ms ease-out',
  boxSizing: 'border-box',
  ':focus': {
    boxShadow: 'inset 0 0 0 1px $primary900',
    borderColor: '$primary900',
    outline: 'none'
  }
})

type InputProps = StitchesProps<typeof BaseInput>

export const Input = ({ type, ...props }: InputProps): React.ReactElement => {
  if (type === 'number')
    return (
      <BaseInput type="text" inputMode="numeric" pattern="[0-9]*" {...props} />
    )

  return <BaseInput type={type} {...props} />
}
