import * as React from 'react'

import { Button } from '../button'
import { DropdownMenu } from '../dropdown-menu'
import { Icon } from '../icon/Icon'

type BulkActionProps = {
  isMain?: boolean
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  text: string
} & React.ComponentProps<typeof DropdownMenu.Item & typeof Button>

export const BulkAction: React.FC<BulkActionProps> = ({
  isMain,
  icon,
  text,
  ...rest
}) => {
  const iconComponent = icon ? (
    <Icon is={icon} size="sm" css={{ mr: '$2' }} />
  ) : null
  const { css, ...otherProps } = rest
  return isMain ? (
    <Button
      appearance="outline"
      size="sm"
      aria-label={`Action_${text}`}
      css={{
        border: 'none',
        '@media (max-width: 640px)': {
          display: 'none'
        },
        ...css
      }}
      {...otherProps}
    >
      {iconComponent}
      {text}
    </Button>
  ) : (
    <DropdownMenu.Item {...rest}>
      {iconComponent}
      {text}
    </DropdownMenu.Item>
  )
}

BulkAction.displayName = 'BulkAction'
