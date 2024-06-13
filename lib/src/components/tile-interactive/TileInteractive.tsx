import React from 'react'

import { Tile } from '~/components/tile'
import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { focusVisibleStyleBlock } from '~/utilities'

const StyledTileInteractive = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Tile, {
  '&[disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed'
  },
  '&:not([disabled])': {
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
      borderRadius: 'inherit',
      pointerEvents: 'none'
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
> & {
  as?: React.ComponentType | React.ElementType
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  NavigatorActions

export const TileInteractive: React.ForwardRefExoticComponent<TTileInteractiveProps> =
  React.forwardRef(({ onClick, href, type = 'button', as, ...rest }, ref) => {
    const isLink = !!href
    const elementSpecificProps = isLink
      ? {
          as: as || ('a' as React.ElementType),
          href,
          onClick: undefined
        }
      : { as: as || ('button' as React.ElementType), type, onClick }

    return (
      <StyledTileInteractive {...rest} {...elementSpecificProps} ref={ref} />
    )
  })

TileInteractive.displayName = 'TileInteractive'
