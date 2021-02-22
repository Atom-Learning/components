import * as RadixTooltip from '@radix-ui/react-tooltip'
import * as React from 'react'

export const Tooltip = ({ children, content }) => {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Content>
        {content}
        <RadixTooltip.Arrow />
      </RadixTooltip.Content>
    </RadixTooltip.Root>
  )
}
