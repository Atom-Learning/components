import { styled } from '@stitches/react'
import * as React from 'react'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { Tooltip } from '../tooltip'

const StyledSpan = styled('span', { zIndex: 1 })

const StyledStepperButton = styled(ActionIcon, {
  borderColor: '$tonal400 !important',
  zIndex: 1,
  '&:hover': {
    bg: '$tonal50',
    svg: {
      color: '$tonal400'
    }
  },
  '&:active': {
    bg: '$tonal100',
    svg: {
      color: '$tonal500'
    }
  },
  '&:disabled': {
    opacity: 0.3,
    pointerEvents: 'none'
  }
})

interface NumberInputStepperProps
  extends Omit<React.ComponentProps<typeof ActionIcon>, 'children' | 'label'> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  showTooltip?: boolean
  disabledTooltipContent?: string
}

export const NumberInputStepper: React.ForwardRefExoticComponent<NumberInputStepperProps> =
  React.forwardRef((props, forwardedRef) => {
    const { icon, disabledTooltipContent, showTooltip, disabled, ...rest } =
      props

    return (
      <Tooltip>
        <Tooltip.Trigger asChild>
          <StyledSpan aria-hidden>
            <StyledStepperButton
              tabIndex={-1}
              appearance="outline"
              ref={forwardedRef}
              disabled={disabled}
              label=""
              {...rest}
            >
              <Icon is={icon} css={{ color: '$tonal300' }} />
            </StyledStepperButton>
          </StyledSpan>
        </Tooltip.Trigger>
        {showTooltip && (
          <Tooltip.Content>{disabledTooltipContent}</Tooltip.Content>
        )}
      </Tooltip>
    )
  })
