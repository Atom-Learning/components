import { Trigger } from '@radix-ui/react-accordion'
import React from 'react'
import type * as Stitches from '@stitches/react'

import { Box, Icon } from '~/index'
import { ChevronDown } from '@atom-learning/icons'

import { styled, theme } from '~/stitches'
import { darken } from 'polished'
import { Override } from '~/utilities'

const getTriggerVariant = (
  base: string,
  interact: string,
  active: string,
  text = '#fff'
) => ({
  bg: base,
  color: text,
  '&[disabled]': {
    bg: '$tonal100',
    cursor: 'not-allowed',
    color: '$tonal400'
  },
  '&:not([disabled]):hover': {
    bg: interact
  },
  '&:not([disabled]):active': {
    bg: active
  }
})

const StyledTrigger = styled(Trigger, {
  border: 0,
  py: '$3',
  px: '$4',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',

  '&[data-state="open"]': {
    '& svg': {
      transition: 'transform 300ms',
      transform: 'rotate(180deg)'
    }
  },
  '&[data-state="closed"]': {
    '& svg': {
      transition: 'transform 300ms',
      transform: 'rotate(0deg)'
    }
  },

  variants: {
    theme: {
      primary: {},
      primaryDark: {},
      dark: {},
      light: {}
    }
  },

  compoundVariants: [
    {
      theme: 'primary',
      css: getTriggerVariant('$primary', '$primaryMid', '$primaryDark')
    },
    {
      theme: 'primaryDark',
      css: getTriggerVariant(
        '$primaryDark',
        darken(0.1, theme.colors.primaryDark.value),
        darken(0.15, theme.colors.primaryDark.value)
      )
    },
    {
      theme: 'dark',
      css: getTriggerVariant(
        '$tonal600',
        darken(0.1, theme.colors.tonal600.value),
        darken(0.15, theme.colors.tonal600.value)
      )
    },
    {
      theme: 'light',
      css: getTriggerVariant(
        '#fff',
        darken(0.1, '#fff'),
        darken(0.15, '#fff'),
        '$000'
      )
    }
  ]
})

type AccordionTriggerProps = Override<
  React.ComponentProps<typeof StyledTrigger>,
  Stitches.VariantProps<typeof StyledTrigger> & {
    text?: string
    theme: string
  }
>

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  text,
  theme = 'primaryDark',
  ...remainingProps
}) => (
  <StyledTrigger theme={theme} name="accordionTrigger" {...remainingProps}>
    <Box>{text}</Box>
    <Icon is={ChevronDown} />
  </StyledTrigger>
)

AccordionTrigger.toString = () => 'accordionTrigger'
