import * as React from 'react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
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
  borderRadius: '100%',
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
      xs: {
        height: '4px',
        marginLeft: '2px',
        marginRight: '2px',
        width: '4px'
      },
      sm: {
        height: '6px',
        marginLeft: '2px',
        marginRight: '2px',
        width: '6px'
      },
      md: {
        height: '8px',
        marginLeft: '3px',
        marginRight: '3px',
        width: '8px'
      },
      lg: {
        height: '10px',
        marginLeft: '5px',
        marginRight: '5px',
        width: '10px'
      }
    }
  }
})

type LoaderProps = {
  message?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  css?: CSS
}

export const Loader: React.FC<LoaderProps> = ({
  css = {},
  message = 'Loading',
  size = 'md'
}) => {
  return (
    <Flex
      css={{
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        // Stitches doesn't recognise CSS as the right type here. The Modulz team doesn't know why.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(css as any)
      }}
      role="alert"
      aria-live="assertive"
    >
      <VisuallyHidden.Root>{message}</VisuallyHidden.Root>
      <Dot size={size} /> <Dot size={size} /> <Dot size={size} />
    </Flex>
  )
}
