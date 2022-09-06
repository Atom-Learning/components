import * as React from 'react'

import { ChipGroup } from '~/components/chip'
import { DismissibleGroup } from '~/components/dismissible-group'

type TChipDismissibleGroupRootProps = React.ComponentProps<typeof ChipGroup> &
  React.ComponentProps<typeof DismissibleGroup>

export const ChipDismissibleGroupRoot = React.forwardRef<
  HTMLDivElement,
  TChipDismissibleGroupRootProps
>((props, ref) => {
  return <ChipGroup as={DismissibleGroup} ref={ref} {...props} />
})
