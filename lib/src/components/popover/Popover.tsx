import { Root, Portal, Trigger } from '@radix-ui/react-popover'
import * as React from 'react'

import { styled } from '~/stitches'
import { ToastProvider } from '../toast'

import { PopoverContent } from './PopoverContent'

const StyledRoot = styled(Root, {})

type PopoverProps = React.ComponentProps<typeof StyledRoot>

export const Popover: React.FC<PopoverProps> & {
  Trigger: typeof Trigger
  Content: typeof PopoverContent
  Portal: typeof Portal
} = (props) => <Root {...props} />

Popover.Content = PopoverContent
Popover.Portal = Portal
Popover.Trigger = Trigger

Popover.displayName = 'Popover'
