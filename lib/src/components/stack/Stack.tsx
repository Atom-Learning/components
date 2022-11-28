import * as React from 'react'

import { styled } from '~/stitches'
import { createThemeVariants, flexGapSupported } from '~/utilities'

import { LegacyStack } from './LegacyStack'

const StyledStack = styled('div', {
  display: 'flex',
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
      end: { justifyContent: 'flex-end' },
      false: {}
    },
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      false: {}
    },
    gap: {
      ...createThemeVariants('space', { gap: '$key' }),
      false: {}
    }
  }
})

type StackPropsType = React.ComponentProps<typeof StyledStack>

export const Stack: React.ForwardRefExoticComponent<StackPropsType> =
  React.forwardRef(
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
    ) => {
      const Component = flexGapSupported ? StyledStack : LegacyStack

      return (
        <Component
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
    }
  )

Stack.displayName = 'Stack'
