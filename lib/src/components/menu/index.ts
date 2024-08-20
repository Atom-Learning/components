import { Menu as MenuRoot } from './Menu'
import { MenuButton } from './MenuButton'
import { MenuDivider } from './MenuDivider'
import { MenuGroup } from './MenuGroup'
import { MenuIcon } from './MenuIcon'
import { MenuItemContent } from './MenuItemContent'
import { MenuItemRightSlot } from './MenuItemRightSlot'
import { MenuLabel } from './MenuLabel'
import { MenuLink } from './MenuLink'
import { MenuText } from './MenuText'
import { MenuContent } from './MenuContent'


export const Menu = Object.assign(MenuRoot, {
  ItemContent: MenuItemContent,
  ItemRightSlot: MenuItemRightSlot,
  Button: MenuButton,
  Group: MenuGroup,
  Label: MenuLabel,
  Link: MenuLink,
  Divider: MenuDivider,
  Icon: MenuIcon,
  Text: MenuText,
  Content: MenuContent,
})
