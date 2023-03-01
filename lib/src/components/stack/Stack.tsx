import * as React from 'react'

import { CSS, styled } from '~/stitches'
import { createThemeVariants } from '~/utilities'
import { CSSWrapper } from '~/utilities/css-wrapper'

import { isFlexGapSupported } from './utilities'

const sharedVariants = {
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
    }
  }
}

const StyledStack = styled(
  'div',
  {
    display: 'flex',
    variants: {
      gap: createThemeVariants('space', { gap: '$key' })
    }
  },
  sharedVariants
)

const StyledStackLegacy = styled(
  'div',
  {
    display: 'flex',
    '& > *': { m: 0 },
    variants: {
      gap: {
        ...createThemeVariants('space', {
          mt: '-$key',
          ml: '-$key',
          '& > *': {
            mt: '$key',
            ml: '$key'
          }
        }),
        false: {}
      }
    }
  },
  sharedVariants
)

type StackPropsType = React.ComponentProps<typeof StyledStack> & {
  css?: CSS
}

// const usesGap =

export const Stack: React.ForwardRefExoticComponent<StackPropsType> =
  React.forwardRef(
    (
      {
        css,
        gap = 2,
        direction = 'row',
        wrap = 'wrap',
        justify = 'start',
        align,
        ...remainingProps
      },
      ref
    ) => {
      const alignDefault =
        typeof align === 'undefined' && direction !== 'column'
          ? 'center'
          : align

      if ( isFlexGapSupported()) {
        return (
          <StyledStack
            {...remainingProps}
            ref={ref}
            direction={direction}
            gap={gap}
            wrap={wrap}
            justify={justify}
            align={alignDefault}
            css={css}
          />
        )
      }
      return (
        <CSSWrapper css={css}>
          <StyledStackLegacy
            {...remainingProps}
            ref={ref}
            direction={direction}
            gap={gap}
            wrap={wrap}
            justify={justify}
            align={alignDefault}
          />
        </CSSWrapper>
      )
    }
  )

Stack.displayName = 'Stack'
