import * as React from 'react'

import { Flex } from '~/components/flex'
import { styled } from '~/stitches'
import { ToggleGroup } from '~/utilities/radix-overrides/toggle-group'

import { StyledItem } from './ToggleGroupItem'

type RootType = {
  orientation?: 'horizontal' | 'vertical'
  isFullWidth?: boolean
}

export const StyledRoot = styled(ToggleGroup.Root, {
  width: 'fit-content',
  variants: {
    isFullWidth: {
      true: {
        width: '100%',
        [`& ${StyledItem}`]: {
          flexBasis: 0,
          flexGrow: 1
        }
      }
    },
    hasGap: {
      true: {
        [`& ${StyledItem}`]: { borderRadius: '$0' }
      },
      false: {
        borderRadius: '$0',
        bg: 'white',
        [`& ${StyledItem}`]: {
          bg: 'transparent',
          borderRadius: 0,
          position: 'relative',
          '&:not(:last-child)::before': {
            content: '',
            position: 'absolute'
          }
        }
      }
    },
    direction: {
      column: {},
      row: {}
    }
  },
  compoundVariants: [
    {
      hasGap: false,
      direction: 'row',
      css: {
        [`& ${StyledItem}`]: {
          '&:not(:last-child)::before': {
            top: '-1px',
            height: 'calc(100% + 2px)',
            width: '1px',
            right: '0',
            transform: 'translateX(150%)'
          },
          '&:not(:first-child)': {
            borderLeftColor: 'transparent'
          },
          '&:not(:last-child)': {
            borderRightColor: 'transparent'
          },
          '&:first-child': {
            borderTopLeftRadius: '$0',
            borderBottomLeftRadius: '$0'
          },
          '&:last-child': {
            borderTopRightRadius: '$0',
            borderBottomRightRadius: '$0'
          }
        }
      }
    },
    {
      hasGap: false,
      direction: 'column',
      css: {
        [`& ${StyledItem}`]: {
          '&:not(:last-child)::before': {
            bottom: 0,
            left: '-1px',
            height: '1px',
            width: 'calc(100% + 2px)',
            transform: 'translateY(150%)'
          },
          '&:first-child': {
            borderTopLeftRadius: '$0',
            borderTopRightRadius: '$0'
          },
          '&:last-child': {
            borderBottomLeftRadius: '$0',
            borderBottomRightRadius: '$0'
          },
          '&:not(:first-child)': {
            borderTopColor: 'transparent'
          },
          '&:not(:last-child)': {
            borderBottomColor: 'transparent'
          }
        }
      }
    }
  ]
})

const orientationToDirection = (orientation) =>
  orientation === 'horizontal' ? 'row' : 'column'

export const ToggleGroupRoot: React.ForwardRefExoticComponent<
  Pick<React.ComponentProps<typeof Flex>, 'gap' | 'wrap'> &
    React.ComponentProps<typeof StyledRoot> &
    RootType
> = React.forwardRef(
  (
    { orientation = 'horizontal', gap, isFullWidth, children, wrap, ...rest },
    ref
  ) => {
    const hasGap = typeof gap === 'number'
    const direction = orientationToDirection(orientation)
    return (
      <StyledRoot
        ref={ref}
        direction={direction}
        hasGap={hasGap}
        isFullWidth={isFullWidth}
        orientation={orientation}
        {...rest}
      >
        <Flex
          direction={direction}
          gap={hasGap ? gap : undefined}
          wrap={wrap || 'nowrap'}
        >
          {children}
        </Flex>
      </StyledRoot>
    )
  }
)
