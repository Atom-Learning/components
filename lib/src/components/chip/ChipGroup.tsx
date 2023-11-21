import * as React from 'react'

import { Flex } from '~/components/flex'

type TChipGroupProps = {
  gap: 1 | 2 | 3
}

export const ChipGroup: React.ForwardRefExoticComponent<
  React.ComponentProps<typeof Flex> & TChipGroupProps
> = React.forwardRef(({ gap, ...rest }, ref) => (
  <Flex direction="row" gap={gap || '2'} {...rest} ref={ref} />
))
