import * as React from 'react'

import { styled } from '~/stitches'
import type { Override } from '~/utilities/types'

import { getTextVariant } from '../text'

const StyledLabel = styled('label', {
  color: '$tonal500',
  fontFamily: '$body',
  m: 0,
  variants: {
    size: {
      sm: getTextVariant({ size: 'sm' }),
      md: getTextVariant({ size: 'md' })
    },
    type: {
      block: {
        display: 'block',
        fontWeight: 600
      },
      inline: {
        display: 'flex',
        fontWeight: 400,
        maxWidth: 'max-content'
      }
    },
    align: { start: {}, center: {} },
    direction: { reverse: {}, row: {} }
  },
  compoundVariants: [
    {
      type: 'inline',
      align: 'start',
      css: { alignItems: 'flex-start' }
    },
    {
      type: 'inline',
      align: 'center',
      css: { alignItems: 'center' }
    },
    {
      type: 'inline',
      direction: 'reverse',
      css: { flexDirection: 'row-reverse' }
    },
    {
      type: 'inline',
      direction: 'row',
      css: { flexDirection: 'row' }
    }
  ]
})

const StyledAsterisk = styled('span', {
  color: '$danger',
  ml: '$1',
  fontWeight: 400
})

type LabelProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledLabel>,
  {
    as?: 'label' | 'legend'
    required?: boolean
  }
>

export const Label: React.FC<LabelProps> = ({
  align = 'start',
  as = 'label',
  direction = 'row',
  size = 'md',
  type = 'block',
  children,
  required,
  ...rest
}) => (
  <StyledLabel
    as={as}
    size={size}
    type={type}
    align={align}
    direction={direction}
    {...rest}
  >
    {children}
    {required && <StyledAsterisk aria-hidden>*</StyledAsterisk>}
  </StyledLabel>
)

Label.displayName = 'Label'
