import * as React from 'react'

import { styled } from '~/stitches'
import { capsize, Override } from '~/utilities'

export const textVariantSize = {
  sm: {
    fontSize: '$sm',
    lineHeight: 1.53
  },
  md: {
    fontSize: '$md',
    lineHeight: 1.625,
    ...capsize('-0.4489em')
  },
  lg: {
    fontSize: '$lg',
    lineHeight: 1.52,
    ...capsize('-0.3983em')
  }
}

const StyledParagraph = styled('p', {
  color: '$tonal900',
  fontFamily: '$sans',
  fontWeight: 400,
  margin: 0,
  maxWidth: '60ch',
  variants: {
    size: textVariantSize
  }
})

type TextProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledParagraph>,
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
    size?: 'sm' | 'md' | 'lg'
  }
>

export const Text: React.FC<TextProps> = ({
  as = 'p',
  size = 'md',
  ...rest
}) => <StyledParagraph as={as} size={size} {...rest} />

Text.displayName = 'Text'
