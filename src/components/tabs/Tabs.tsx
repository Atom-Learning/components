import { Content, Root } from '@radix-ui/react-tabs'
import React from 'react'
import { opacify } from 'polished'

import { styled, theme } from '~/stitches'

import { TabTrigger } from './TabTrigger'
import { TriggerListWrapper } from './TabsTriggerList'

type TabsProps = React.ComponentProps<typeof StyledRoot>

const StyledRoot = styled(Root, {
  display: 'flex',
  flexDirection: 'column',
  pt: '$4',
  px: '$2',
  variants: {
    appearance: {
      light: {
        'div[role="tab"]': {
          bg: 'white',
          '&[data-state="active"]': {
            color: '$primary',
            fontWeight: 600,
            boxShadow: 'inset 0 -2px 0 0 currentColor'
          },
          '&[data-state="inactive"]': {
            color: '$tonal500'
          },
          '&:hover': {
            color: '$primary',
            bg: opacify(-0.9, theme.colors.primary.value)
          },
          '&:active': {
            color: '$primary',
            bg: opacify(-0.8, theme.colors.primary.value),
            boxShadow: 'none'
          },
          '&:focus': {
            color: '$primary',
            boxShadow: 'inset 0 0 0 2px currentColor'
          },
          '&[data-disabled],&[data-disabled]:hover': {
            color: '$tonal200',
            cursor: 'default'
          }
        },
        'div[role="tabpanel"]': {
          bg: 'white',
          color: '$textForeground',
          fontFamily: '$body'
        },
        'div[role="tablist"]': {
          borderBottom: '1px solid $primaryDark'
        },
        'button[role="scrollbar"]': {
          bg: 'white !important',
          opacity: 0.8
        }
      },
      dark: {
        bg: '$primaryDark',
        color: 'white',
        'div[role="tab"]': {
          color: 'white',
          '&[data-state="active"]': {
            fontWeight: 600,
            boxShadow: 'inset 0 -2px 0 0 currentColor'
          },
          '&:hover': {
            bg: opacify(-0.8, 'white')
          },
          '&:active': {
            bg: opacify(-0.7, 'white'),
            boxShadow: 'none'
          },
          '&:focus': {
            boxShadow: 'inset 0 0 0 2px currentColor'
          },
          '&[data-disabled],&[data-disabled]:hover': {
            color: '$tonal200',
            cursor: 'default'
          }
        },
        'div[role="tabpanel"]': {
          bg: '$primaryDark',
          color: 'white',
          fontFamily: '$body'
        },
        'div[role="tablist"]': {
          borderBottom: '1px solid white'
        },
        'button[role="scrollbar"]': {
          bg: '$primaryDark !important',
          opacity: 0.8,
          color: 'white !important'
        }
      }
    }
  }
})

const StyledTabContent = styled(Content, {
  flexGrow: 1
})

export const Tabs: React.FC<TabsProps> & {
  TriggerList: typeof TriggerListWrapper
  Trigger: typeof TabTrigger
  Content: typeof StyledTabContent
} = ({ appearance = 'light', ...remainingProps }) => (
  <StyledRoot appearance={appearance} {...remainingProps} />
)

Tabs.TriggerList = TriggerListWrapper
Tabs.Trigger = TabTrigger
Tabs.Content = StyledTabContent

Tabs.displayName = 'Tabs'
