import { Content, Root } from '@radix-ui/react-tabs'
import * as React from 'react'

import { styled } from '~/stitches'

import { TriggerListWrapper } from './TabsTriggerList'
import { TabTrigger } from './TabTrigger'
import { passPropsToChildren } from '~/utilities/pass-props-to-children'

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
  Trigger: typeof TabTrigger
  Content: typeof StyledTabContent
} = ({ theme = 'light', children, ...remainingProps }) => (
  <StyledRoot theme={theme} {...remainingProps}>
    {passPropsToChildren(children, { theme }, [
      TriggerListWrapper,
      StyledTabContent
    ])}
  </StyledRoot>
)

Tabs.TriggerList = TriggerListWrapper
Tabs.Trigger = TabTrigger
Tabs.Content = StyledTabContent

Tabs.displayName = 'Tabs'
