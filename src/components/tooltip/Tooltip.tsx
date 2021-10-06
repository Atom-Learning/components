import { Root, Trigger } from '@radix-ui/react-tooltip'
import * as React from 'react'

import { TooltipContent } from './TooltipContent'

type TooltipProps = React.ComponentProps<typeof Root>

export const Tooltip: React.FC<TooltipProps> & {
  Content: typeof TooltipContent
  Trigger: typeof Trigger
} = ({ children, delayDuration = 100, ...remainingProps }) => (
  <Root delayDuration={delayDuration} {...remainingProps}>
    {children}
  </Root>
)

Tooltip.Content = TooltipContent
Tooltip.Trigger = Trigger

Tooltip.displayName = 'Tooltip'
