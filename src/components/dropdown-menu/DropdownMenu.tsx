import { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu'
import React from 'react'

import { styled } from '~/stitches'

import { DropdownMenuArrow } from './DropdownMenuArrow'
import { DropdownMenuCheckboxItem } from './DropdownMenuCheckboxItem'
import { DropdownMenuContent } from './DropdownMenuContent'
import { DropdownMenuGroup } from './DropdownMenuGroup'
import { DropdownMenuItem } from './DropdownMenuItem'
import { DropdownMenuRadioGroup } from './DropdownMenuRadioGroup'
import { DropdownMenuRadioItem } from './DropdownMenuRadioItem'
import { DropdownMenuSeparator } from './DropdownMenuSeparator'
import { DropdownMenuTrigger } from './DropdownMenuTrigger'
import { DropdownMenuTriggerItem } from './DropdownMenuTriggerItem'

const Root = styled(DropdownMenuRoot, {})

export const DropdownMenu: React.FC<React.ComponentProps<typeof Root>> & {
  Arrow: typeof DropdownMenuArrow
  CheckboxItem: typeof DropdownMenuCheckboxItem
  Content: typeof DropdownMenuContent
  Group: typeof DropdownMenuGroup
  Item: typeof DropdownMenuItem
  RadioGroup: typeof DropdownMenuRadioGroup
  RadioItem: typeof DropdownMenuRadioItem
  Separator: typeof DropdownMenuSeparator
  Trigger: typeof DropdownMenuTrigger
  TriggerItem: typeof DropdownMenuTriggerItem
} = (props) => <Root {...props} />

DropdownMenu.Arrow = DropdownMenuArrow
DropdownMenu.CheckboxItem = DropdownMenuCheckboxItem
DropdownMenu.Content = DropdownMenuContent
DropdownMenu.Group = DropdownMenuGroup
DropdownMenu.Item = DropdownMenuItem
DropdownMenu.RadioGroup = DropdownMenuRadioGroup
DropdownMenu.RadioItem = DropdownMenuRadioItem
DropdownMenu.Separator = DropdownMenuSeparator
DropdownMenu.Trigger = DropdownMenuTrigger
DropdownMenu.TriggerItem = DropdownMenuTriggerItem
