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
      lg: { size: '8px', mx: '3px' },
      xl: { size: '10px', mx: '6px' }
    }
  }
})

type LoaderProps = React.ComponentProps<typeof Dot> & {
  message?: string
}

export const Loader: React.FC<LoaderProps> = ({
  css,
  message = 'Loading',
  size = 'md'
}) => (
  <Flex css={{ justifyContent: 'center', ...css }} role="alert">
    <VisuallyHidden.Root>{message}</VisuallyHidden.Root>
    <Dot size={size} />
    <Dot size={size} />
    <Dot size={size} />
  </Flex>
)
