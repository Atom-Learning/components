import { Content, List, Root } from '@radix-ui/react-tabs'
import * as React from 'react'

import { styled } from '~/stitches'

import { TabTrigger } from './TabTrigger'

const StyledRoot = styled(Root, {
  display: 'flex',
  flexDirection: 'column'
})

const StyledTabContent = styled(Content, {
  flexGrow: 1
})

const StyledTriggerList = styled(List, {
  flexShrink: 0,
  display: 'flex'
})

type TabsProps = React.ComponentProps<typeof StyledRoot>

export const Tabs: React.FC<TabsProps> & {
  TriggerList: typeof StyledTriggerList
  Trigger: typeof TabTrigger
  Content: typeof StyledTabContent
} = ({ children, ...remainingProps }) => (
  <StyledRoot {...remainingProps}>{children}</StyledRoot>
)

Tabs.TriggerList = StyledTriggerList
Tabs.Trigger = TabTrigger
Tabs.Content = StyledTabContent

Tabs.displayName = 'Tabs'
