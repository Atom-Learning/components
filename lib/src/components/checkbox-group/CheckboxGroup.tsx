import * as React from 'react'
import {
  CheckboxGroupMountedProvider,
  CheckboxGroupCheckedProvider
} from './CheckboxGroup.context'
import type { CheckboxGroupItemValue } from './CheckboxGroup.types'
import { Box } from '../box'

import { CheckboxGroupItem } from './CheckboxGroupItem'
import { CheckboxGroupAllItem } from './CheckboxGroupAllItem'
import { CheckboxGroupSub } from './CheckboxGroupSub'

type CheckboxGroupRootProps = React.ComponentProps<typeof Box> & {
  checked?: CheckboxGroupItemValue[]
  onCheckedChange?: (checked: CheckboxGroupItemValue[]) => void
  defaultChecked?: CheckboxGroupItemValue[]
}

const CheckboxGroupRoot = ({
  checked,
  defaultChecked,
  onCheckedChange,
  ...rest
}: CheckboxGroupRootProps) => (
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

export const CheckboxGroup = Object.assign(CheckboxGroupRoot, {
  Item: CheckboxGroupItem,
  AllItem: CheckboxGroupAllItem,
  Sub: CheckboxGroupSub
})
