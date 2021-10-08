import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Stitches from '@stitches/react'
import * as React from 'react'

import { Stack } from '../stack/Stack'
import { RadioCard } from './RadioCard'

type RadioCardGroupProps = {
  defaultValue?: string
} & Stitches.VariantProps<typeof RadioCard> &
  React.ComponentProps<typeof Stack>

export const RadioCardGroup: React.FC<RadioCardGroupProps> = ({
  defaultValue,
  children,
  size,
  isFullWidth,
  align,
  gap = '3',
  ...rest
}) => (
  <RadioGroup.Root defaultValue={defaultValue}>
    <Stack direction="row" gap={gap} {...rest}>
      {React.Children.map(children, (child) => {
        if (child?.type === RadioCard) {
          return React.cloneElement(child, { size, isFullWidth, align })
        }
        return child
      })}
    </Stack>
  </RadioGroup.Root>
)
