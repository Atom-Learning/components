import * as React from 'react'

import { CSS, styled } from '~/stitches'
import type { Override } from '~/utilities'
import { capsize } from '~/utilities'

const defaultSize = 'md'

export const textVariants = {
  size: {
    xs: { fontSize: '$xs', lineHeight: 1.6, ...capsize(0.4364) },
    sm: { fontSize: '$sm', lineHeight: 1.53, ...capsize(0.4056) },
    md: { fontSize: '$md', lineHeight: 1.5, ...capsize(0.3864) },
    lg: { fontSize: '$lg', lineHeight: 1.52, ...capsize(0.3983) },
    xl: { fontSize: '$xl', lineHeight: 1.42, ...capsize(0.3506) }
  },
  noCapsize: {
    true: {
      '&::before, &::after': { display: 'none' }
    }
  }
}

export const getTextVariant: (options: {
  size: keyof typeof textVariants.size
  noCapsize?: boolean
}) => CSS = ({ size, noCapsize }) => ({
  ...textVariants.size[size],
  ...textVariants.noCapsize[`${noCapsize}`]
})

export const StyledText = styled('p', {
  color: '$tonal600',
  fontFamily: '$body',
  fontWeight: 400,
  margin: 0,
  /** Allow nesting `<Text />` inside `<Text />` without forcing a new line and spacing. */
  '& > &': {
    '&:before, &:after': { display: 'none' }
  },
  variants: textVariants
})

type TextProps = Override<
  React.ComponentProps<typeof StyledText>,
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
  }
>

export const Text: React.ForwardRefExoticComponent<TextProps> =
  React.forwardRef(({ size = defaultSize, ...remainingProps }, ref) => (
    <StyledText size={size} {...remainingProps} ref={ref} />
  ))

Text.displayName = 'Text'
