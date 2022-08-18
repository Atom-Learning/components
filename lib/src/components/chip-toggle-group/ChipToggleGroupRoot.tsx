import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as React from 'react'

import { ChipGroup } from '~/components/chip'

export const ChipToggleGroupRoot: React.ForwardRefExoticComponent<React.FC> =
  React.forwardRef((props, ref) => {
    return (
      <ChipGroup
        ref={ref}
        as={ToggleGroup.Root}
        type="multiple"
        orientation="horizontal"
        {...props}
      />
    )
  })
