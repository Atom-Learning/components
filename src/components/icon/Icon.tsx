import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

export const StyledIcon = styled('svg', {
  display: 'inline-block',
  fill: 'none',
  stroke: 'currentcolor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  verticalAlign: 'middle',
  variants: {
    size: {
      xs: { size: '$1', strokeWidth: '1.75' },
      sm: { size: '$2', strokeWidth: '1.75' },
      md: { size: '$3', strokeWidth: '2' },
      lg: { size: '$4', strokeWidth: '2' }
    },
    isInActionIcon: {
      true: {}
    }
  },
  compoundVariants: [
    {
      size: 'sm',
      isInActionIcon: true,
      css: { size: '$1' }
    },
    {
      size: 'md',
      isInActionIcon: true,
      css: { size: '$2' }
    },
    {
      size: 'lg',
      isInActionIcon: true,
      css: { size: '$3' }
    }
  ]
})

type IconProps = Override<
  React.ComponentProps<typeof StyledIcon>,
  {
    is: React.FC<React.SVGProps<SVGSVGElement>>
    as?: never
  }
>

export const Icon: React.FC<IconProps> = React.forwardRef(
  ({ is: SVG, size = 'sm', ...remainingProps }, ref) => (
    <StyledIcon
      size={size}
      aria-hidden="true"
      {...remainingProps}
      as={SVG}
      ref={ref}
    />
  )
)
