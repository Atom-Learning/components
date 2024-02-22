import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as React from 'react'

import { TileGroup } from '~/components/tile'

type TTileToggleGroupRootProps = React.ComponentProps<typeof TileGroup> &
  React.ComponentProps<typeof ToggleGroup.Root>

const orientationToDirection = (orientation) =>
  orientation === 'horizontal'
    ? 'row'
    : orientation === 'vertical'
    ? 'column'
    : undefined

export const TileToggleGroupRoot: React.ForwardRefExoticComponent<TTileToggleGroupRootProps> =
  React.forwardRef((props, ref) => {
    const direction = orientationToDirection(props.orientation)
    return (
      <TileGroup
        ref={ref}
        as={ToggleGroup.Root}
        direction={direction}
        gap="2"
        wrap="wrap"
        {...props}
      />
    )
  })
