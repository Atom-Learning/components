import { Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip'
import * as React from 'react'

import { styled } from '~/stitches'

import { TooltipContent } from './TooltipContent'

type TooltipProps = React.ComponentProps<typeof Root>

const TooltipComponent = ({
  children,
  delayDuration = 350,
  ...remainingProps
}: TooltipProps) => (
  <Root delayDuration={delayDuration} {...remainingProps}>
    {children}
  </Root>
)

export const Tooltip = Object.assign(TooltipComponent, {
  Content: TooltipContent,
  Trigger: styled(Trigger, {}),
  Portal: Portal,
  Provider: Provider
})

TooltipComponent.displayName = 'Tooltip'
