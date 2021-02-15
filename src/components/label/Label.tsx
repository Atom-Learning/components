import * as React from 'react'

import { StitchesCss, styled } from '~/stitches'
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
  StitchesCss<typeof StyledLabel>,
  {
    // as: 'never' // TODO report override issue with as
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
