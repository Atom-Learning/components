import * as React from 'react'
import {
  CheckboxGroupMountedProvider,
  CheckboxGroupCheckedProvider
} from './CheckboxGroup.context'
import { Box } from '../box'

type CheckboxGroupRootProps = React.ComponentProps<typeof Box> & {
  checked?: React.ReactText[]
  defaultChecked?: React.ReactText[]
  onCheckedChange?: (checked: React.ReactText[]) => void
}

export const CheckboxGroupRoot = ({
  checked,
  defaultChecked,
  onCheckedChange,
  ...rest
}: CheckboxGroupRootProps): JSX.Element => (
  <CheckboxGroupCheckedProvider
    checked={checked}
    defaultChecked={defaultChecked}
    onCheckedChange={onCheckedChange}
  >
    <CheckboxGroupMountedProvider>
      <Box {...rest} />
    </CheckboxGroupMountedProvider>
  </CheckboxGroupCheckedProvider>
)
