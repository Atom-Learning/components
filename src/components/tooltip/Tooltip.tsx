import { Root, Trigger, Provider } from '@radix-ui/react-tooltip'
import * as React from 'react'

import { styled } from '~/stitches'

import { TooltipContent } from './TooltipContent'

type TooltipProps = React.ComponentProps<typeof Root>

export const Tooltip: React.FC<TooltipProps> & {
  Content: typeof TooltipContent
  Trigger: typeof Trigger
  Provider: typeof Provider
} = ({ children, delayDuration = 350, ...remainingProps }) => (
  <Root delayDuration={delayDuration} {...remainingProps}>
    {children}
  </Root>
)

Tooltip.Content = TooltipContent
Tooltip.Trigger = styled(Trigger, {})
Tooltip.Provider = Provider

Tooltip.displayName = 'Tooltip'
