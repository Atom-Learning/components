import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

import { textVariantSize } from '../text'
const { sm, md } = textVariantSize()

const StyledLabel = styled('label', {
  color: '$tonal500',
  display: 'block',
  fontFamily: '$body',
  fontWeight: 600,
  m: 0,
  variants: {
    size: { sm, md }
  }
})

const StyledAsteriskWrapper = styled('span', { color: '$danger', ml: '$1' })

type LabelProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledLabel>,
  {
    as?: 'label' | 'legend'
    required?: boolean
  }
>

export const Label: React.FC<LabelProps> = ({
  as = 'label',
  size = 'md',
  children,
  required,
  ...rest
}) => (
  <StyledLabel as={as} size={size} {...rest}>
    {children}
    {required && <StyledAsteriskWrapper>*</StyledAsteriskWrapper>}
  </StyledLabel>
)

Label.displayName = 'Label'
