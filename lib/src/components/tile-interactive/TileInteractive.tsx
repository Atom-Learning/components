import React from 'react'

import { Tile } from '~/components/tile'
import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { focusVisibleStyleBlock } from '~/utilities'

const StyledTileInteractive = styled(Tile, {
  '&[data-disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed'
  },
  '&:not([data-disabled])': {
    cursor: 'pointer',
    transform: 'translateY(0)',
    transition: 'transform 250ms ease',
    '&::after': {
      content: '',
      position: 'absolute',
      inset: 0,
      boxShadow: '$2',
      opacity: 0,
      transition: 'opacity 250ms ease-out',
      borderRadius: 'inherit'
    },
    '&:hover': {
      transform: 'translateY(-$space$0)',
      '&::after': {
        opacity: 1
      }
    },
    '&:active': {
      bg: '$base2'
    },
    '&:focus-visible': {
      ...focusVisibleStyleBlock()
    }
  }
})

type TTileInteractiveProps = React.ComponentProps<
  typeof StyledTileInteractive
> & { type?: string } & NavigatorActions

export const TileInteractive = React.forwardRef<
  HTMLButtonElement,
  TTileInteractiveProps
>(({ onClick, href, type = 'button', ...rest }, ref) => {
  const isLink = !!href
  const elementSpecificProps = isLink
    ? {
        asWorkaround: 'a' as React.ElementType,
        href,
        onClick: undefined
      }
    : { asWorkaround: 'button' as React.ElementType, type, onClick }

  return <StyledTileInteractive {...rest} {...elementSpecificProps} ref={ref} />
})

TileInteractive.displayName = 'TileInteractive'
