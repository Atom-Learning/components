import { Root } from '@radix-ui/react-popover'
import * as React from 'react'

import { styled } from '~/stitches'

import { PopoverContent } from './PopoverContent'
import { PopoverTrigger } from './PopoverTrigger'

const StyledRoot = styled(Root, {})

type PopoverProps = React.ComponentProps<typeof StyledRoot>

export const Popover: React.FC<PopoverProps> & {
  Trigger: typeof PopoverTrigger
  Content: typeof PopoverContent
} = (props) => <Root {...props} />

Popover.Content = PopoverContent
Popover.Trigger = PopoverTrigger

Popover.displayName = 'Popover'
