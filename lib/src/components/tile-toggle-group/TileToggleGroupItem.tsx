import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as React from 'react'

import { TileInteractive } from '~/components/tile-interactive'
import { styled } from '~/stitches'

const StyledTileToggleGroupItem = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(TileInteractive, {
  '&:not([disabled])': {
    '&[data-state="on"]': {
      '&:hover': {
        bg: '$interactive2'
      },
      '&:active': {
        bg: '$interactive3'
      }
    }
  },
  '&[data-state="on"]': {
    bg: '$interactive1',
    borderColor: '$accent8',
    '&::before': {
      content: '',
      position: 'absolute',
      inset: -1, // account for 1px Tile border
      boxShadow: 'inset $colors$accent8 0px 0px 0px 2px',
      borderRadius: 'inherit',
      zIndex: 1 // so it's over anything nested which touches sides
    }
  }
})

type TTileToggleGroupItem = React.ComponentProps<typeof ToggleGroup.Item> &
  React.ComponentProps<typeof StyledTileToggleGroupItem>

export const TileToggleGroupItem: React.FC<TTileToggleGroupItem> = ({
  children,
  ...rest
}) => {
  return (
    <ToggleGroup.Item {...rest} asChild>
      <StyledTileToggleGroupItem as="button">
        {children}
      </StyledTileToggleGroupItem>
    </ToggleGroup.Item>
  )
}
