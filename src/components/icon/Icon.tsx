import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledIcon = styled('svg', {
  display: 'inline-block',
  fill: 'none',
  stroke: 'currentcolor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: '2',
  verticalAlign: 'middle',
  variants: {
    size: {
      xs: { size: '12px' },
      sm: { size: '$1' },
      md: { size: '$2' },
      lg: { size: '$3' }
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

export const Icon: React.FC<IconProps> = React.forwardRef(
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
