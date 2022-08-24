import * as React from 'react'

import { Override } from '~/utilities'

import { Button } from '../button'
import { Icon } from '../icon/Icon'

type BulkActionProps = Override<
  React.ComponentProps<typeof Button>,
  {
    icon?: React.FC<React.SVGProps<SVGSVGElement>>
    text: string
    children?: React.ReactNode
  }
>

export const BulkAction: React.FC<BulkActionProps> = ({
  icon,
  text,
  ...rest
}) => {
  const iconComponent = icon ? (
    <Icon is={icon} size="sm" css={{ mr: '$2' }} />
  ) : null
  const { css, ...otherProps } = rest
  return (
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
  )
}

BulkAction.displayName = 'BulkAction'
