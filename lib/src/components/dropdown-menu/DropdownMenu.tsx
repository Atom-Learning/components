import { Portal, Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu'
import React from 'react'

import { styled } from '~/stitches'

import { DropdownMenuContent } from './DropdownMenuContent'
import { DropdownMenuItem } from './DropdownMenuItem'
import { DropdownMenuLinkItem } from './DropdownMenuLinkItem'
import { DropdownMenuSeparator } from './DropdownMenuSeparator'
import { DropdownMenuTrigger } from './DropdownMenuTrigger'

const Root = styled(DropdownMenuRoot, {})

export const DropdownMenu = Object.assign(Root, {
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  LinkItem: DropdownMenuLinkItem,
  Portal: Portal,
  Separator: DropdownMenuSeparator,
  Trigger: DropdownMenuTrigger
})
