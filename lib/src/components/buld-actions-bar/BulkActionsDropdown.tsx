import { Ellypsis } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '../action-icon'
import { DropdownMenu } from '../dropdown-menu'
import { Icon } from '../icon/Icon'

type BulkActionsDropdownProps = {
  trigger?: React.ReactNode
} & React.ComponentProps<typeof DropdownMenu>

export const BulkActionsDropdown: React.FC<BulkActionsDropdownProps> = ({
  trigger,
  children,
  ...rest
}) => {
  const { css, ...otherProps } = rest
  return (
    <DropdownMenu {...otherProps}>
      <DropdownMenu.Trigger
        css={{
          '@media (max-width: 640px)': {
            display: 'none'
          },
          ...css
        }}
        asChild
      >
        {trigger || (
          <ActionIcon label="actions_dropdown">
            <Icon is={Ellypsis} />
          </ActionIcon>
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>{children}</DropdownMenu.Content>
    </DropdownMenu>
  )
}

BulkActionsDropdown.displayName = 'BulkActionsDropdown'
