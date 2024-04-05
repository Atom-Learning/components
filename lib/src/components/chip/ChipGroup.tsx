import * as React from 'react'

import { Flex } from '~/components/flex'

type TChipGroupProps = {
  gap: 1 | 2 | 3
}

export const ChipGroup: React.ForwardRefExoticComponent<
  TChipGroupProps & React.ComponentProps<typeof Flex> & { as?: any }
> = React.forwardRef(({ gap = 2, ...rest }, ref) => (
  <Flex direction="row" wrap="wrap" gap={gap} {...rest} ref={ref} />
))
