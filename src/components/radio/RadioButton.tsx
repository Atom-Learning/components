import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

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
  '[disabled] + &': {
    backgroundColor: '$tonal600',
    border: '2px solid $tonal600'
  }
})

const StyledIndicator = styled(RadioGroup.Indicator, {
  width: 8, // TODO replace once theme is updated
  height: 8,
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
