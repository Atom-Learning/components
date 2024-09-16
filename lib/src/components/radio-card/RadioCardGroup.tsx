import type { VariantProps } from '@atom-learning/stitches-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

import type { Override } from '~/utilities'

import { Flex } from '../flex'
import { RadioCard, StyledRadioCard } from './RadioCard'

type RadioCardGroupProps = Override<
  Pick<React.ComponentProps<typeof Flex>, 'justify' | 'gap' | 'css'> &
    VariantProps<typeof StyledRadioCard>,
  React.ComponentProps<typeof RadioGroup.Root>
>

export const RadioCardGroup = ({
  css,
  children,
  size,
  isFullWidth,
  align,
  gap = '3',
  justify,
  ...rest
}: RadioCardGroupProps) => (
  <RadioGroup.Root {...rest}>
    <Flex direction="row" justify={justify} gap={gap} wrap="wrap" css={css}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child?.type === RadioCard) {
          return React.cloneElement(
            child as React.ReactElement<React.ComponentProps<typeof RadioCard>>,
            { size, isFullWidth, align }
          )
        }
        return child
      })}
    </Flex>
  </RadioGroup.Root>
)
