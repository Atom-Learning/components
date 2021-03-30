import * as React from 'react'

import { CSS, styled } from '~/stitches'
import { capsize, Override } from '~/utilities'

type TextSizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export const textVariantSize = ({ applyCapsize = true } = {}): Record<
  TextSizes,
  CSS
> => ({
  sm: {
    fontSize: '$sm',
    lineHeight: 1.69,
    ...(applyCapsize ? capsize('-0.477em') : {})
  },
  md: {
    fontSize: '$md',
    lineHeight: 1.625,
    ...(applyCapsize ? capsize('-0.4489em') : {})
  },
  lg: {
    fontSize: '$lg',
    lineHeight: 1.52,
    ...(applyCapsize ? capsize('-0.3983em') : {})
  },
  xl: {
    fontSize: '$xl',
    lineHeight: 1.42,
    ...(applyCapsize ? capsize('-0.3506em') : {})
  },
  xxl: {
    fontSize: '$xxl',
    lineHeight: 1.35,
    ...(applyCapsize ? capsize('-0.312em') : {})
  }
})

const StyledParagraph = styled('p', {
  color: '$tonal900',
  fontFamily: '$sans',
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
    size?: TextSizes
  }
>

export const Text: React.FC<TextProps> = React.forwardRef(
  ({ as = 'p', size = 'md', ...remainingProps }, ref) => (
    <StyledParagraph as={as} size={size} {...remainingProps} ref={ref} />
  )
)

Text.displayName = 'Text'
