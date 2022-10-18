import { Content, Root } from '@radix-ui/react-tabs'
import * as React from 'react'

import { styled } from '~/stitches'

import { TriggerListWrapper } from './TabsTriggerList'
import { TabTrigger } from './TabTrigger'

type TabsProps = React.ComponentProps<typeof StyledRoot>


const StyledRoot = styled(Root)

const StyledTabContent = styled(Content, {
  flexGrow: 1,
  fontFamily: '$body'
})

export const Tabs: React.FC<TabsProps> & {
  TriggerList: typeof TriggerListWrapper
  Trigger: typeof TabTrigger
  Content: typeof StyledTabContent
} = ({ children, ...remainingProps }) => {

  return (
    <StyledRoot {...remainingProps}>
      {children}
    </StyledRoot>
  )
}

Tabs.TriggerList = TriggerListWrapper
Tabs.Trigger = TabTrigger
Tabs.Content = StyledTabContent

Tabs.displayName = 'Tabs'
