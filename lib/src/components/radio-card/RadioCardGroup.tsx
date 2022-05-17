import * as RadioGroup from '@radix-ui/react-radio-group'
import type * as Stitches from '@stitches/react'
import * as React from 'react'

import type { Override } from '~/utilities'

import { Stack } from '../stack/Stack'
import { RadioCard, StyledRadioCard } from './RadioCard'

type RadioCardGroupProps = Override<
  Pick<React.ComponentProps<typeof Stack>, 'justify' | 'gap' | 'css'> &
    Stitches.VariantProps<typeof StyledRadioCard>,
  React.ComponentProps<typeof RadioGroup.Root>
>

export const RadioCardGroup: React.FC<RadioCardGroupProps> = ({
  css,
  children,
  size,
  isFullWidth,
  align,
  gap = '3',
  justify,
  ...rest
}) => (
  <RadioGroup.Root {...rest}>
    <Stack direction="row" justify={justify} gap={gap} css={css}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child?.type === RadioCard) {
          return React.cloneElement(child, { size, isFullWidth, align })
        }
        return child
      })}
    </Stack>
  </RadioGroup.Root>
)
