import { Content, Root } from '@radix-ui/react-tabs'
import * as React from 'react'

import { styled } from '~/stitches'

import { TabTrigger } from './TabTrigger'
import { TriggerListWrapper, TriggerListFlexContainer } from './TabsTriggerList'
import { passPropsToChildren } from './utils'

type TabsProps = React.ComponentProps<typeof StyledRoot>

const StyledRoot = styled(Root, {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    theme: {
      light: {
        color: '$primary'
      },
      dark: {
        color: 'white'
      }
    }
  }
})

const StyledTabContent = styled(Content, {
  flexGrow: 1,
  fontFamily: '$body',
  variants: {
    theme: {
      light: {
        color: '$textForeground'
      },
      dark: {
        bg: '$primaryDark',
        color: 'white'
      }
    }
  }
})

export const Tabs: React.FC<TabsProps> & {
  TriggerList: typeof TriggerListWrapper
  TriggerListFlexContainer: typeof TriggerListFlexContainer
  Trigger: typeof TabTrigger
  Content: typeof StyledTabContent
} = ({ theme = 'light', children, ...remainingProps }) => (
  <StyledRoot theme={theme} {...remainingProps}>
    {passPropsToChildren(children, { theme }, [
      TriggerListWrapper,
      TriggerListFlexContainer,
      StyledTabContent
    ])}
  </StyledRoot>
)

Tabs.TriggerList = TriggerListWrapper
Tabs.TriggerListFlexContainer = TriggerListFlexContainer
Tabs.Trigger = TabTrigger
Tabs.Content = StyledTabContent

Tabs.displayName = 'Tabs'
