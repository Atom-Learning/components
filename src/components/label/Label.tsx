import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledLabel = styled('label', {
  color: '$secondary300',
  display: 'block',
  fontFamily: '$sans',
  fontWeight: 500,
  letterSpacing: '0.02em',
  lineHeight: '1.4',
  variants: {
    size: {
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' }
    }
  }
})

type LabelProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledLabel>,
  {
    as?: never
  }
>

export const Label: React.FC<LabelProps> = ({
  size = 'md',
  children,
  ...rest
}) => (
  <StyledLabel size={size} {...rest}>
    {children}
  </StyledLabel>
)

Label.displayName = 'Label'
