import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as React from 'react'
import { TileGroup } from '~/components/tile'

type TTileToggleGroupRootProps = React.ComponentProps<typeof TileGroup> &
  React.ComponentProps<typeof ToggleGroup.Root>

const orientationToDirection = (orientation) =>
  orientation === 'horizontal' ? 'row' : 'column'

export const TileToggleGroupRoot: React.ForwardRefExoticComponent<TTileToggleGroupRootProps> =
  React.forwardRef<HTMLDivElement, TTileToggleGroupRootProps>(
    ({ orientation = 'horizontal', ...rest }, ref) => {
      const direction = orientationToDirection(orientation)
      return (
        <TileGroup
          ref={ref}
          direction={direction}
          orientation={orientation}
          align={false}
          as={ToggleGroup.Root}
          {...rest}
        />
      )
    }
  )
