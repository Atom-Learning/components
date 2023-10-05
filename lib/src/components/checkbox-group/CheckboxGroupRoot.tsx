import * as React from 'react'

import { CheckboxGroupProvider } from './CheckboxGroup.context'


type TCheckboxGroupRootProps = {
  checked?: React.ReactText[],
  defaultChecked?: React.ReactText[],
  onCheckedChange?: (checked: React.ReactText[]) => void,
  children: React.ReactNode
}

export const CheckboxGroupRoot = ({ checked, defaultChecked, onCheckedChange, ...rest }: TCheckboxGroupRootProps): JSX.Element => (
  <CheckboxGroupProvider checked={checked} defaultChecked={defaultChecked} onCheckedChange={onCheckedChange} {...rest} />
)
