import * as React from 'react'

import { StitchesProps, styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledLabel = styled('label', {
  color: '$secondary300',
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
  StitchesProps<typeof StyledLabel>,
  {
    as: 'never'
    size?: 'sm' | 'md'
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
