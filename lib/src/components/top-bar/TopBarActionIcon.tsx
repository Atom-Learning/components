import React from 'react'

import { styled } from '~/stitches'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'

const StyledActionIcon = styled(ActionIcon, {
  borderRadius: '$0',
  '&[data-state="open"]': {
    background: '$primaryLight'
  },
  '&:hover': {
    background: '$primaryLight'
  },
  '& > svg': { color: '$tonal400' }
})

type TopBarActionIconProps = Omit<
  React.ComponentProps<typeof StyledActionIcon>,
  'size' | 'children'
> & { icon: React.FC<React.SVGProps<SVGSVGElement>>; label: string }

export const TopBarActionIcon: React.ForwardRefExoticComponent<TopBarActionIconProps> =
  React.forwardRef(({ icon, ...rest }, forwardedRef) => {
    return (
      <StyledActionIcon size="md" ref={forwardedRef} {...rest}>
        <Icon is={icon} />
      </StyledActionIcon>
    )
  })
