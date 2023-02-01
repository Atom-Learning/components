import { Root } from '@radix-ui/react-tabs'
import * as React from 'react'

import { styled } from '~/stitches'

import { TabsTriggerList } from './TabsTriggerList'
import { TabsTrigger } from './TabsTrigger'
import { TabsContent } from './TabsContent'

type TabsProps = React.ComponentProps<typeof StyledRoot>

const StyledRoot = styled(Root, { width: '100%' })

export const Tabs: React.FC<TabsProps> & {
  TriggerList: typeof TabsTriggerList
  Trigger: typeof TabsTrigger
  Content: typeof TabsContent
} = ({ children, ...remainingProps }) => {
  return <StyledRoot {...remainingProps}>{children}</StyledRoot>
}

Tabs.TriggerList = TabsTriggerList
Tabs.Trigger = TabsTrigger
Tabs.Content = TabsContent

Tabs.displayName = 'Tabs'
