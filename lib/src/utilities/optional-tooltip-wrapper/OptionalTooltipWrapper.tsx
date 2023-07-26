import * as React from 'react'

import { Tooltip } from '~/components/tooltip'

export type TOptionalTooltipWrapperProps = {
  hasTooltip?: boolean
  label?: React.ReactNode
  tooltipSide?: 'bottom' | 'left' | 'right' | 'top'
}

export const OptionalTooltipWrapper: React.FC<TOptionalTooltipWrapperProps> = ({
  hasTooltip,
  label,
  tooltipSide,
  children
}) => {
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
