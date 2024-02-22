import { Portal, Root, Trigger } from '@radix-ui/react-popover'
import * as React from 'react'

import { styled } from '~/stitches'

import { PopoverContent } from './PopoverContent'

const StyledRoot = styled(Root, {})

export const Popover = Object.assign(StyledRoot, {
  Content: PopoverContent,
  Portal: Portal,
  Trigger: Trigger
})

StyledRoot.displayName = 'Popover'
