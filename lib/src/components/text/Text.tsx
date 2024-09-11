import * as React from 'react'

import { CSS, styled } from '~/stitches'
import type { Override } from '~/utilities'
import { capsize } from '~/utilities'

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
      '&::before, &::after': { display: 'none !important' }
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
  m: 0,
  /** Allow nesting `<Text />` inside `<Text />` without forcing a new line and spacing. */
  '& > &': {
    '&:before, &:after': { display: 'none' }
  },
  variants: {
    ...textVariants,
    weight: {
      normal: { fontWeight: 400 },
      bold: { fontWeight: 600 }
    },
    family: {
      body: { fontFamily: '$body' },
      display: { fontFamily: '$display' },
      mono: { fontFamily: '$mono' }
    }
  }
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
  React.forwardRef(
    (
      { size = 'md', weight = 'normal', family = 'body', ...remainingProps },
      ref
    ) => (
      <StyledText
        size={size}
        weight={weight}
        family={family}
        {...remainingProps}
        ref={ref}
      />
    )
  )

Text.displayName = 'Text'
