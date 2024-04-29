import React from 'react'

import { Tile } from '~/components/tile'
import { ComponentsContext } from '~/context'
import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { focusVisibleStyleBlock } from '~/utilities'
import { isExternalUrl } from '~/utilities/uri'

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
> &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  NavigatorActions

export const TileInteractive: React.ForwardRefExoticComponent<TTileInteractiveProps> =
  React.forwardRef(({ onClick, href, type = 'button', ...rest }, ref) => {
    const { Link: ExternalLink } = React.useContext(ComponentsContext)

    const elementSpecificProps = href
      ? {
          as: isExternalUrl(href) ? 'a' : ExternalLink,
          href,
          onClick: undefined
        }
      : {
          as: 'button' as React.ElementType,
          type,
          onClick
        }

    return (
      <StyledTileInteractive {...rest} {...elementSpecificProps} ref={ref} />
    )
  })

TileInteractive.displayName = 'TileInteractive'
