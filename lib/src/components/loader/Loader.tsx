import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as React from 'react'

import { Flex } from '~/components/flex'
import { keyframes, styled } from '~/stitches'

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
} & React.ComponentProps<typeof Flex>

export const Loader: React.FC<LoaderProps> = ({
  message = 'Loading',
  size = 'md',
  ...props
}) => (
  <Flex justify="center" role="alert" {...props}>
    <VisuallyHidden.Root>{message}</VisuallyHidden.Root>
    <Dot size={size} />
    <Dot size={size} />
    <Dot size={size} />
  </Flex>
)
