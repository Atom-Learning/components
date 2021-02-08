import * as React from 'react'

import { StitchesProps, styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledLabel = styled('label', {
  color: '$secondary300',
  display: 'inline-block',
  fontFamily: '$sans',
  fontWeight: 500,
  maxWidth: '60ch',
  letterSpacing: '0.02em',
  lineHeight: '1.4',
  variants: {
    size: {
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' }
    }
  }
})

type LabelProps = Override<
  StitchesProps<typeof StyledLabel>,
  {
    as?: 'label'
    size?: 'sm' | 'md' | 'lg'
  }
>

export const Label: React.FC<LabelProps> = ({
  size = 'md',
  htmlFor,
  children,
  ...rest
}) => (
  <StyledLabel htmlFor={htmlFor} size={size} {...rest}>
    {children}
  </StyledLabel>
)

Label.displayName = 'Label'
