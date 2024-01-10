import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../box'
import {
  CheckboxGroupCheckedProvider,
  CheckboxGroupMountedProvider
} from './CheckboxGroup.context'
import type { CheckboxGroupItemValue } from './CheckboxGroup.types'
import { CheckboxGroupAllItem } from './CheckboxGroupAllItem'
import { CheckboxGroupItem } from './CheckboxGroupItem'
import { CheckboxGroupSub } from './CheckboxGroupSub'

type CheckboxGroupRootProps = Omit<
  React.ComponentProps<typeof Box>,
  'defaultChecked'
> & {
  checked?: CheckboxGroupItemValue[]
  onCheckedChange?: (checked: CheckboxGroupItemValue[]) => void
  defaultChecked?: CheckboxGroupItemValue[]
  asChild?: boolean
}

const StyledSlot = styled(Slot)

const CheckboxGroupRoot = ({
  checked,
  defaultChecked,
  onCheckedChange,
  asChild = false,
  ...rest
}: CheckboxGroupRootProps) => {
  const Component = asChild ? StyledSlot : Box

  return (
    <CheckboxGroupCheckedProvider
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
    >
      <CheckboxGroupMountedProvider>
        <Component {...rest} />
      </CheckboxGroupMountedProvider>
    </CheckboxGroupCheckedProvider>
  )
}

export const CheckboxGroup = Object.assign(CheckboxGroupRoot, {
  Item: CheckboxGroupItem,
  AllItem: CheckboxGroupAllItem,
  Sub: CheckboxGroupSub
})
