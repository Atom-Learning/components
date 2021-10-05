import { Trigger } from '@radix-ui/react-tooltip'
import * as React from 'react'

type TooltipTriggerProps = React.ComponentProps<typeof Trigger>

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  children,
  ...remainingProps
}) => <Trigger {...remainingProps}>{children}</Trigger>
