import * as React from 'react'

import { Stack } from '~/components/stack'

type TChipGroupProps = {
  gap: 1 | 2 | 3
}

export const ChipGroup: React.ForwardRefExoticComponent<
  TChipGroupProps & React.ComponentProps<typeof Stack>
> = React.forwardRef(({ gap = 2, ...rest }, ref) => {
  return <Stack ref={ref} direction="row" gap={gap} align={false} {...rest} />
})
