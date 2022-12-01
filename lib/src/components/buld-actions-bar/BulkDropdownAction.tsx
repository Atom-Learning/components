import * as React from 'react'

import { DropdownMenu } from '../dropdown-menu'
import { Icon } from '../icon/Icon'

type BulkActionProps = {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  text: string
} & React.ComponentProps<typeof DropdownMenu.Item>

export const BulkDropdownAction: React.FC<BulkActionProps> = ({
  icon,
  text,
  ...rest
}) => {
  const iconComponent = icon ? (
    <Icon is={icon} size="sm" css={{ mr: '$2' }} />
  ) : null
  return (
    <DropdownMenu.Item {...rest}>
      {iconComponent}
      {text}
    </DropdownMenu.Item>
  )
}

BulkDropdownAction.displayName = 'BulkDropdownAction'
