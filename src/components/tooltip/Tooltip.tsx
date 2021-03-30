import { Root } from '@radix-ui/react-tooltip'
import * as React from 'react'

import { TooltipContent } from './TooltipContent'
import { TooltipTrigger } from './TooltipTrigger'

type TooltipProps = React.ComponentProps<typeof Root>

export const Tooltip: React.FC<TooltipProps> & {
  Content: typeof TooltipContent
  Trigger: typeof TooltipTrigger
} = ({ children, delayDuration = 100, ...remainingProps }) => (
  <Root delayDuration={delayDuration} {...remainingProps}>
    {children}
  </Root>
)

Tooltip.Content = TooltipContent
Tooltip.Trigger = TooltipTrigger

Tooltip.displayName = 'Tooltip'
