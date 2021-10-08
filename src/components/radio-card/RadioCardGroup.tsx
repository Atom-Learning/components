import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

import { Stack } from '../stack/Stack'

type RadioCardGroupProps = {
  defaultValue?: string
} & React.ComponentProps<typeof Stack>

export const RadioCardGroup: React.FC<RadioCardGroupProps> = ({
  defaultValue,
  children,
  gap = '3',
  ...rest
}) => (
  <RadioGroup.Root defaultValue={defaultValue}>
    <Stack direction="row" gap={gap} {...rest}>
      {children}
    </Stack>
  </RadioGroup.Root>
)
