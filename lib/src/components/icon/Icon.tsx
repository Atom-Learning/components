import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

export const StyledIcon = styled('svg', {
  display: 'inline-block',
  fill: 'none',
  flexShrink: 0,
  stroke: 'currentcolor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  verticalAlign: 'middle',
  variants: {
    size: {
      sm: { size: '$1', strokeWidth: '1.5' },
      md: { size: '$2', strokeWidth: '1.75' },
      lg: { size: '$3', strokeWidth: '2' }
    }
  }
})

type IconProps = Override<
  React.ComponentProps<typeof StyledIcon>,
  {
    is: React.FC<React.SVGProps<SVGSVGElement>>
    as?: never
  }
>

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ is: SVG, size = 'md', ...remainingProps }, ref) => (
    <StyledIcon
      size={size}
      aria-hidden="true"
      {...remainingProps}
      as={SVG}
      ref={ref}
    />
  )
)
