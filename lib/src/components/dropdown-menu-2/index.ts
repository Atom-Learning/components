import { Menu } from '../menu'
import { Portal } from '@radix-ui/react-dropdown-menu'
import { DropdownMenu as DropdownMenuRoot } from './DropdownMenu'
import { DropdownMenuButton } from './DropdownMenuButton'
import { DropdownMenuContent } from './DropdownMenuContent'
import { DropdownMenuDivider } from './DropdownMenuDivider'
import { DropdownMenuGroup } from './DropdownMenuGroup'
import { DropdownMenuLabel } from './DropdownMenuLabel'
import { DropdownMenuLink } from './DropdownMenuLink'
import { DropdownMenuTrigger } from './DropdownMenuTrigger'
import { DropdownMenuTriggerIcon } from './DropdownMenuTriggerIcon'
import { DropdownMenuTypeaheadTrigger } from './DropdownMenuTypeaheadTrigger'


export const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Trigger: DropdownMenuTrigger,
  TypeaheadTrigger: DropdownMenuTypeaheadTrigger,
  TriggerIcon: DropdownMenuTriggerIcon,
  Content: DropdownMenuContent,
  ItemRightSlot: Menu.ItemRightSlot,
  Button: DropdownMenuButton,
  Group: DropdownMenuGroup,
  Label: DropdownMenuLabel,
  Link: DropdownMenuLink,
  Divider: DropdownMenuDivider,
  Icon: Menu.Icon,
  Text: Menu.Text,
  Portal
})
