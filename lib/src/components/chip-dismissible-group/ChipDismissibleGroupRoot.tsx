import * as React from 'react'

import { ChipGroup } from '~/components/chip'
import { DismissibleGroup } from '~/components/dismissible-group'

type TChipDismissibleGroupRootProps = React.ComponentProps<typeof ChipGroup> &
  React.ComponentProps<typeof DismissibleGroup.Root>

export const ChipDismissibleGroupRoot = React.forwardRef<
  HTMLDivElement,
  TChipDismissibleGroupRootProps
>((props, ref) => {
  return <ChipGroup as={DismissibleGroup.Root} ref={ref} {...props} />
})
