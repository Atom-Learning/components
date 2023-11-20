import * as RadioGroup from '@radix-ui/react-radio-group'
import type { VariantProps } from '@stitches/react'
import * as React from 'react'

import type { Override } from '~/utilities'

import { Flex } from '../flex'
import { RadioCard, StyledRadioCard } from './RadioCard'

type RadioCardGroupProps = Override<
  Pick<React.ComponentProps<typeof Flex>, 'justify' | 'gap' | 'css'> &
    VariantProps<typeof StyledRadioCard>,
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
    <Flex direction="row" justify={justify} gap={gap} css={css}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child?.type === RadioCard) {
          return React.cloneElement(child, { size, isFullWidth, align })
        }
        return child
      })}
    </Flex>
  </RadioGroup.Root>
)
