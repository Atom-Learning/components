import { Root } from '@radix-ui/react-tooltip'
import * as React from 'react'

import { TooltipContent } from './TooltipContent'
import { TooltipTrigger } from './TooltipTrigger'

type TooltipProps = React.ComponentProps<typeof Root>

export const Tooltip: React.FC<TooltipProps> & {
  Content: typeof TooltipContent
  Trigger: typeof TooltipTrigger
} = ({ delayDuration = 100, children, ...props }) => (
  <Root delayDuration={delayDuration} {...props}>
    {children}
  </Root>
)

Tooltip.Content = TooltipContent
Tooltip.Trigger = TooltipTrigger

Tooltip.displayName = 'Tooltip'
