import * as React from 'react'

import { Flex } from '~/components/flex'

type TChipGroupProps = {
  gap: 1 | 2 | 3
}

export const ChipGroup: React.ForwardRefExoticComponent<
  TChipGroupProps & React.ComponentProps<typeof Flex>
> = React.forwardRef(({ gap = 2, ...rest }, ref) => (
  <Flex ref={ref} direction="row" gap={gap} {...rest} />
))
