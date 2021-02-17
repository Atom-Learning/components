import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

import { Override } from '~/utilities/types'

import { styled } from '../../stitches'

const StyledRadioButton = styled(RadioGroup.Item, {
  appearance: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  borderRadius: '50%',
  borderColor: '$secondary300',
  borderWidth: 2,
  borderStyle: 'solid',
  width: '$0',
  height: '$0',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  '&:focus': {
    outline: 'none'
  },
  ':checked + &': { backgroundColor: '$secondary300' },
  ':disabled + &': {
    backgroundColor: '$tonal600',
    border: '2px solid $tonal600'
  }
})

const StyledIndicator = styled(RadioGroup.Indicator, {
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: 'white'
})

type RadioButtonProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledRadioButton>,
  { as: never } & {
    'aria-label'?: string
  }
>

export const RadioButton: React.FC<RadioButtonProps> = (props) => (
  <StyledRadioButton {...props}>
    <StyledIndicator />
  </StyledRadioButton>
)

RadioButton.displayName = 'RadioButton'
