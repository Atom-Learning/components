import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as React from 'react'

import { ChipGroup } from '~/components/chip'

type TChipToggleGroupRootProps = React.ComponentProps<typeof ChipGroup> &
  React.ComponentProps<typeof ToggleGroup.Root>

export const ChipToggleGroupRoot = React.forwardRef<
  HTMLDivElement,
  TChipToggleGroupRootProps
>((props, ref) => {
  return (
    <ChipGroup
      ref={ref}
      as={ToggleGroup.Root}
      orientation="horizontal"
      {...props}
    />
  )
})
