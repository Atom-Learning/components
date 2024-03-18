import * as React from 'react'

import { ChipGroup } from '~/components/chip'
import { ToggleGroup } from '~/utilities/radix-overrides/toggle-group'

type TChipToggleGroupRootProps = React.ComponentProps<typeof ChipGroup> &
  React.ComponentProps<typeof ToggleGroup.Root>

export const ChipToggleGroupRoot: React.ForwardRefExoticComponent<TChipToggleGroupRootProps> =
  React.forwardRef((props, ref) => {
    return (
      <ChipGroup
        ref={ref}
        as={ToggleGroup.Root}
        orientation="horizontal"
        {...props}
      />
    )
  })
