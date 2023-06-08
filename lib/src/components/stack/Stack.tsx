import * as React from 'react'

import { styled } from '~/stitches'
import { createThemeVariants } from '~/utilities'

import { Flex } from '../flex'

const StyledStack = styled(Flex, {
  variants: {
    direction: {
      row: { flexDirection: 'row' },
      'row-reverse': { flexDirection: 'row-reverse' },
      column: { flexDirection: 'column' }
    },
    wrap: {
      wrap: { flexWrap: 'wrap' },
      'no-wrap': { flexWrap: 'no-wrap' },
      'wrap-reverse': { flexWrap: 'wrap-reverse' }
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' }
    },
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' }
    },
    gap: createThemeVariants('space', { gap: '$key' })
  }
})

export const Stack = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof StyledStack>
>(
  (
    {
      gap = 2,
      direction = 'row',
      wrap = 'wrap',
      justify = 'start',
      align,
      ...remainingProps
    },
    ref
  ) => (
    <StyledStack
      ref={ref}
      direction={direction}
      gap={gap}
      wrap={wrap}
      justify={justify}
      align={
        typeof align === 'undefined' && direction !== 'column'
          ? 'center'
          : align
      }
      {...remainingProps}
    />
  )
)

Stack.displayName = 'Stack'
