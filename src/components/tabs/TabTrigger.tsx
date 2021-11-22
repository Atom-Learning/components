import { Trigger } from '@radix-ui/react-tabs'
import * as React from 'react'
import { opacify } from 'polished'

import { styled, theme } from '~/stitches'

const StyledTabTrigger = styled(Trigger, {
  textTransform: 'uppercase',
  cursor: 'pointer',
  flexShrink: 0,
  fontFamily: '$body',
  p: '$4',
  userSelect: 'none',
  transition: '0.3s',
  variants: {
    theme: {
      light: {
        bg: 'white',
        '&[data-state="active"]': {
          color: '$primary',
          textShadow: '0px 0px 1px currentColor',
          boxShadow: 'inset 0 -2px 0 0 currentColor'
        },
        '&[data-state="inactive"]': {
          color: '$tonal500'
        },
        '&:not([data-disabled]):hover': {
          color: '$primary',
          bg: opacify(-0.9, theme.colors.primary.value)
        },
        '&:not([data-disabled]):active': {
          color: '$primary',
          bg: opacify(-0.8, theme.colors.primary.value),
          boxShadow: 'none'
        },
        '&[data-disabled],&[data-disabled]:hover': {
          color: '$tonal200',
          cursor: 'not-allowed'
        }
      },
      dark: {
        color: 'white',
        '&[data-state="active"]': {
          textShadow: '0px 0px 1px currentColor',
          boxShadow: 'inset 0 -2px 0 0 currentColor'
        },
        '&:not([data-disabled]):hover': {
          bg: opacify(-0.8, 'white')
        },
        '&:not([data-disabled]):active': {
          bg: opacify(-0.7, 'white'),
          boxShadow: 'none'
        },
        '&[data-disabled],&[data-disabled]:hover': {
          color: '$tonal200',
          cursor: 'not-allowed'
        }
      }
    }
  }
})

interface TabTriggerProps
  extends React.ComponentProps<typeof StyledTabTrigger> {
  value: string
  disabled?: boolean
}

export const TabTrigger: React.FC<TabTriggerProps> = ({
  children,
  theme,
  disabled = false,
  css,
  ...otherProps
}) => (
  <StyledTabTrigger css={css} disabled={disabled} theme={theme} {...otherProps}>
    {children}
  </StyledTabTrigger>
)

TabTrigger.displayName = 'TabTrigger'
