import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

import { styled } from '../../stitches'

const StyledRadioButtonGroup = styled(RadioGroup.Root, {})

type RadioButtonGroupProps = React.ComponentPropsWithoutRef<
  typeof StyledRadioButtonGroup
>

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = (props) => (
  <StyledRadioButtonGroup {...props} />
)

RadioButtonGroup.displayName = 'RadioButtonGroup'
