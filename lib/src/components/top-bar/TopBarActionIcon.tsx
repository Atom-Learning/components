import React from 'react'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'

type TopBarActionIconProps = Omit<
  React.ComponentProps<typeof ActionIcon>,
  'size' | 'children'
> & { icon: React.FC<React.SVGProps<SVGSVGElement>>; label: string }

export const TopBarActionIcon: React.ForwardRefExoticComponent<TopBarActionIconProps> =
  React.forwardRef(({ icon, ...rest }, forwardedRef) => {
    return (
      <ActionIcon
        size="md"
        appearance="simple"
        theme="neutral"
        ref={forwardedRef}
        {...rest}
      >
        <Icon is={icon} />
      </ActionIcon>
    )
  })
