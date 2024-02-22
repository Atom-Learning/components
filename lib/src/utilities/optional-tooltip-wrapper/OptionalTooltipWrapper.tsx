import * as React from 'react'

import { Tooltip } from '~/components/tooltip'

export type TOptionalTooltipWrapperProps = {
  hasTooltip?: boolean
  label?: React.ReactNode
  tooltipSide?: React.ComponentProps<typeof Tooltip.Content>['side']
}

export const OptionalTooltipWrapper = ({
  hasTooltip,
  label,
  tooltipSide,
  children
}: React.PropsWithChildren<TOptionalTooltipWrapperProps>) => {
  if (hasTooltip) {
    return (
      <Tooltip>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Content side={tooltipSide}>{label}</Tooltip.Content>
      </Tooltip>
    )
  }

  // children could be multiple elements/components,
  // so we need a fragment here.
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

OptionalTooltipWrapper.displayName = 'OptionalTooltipWrapper'
