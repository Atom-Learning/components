import { Trigger } from '@radix-ui/react-accordion'
import React from 'react'

import { Box, Icon } from '~/index'
import { ChevronDown } from '@atom-learning/icons'

import { styled, theme } from '~/stitches'
import { darken } from 'polished'

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
    borderRadius: '$0 $0 0 0',
    '& svg': {
      transition: 'transform 300ms',
      transform: 'rotate(180deg)'
    }
  },
  '&[data-state="closed"]': {
    borderRadius: '$0',
    '& svg': {
      transition: 'transform 300ms',
      transform: 'rotate(0deg)'
    }
  },

  variants: {
    theme: {
      primaryDark: getTriggerVariant(
        '$primaryDark',
        darken(0.1, theme.colors.primaryDark.value),
        darken(0.15, theme.colors.primaryDark.value)
      ),
      light: getTriggerVariant(
        '#fff',
        darken(0.1, '#fff'),
        darken(0.15, '#fff'),
        '#000'
      )
    }
  }
})

type AccordionTriggerProps = React.ComponentProps<typeof StyledTrigger>

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  theme = 'primaryDark',
  children,
  ...remainingProps
}) => (
  <StyledTrigger theme={theme} {...remainingProps}>
    <Box>{children}</Box>
    <Icon is={ChevronDown} />
  </StyledTrigger>
)
