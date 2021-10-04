import { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu'
import React from 'react'

import { styled } from '~/stitches'

import { DropdownMenuContent } from './DropdownMenuContent'
import { DropdownMenuItem } from './DropdownMenuItem'
import { DropdownMenuSeparator } from './DropdownMenuSeparator'
import { DropdownMenuTrigger } from './DropdownMenuTrigger'

const Root = styled(DropdownMenuRoot, {})

export const DropdownMenu: React.FC<React.ComponentProps<typeof Root>> & {

  Content: typeof DropdownMenuContent
  Item: typeof DropdownMenuItem

  Separator: typeof DropdownMenuSeparator
  Trigger: typeof DropdownMenuTrigger
} = (props) => <Root {...props} />

DropdownMenu.Content = DropdownMenuContent
DropdownMenu.Item = DropdownMenuItem
DropdownMenu.Separator = DropdownMenuSeparator
DropdownMenu.Trigger = DropdownMenuTrigger
