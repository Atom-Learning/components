import * as React from 'react'

import { CSS, styled } from '~/stitches'
import { createThemeVariants } from '~/utilities'
import { CSSWrapper } from '~/utilities/css-wrapper'

const StyledStack = styled('div', {
  display: 'flex',
  '& > *': {
    m: 0
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      },
      'row-reverse': {
        flexDirection: 'row-reverse'
      },
      column: {
        flexDirection: 'column'
      }
    },
    wrap: {
      wrap: {
        flexWrap: 'wrap'
      },
      'no-wrap': {
        flexWrap: 'no-wrap'
      },
      'wrap-reverse': {
        flexWrap: 'wrap-reverse'
      }
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
})

type StackPropsType = React.ComponentProps<typeof StyledStack> & {
  css?: CSS
  as?: any
} // (!) `css` and `as` are both props that come from `stitches`. It would be better to figure out and export the appropriate type for them in stitches!

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
      return (
        <CSSWrapper css={css}>
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
        </CSSWrapper>
      )
    }
  )

Stack.displayName = 'Stack'
