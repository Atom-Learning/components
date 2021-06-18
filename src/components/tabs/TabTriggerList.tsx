import * as React from 'react'
import { List } from '@radix-ui/react-tabs'
import { CSS, styled } from '~/stitches'

const StyledTriggerList = styled(List, {
  flexShrink: 0,
  display: 'flex'
})

type TabTriggerListProps = React.ComponentProps<typeof StyledTriggerList>

export const TabTriggerList: React.FC<TabTriggerListProps> = ({
  children,
  css
}: TabTriggerListProps) => (
  <StyledTriggerList css={css}>{children}</StyledTriggerList>
)

TabTriggerList.displayName = 'TabTriggerList'
