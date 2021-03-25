import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as React from 'react'

import { Flex } from '~/components/flex'
import { CSS, keyframes, styled } from '~/stitches'

const FadeInOut = keyframes({
  '0%': { opacity: 0 },
  '30%': { opacity: 1 },
  '50%': { opacity: 1 },
  '80%': { opacity: 0 },
  '100%': { opacity: 0 }
})

const Dot = styled('div', {
  animationName: `${FadeInOut}`,
  animationDuration: '1s',
  animationFillMode: 'both',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  backgroundColor: 'currentColor',
  borderRadius: '$round',
  '&:nth-child(1)': {
    animationDelay: '-300ms'
  },
  '&:nth-child(2)': {
    animationDelay: '-150ms'
  },
  '&:nth-child(3)': {
    animationDelay: 0
  },

  variants: {
    size: {
      sm: { size: '4px', mx: '2px' },
      md: { size: '6px', mx: '2px' },
      lg: { size: '8px', mx: '3px' }
    }
  }
})

type LoaderProps = {
  message?: string
  size?: 'sm' | 'md' | 'lg'
  css?: CSS
}

export const Loader: React.FC<LoaderProps> = ({
  css = {},
  message = 'Loading',
  size = 'md'
}) => (
  <Flex
    css={{
      justifyContent: 'center',
      // Stitches doesn't recognise CSS as the right type here. The Modulz team doesn't know why.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(css as any)
    }}
    role="alert"
  >
    <VisuallyHidden.Root>{message}</VisuallyHidden.Root>
    <Dot size={size} />
    <Dot size={size} />
    <Dot size={size} />
  </Flex>
)
