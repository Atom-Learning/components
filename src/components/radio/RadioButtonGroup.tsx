import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

export const RadioButtonGroup: React.FC = ({ children }) => (
  <RadioGroup.Root>{children}</RadioGroup.Root>
)

RadioButtonGroup.displayName = 'RadioButtonGroup'
