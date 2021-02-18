import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledIcon = styled('svg', {
  color: 'currentcolor',
  variants: {
    size: {
      // TODO: update to use size token when added
      sm: { height: 16, width: 16 },
      md: { height: 24, width: 24 },
      lg: { height: 32, width: 32 }
    }
  }
})

type IconProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledIcon>,
  {
    is: React.FC<React.SVGProps<SVGSVGElement>>
    as: never
  }
>

export const Icon: React.FC<IconProps> = ({
  is: SVG,
  size = 'sm',
  as, // prevent as from being included in ...props and overwriting as={SVG} on line 29
  ...props
}) => (
  <StyledIcon
    as={SVG}
    size={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  />
)
