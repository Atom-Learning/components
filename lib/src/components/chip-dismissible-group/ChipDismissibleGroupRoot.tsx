import * as React from 'react'

import { ChipGroup } from '~/components/chip'
import { DismissibleGroup } from '~/components/dismissible-group'

export const ChipDismissibleGroupRoot: React.ForwardRefExoticComponent<React.FC> =
  React.forwardRef((props, ref) => {
    return <ChipGroup as={DismissibleGroup.Root} ref={ref} {...props} />
  })
