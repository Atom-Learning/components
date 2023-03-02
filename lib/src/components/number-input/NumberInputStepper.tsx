import * as React from 'react'

import { styled } from '~/stitches'

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
  svg: {
    color: '$tonal300'
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

type NumberInputStepperProps = Omit<
  React.ComponentProps<typeof ActionIcon>,
  'children'
> & {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  showTooltip?: boolean
  disabledTooltipContent?: string
}

export const NumberInputStepper: React.ForwardRefExoticComponent<NumberInputStepperProps> =
  React.forwardRef((props, forwardedRef) => {
    const { icon, disabledTooltipContent, showTooltip, ...rest } = props

    /**
     * Focus has been removed from the button
     * as the increment and decrement buttons should be keyboard accessible via arrow keys.
     * see MDN docs https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role
     */
    return (
      <Tooltip>
        <Tooltip.Trigger asChild>
          <StyledSpan tabIndex={-1}>
            <StyledStepperButton
              hasTooltip={false}
              tabIndex={-1}
              appearance="outline"
              ref={forwardedRef}
              {...rest}
            >
              <Icon is={icon} />
            </StyledStepperButton>
          </StyledSpan>
        </Tooltip.Trigger>
        {showTooltip && (
          <Tooltip.Content>{disabledTooltipContent}</Tooltip.Content>
        )}
      </Tooltip>
    )
  })
