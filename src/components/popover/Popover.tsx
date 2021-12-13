import { Root, Trigger } from '@radix-ui/react-popover'
import * as React from 'react'

import { styled } from '~/stitches'

import { PopoverContent } from './PopoverContent'

const StyledRoot = styled(Root, {})

type PopoverProps = React.ComponentProps<typeof StyledRoot>

export const Popover: React.FC<PopoverProps> & {
  Trigger: typeof Trigger
  Content: typeof PopoverContent
} = (props) => <Root {...props} />

Popover.Content = PopoverContent
Popover.Trigger = Trigger

Popover.displayName = 'Popover'
