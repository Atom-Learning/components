import * as React from 'react'

import { CSS, styled } from '~/stitches'
import { capsize, Override } from '~/utilities'

type TextSizes = 'sm' | 'md' | 'lg' | 'xl'

export const textVariantSize = ({ applyCapsize = true } = {}): Record<
  TextSizes,
  CSS
> => ({
  sm: {
    fontSize: '$sm',
    lineHeight: 1.53,
    ...(applyCapsize ? capsize(0.4056) : {})
  },
  md: {
    fontSize: '$md',
    lineHeight: 1.5,
    ...(applyCapsize ? capsize(0.3864) : {})
  },
  lg: {
    fontSize: '$lg',
    lineHeight: 1.52,
    ...(applyCapsize ? capsize(0.3983) : {})
  },
  xl: {
    fontSize: '$xl',
    lineHeight: 1.42,
    ...(applyCapsize ? capsize(0.3506) : {})
  }
})

export const StyledParagraph = styled('p', {
  color: '$tonal900',
  fontFamily: '$body',
  fontWeight: 400,
  margin: 0,
  variants: {
    size: textVariantSize()
  }
})

type TextProps = Override<
  React.ComponentProps<typeof StyledParagraph>,
  {
    as?:
      | 'blockquote'
      | 'caption'
      | 'dd'
      | 'dt'
      | 'figcaption'
      | 'li'
      | 'p'
      | 'span'
      | 'legend'
      | React.ComponentType
      | React.ElementType
    size?: TextSizes
  }
>

export const Text: React.FC<TextProps> = React.forwardRef(
  ({ size = 'md', ...remainingProps }, ref) => (
    <StyledParagraph size={size} {...remainingProps} ref={ref} />
  )
)

Text.displayName = 'Text'
