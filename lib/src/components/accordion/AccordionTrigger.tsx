import { ChevronDown } from '@atom-learning/icons'
import { Trigger } from '@radix-ui/react-accordion'
import { darken } from 'color2k'
import React from 'react'

import { styled, theme } from '~/stitches'

import { Icon } from '../icon'

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

const RotatingIcon = styled(Icon, {
  transition: 'transform 300ms',
  '[data-state="open"] > &': {
    transform: 'rotate(180deg)'
  },
  '[data-state="closed"] > &': {
    transform: 'rotate(0deg)'
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
    borderRadius: '$0 $0 0 0'
  },
  '&[data-state="closed"]': {
    borderRadius: '$0'
  },

  variants: {
    theme: {
      primaryDark: getTriggerVariant(
        '$primaryDark',
        darken(theme.colors.primaryDark.value, 0.1),
        darken(theme.colors.primaryDark.value, 0.15)
      ),
      light: getTriggerVariant(
        '#fff',
        darken('#fff', 0.1),
        darken('#fff', 0.15),
        '$tonal600'
      ),
      tonal: getTriggerVariant(
        '$tonal100',
        darken('#fff', 0.1),
        darken('#fff', 0.15),
        '$tonal500'
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
    {children}
    <RotatingIcon is={ChevronDown} />
  </StyledTrigger>
)
