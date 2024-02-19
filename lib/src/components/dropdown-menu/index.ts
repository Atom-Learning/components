import { Portal, Group } from '@radix-ui/react-dropdown-menu'
import { DropdownMenu as DropdownMenuRoot } from './DropdownMenu'
import { DropdownMenuTrigger } from './DropdownMenuTrigger'
import { DropdownMenuTriggerIcon } from './DropdownMenuTriggerIcon'
import { DropdownMenuContent } from './DropdownMenuContent'
import { DropdownMenuItem } from './DropdownMenuItem'
import { JustItem } from './JustItem'
import { DropdownMenuItemShortcut } from './DropdownMenuItemShortcut'
import { DropdownMenuItemIcon } from './DropdownMenuItemIcon'
import { DropdownMenuItemIndicator } from './DropdownMenuItemIndicator'
import { DropdownMenuLinkItem } from './DropdownMenuLinkItem'
import { DropdownMenuButtonItem } from './DropdownMenuButtonItem'
import { DropdownMenuLabel } from './DropdownMenuLabel'
// import {
//   DropdownMenuCheckboxItem,
//   DropdownMenuCheckboxItemIndicator
// } from './dropdown-menu-select-group/DropdownMenuCheckboxItem'
import { DropdownMenuCheckboxItem } from './DropdownMenuCheckboxItem'
import { DropdownMenuCheckboxCheckboxItem } from './DropdownMenuCheckboxCheckboxItem'
import { DropdownMenuSeparator } from './DropdownMenuSeparator'
import { DropdownMenuRadioGroup } from './DropdownMenuRadioGroup'
import { DropdownMenuRadioItem } from './DropdownMenuRadioItem'
import { DropdownMenuTypeaheadTrigger } from './DropdownMenuTypeaheadTrigger'
import { DropdownMenuGroup } from './DropdownMenuGroup'
import { DropdownMenuChipDismissibleGroup } from './DropdownMenuChipDismissibleGroup'

type TDropdownMenu = typeof DropdownMenuRoot & {
  Trigger: typeof DropdownMenuTrigger
  TypeaheadTrigger: typeof DropdownMenuTypeaheadTrigger
  TriggerIcon: typeof DropdownMenuTriggerIcon
  Content: typeof DropdownMenuContent
  Item: typeof DropdownMenuItem
  ItemIcon: typeof DropdownMenuItemIcon
  LinkItem: typeof DropdownMenuLinkItem
  Label: typeof DropdownMenuLabel
  Portal: typeof Portal
  Separator: typeof DropdownMenuSeparator
  Group: typeof Group
  CheckboxItem: typeof DropdownMenuCheckboxItem
}

export const DropdownMenu = DropdownMenuRoot as TDropdownMenu
DropdownMenu.Group = DropdownMenuGroup
DropdownMenu.Trigger = DropdownMenuTrigger
DropdownMenu.TriggerIcon = DropdownMenuTriggerIcon
DropdownMenu.Content = DropdownMenuContent
DropdownMenu.JustItem = JustItem
DropdownMenu.ItemShortcut = DropdownMenuItemShortcut
DropdownMenu.ItemIcon = DropdownMenuItemIcon
DropdownMenu.LinkItem = DropdownMenuLinkItem
DropdownMenu.ButtonItem = DropdownMenuButtonItem
DropdownMenu.CheckboxItem = DropdownMenuCheckboxItem
DropdownMenu.CheckboxCheckboxItem = DropdownMenuCheckboxCheckboxItem
DropdownMenu.RadioGroup = DropdownMenuRadioGroup
DropdownMenu.RadioItem = DropdownMenuRadioItem
DropdownMenu.Item = DropdownMenuItem
DropdownMenu.ItemIndicator = DropdownMenuItemIndicator
// DropdownMenu.ButtonItem = DropdownMenuButtonItem
DropdownMenu.Label = DropdownMenuLabel
DropdownMenu.Portal = Portal
DropdownMenu.Separator = DropdownMenuSeparator
DropdownMenu.Group = Group
DropdownMenu.TypeaheadTrigger = DropdownMenuTypeaheadTrigger
DropdownMenu.ChipDismissibleGroup = DropdownMenuChipDismissibleGroup
DropdownMenu.displayName = 'DropdownMenu'
