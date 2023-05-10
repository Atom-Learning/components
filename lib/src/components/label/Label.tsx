import * as React from 'react'

import { styled } from '~/stitches'
import type { Override } from '~/utilities/types'

import { Text } from '../text'

const StyledAsterisk = styled('span', {
  color: '$danger',
  ml: '$1',
  fontWeight: 400
})

type LabelProps = Override<
  React.ComponentPropsWithoutRef<typeof Text>,
  {
    as?: 'label' | 'legend'
    required?: boolean,
    size?: 'sm' | 'md',
    htmlFor?: string,
    type?: 'block' | 'inline'
  }
>

export const Label: React.FC<LabelProps> = ({
  as = 'label',
  htmlFor,
  size = 'md',
  type = 'block',
  children,
  required,
  css,
  ...rest
}) => (
  <Text
    as={as}
    size={size}
    css={{
      ...(type === 'block' ? {
        display: 'block',
        fontWeight: 600
      } : {
        display: 'flex',
        fontWeight: 400,
        maxWidth: 'max-content'
      }),
      ...css
    }}
    {...(as === 'label' ? { htmlFor } : {})}
    {...rest}
  >
    {children}
    {required && <StyledAsterisk aria-hidden>*</StyledAsterisk>}
  </Text >
)

Label.displayName = 'Label'
