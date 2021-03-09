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
const StyledAsteriskWrapper = styled('span', { color: '$danger', ml: '$1' })

type LabelProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledLabel>,
  {
    as?: never
    required?: boolean
  }
>

export const Label: React.FC<LabelProps> = ({
  size = 'md',
  children,
  required,
  ...rest
}) => (
  <StyledLabel size={size} {...rest}>
    {children}
    {required && <StyledAsteriskWrapper>*</StyledAsteriskWrapper>}
  </StyledLabel>
)

Label.displayName = 'Label'
