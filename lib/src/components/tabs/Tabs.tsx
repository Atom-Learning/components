import { Root } from '@radix-ui/react-tabs'
import * as React from 'react'

import { styled } from '~/stitches'

import { TabsContent } from './TabsContent'
import { TabsTrigger } from './TabsTrigger'
import { TabsTriggerList } from './TabsTriggerList'

type TabsProps = React.ComponentProps<typeof StyledRoot>

const StyledRoot = styled(Root, { width: '100%' })

export const Tabs = Object.assign(StyledRoot, {
  TriggerList: TabsTriggerList,
  Trigger: TabsTrigger,
  Content: TabsContent
})

StyledRoot.displayName = 'Tabs'
