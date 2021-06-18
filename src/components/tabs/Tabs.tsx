import * as React from 'react'
import { Root } from '@radix-ui/react-tabs'
import { styled } from '~/stitches'

const StyledRoot = styled(Root, {
  display: 'flex',
  flexDirection: 'column'
})

type TabsProps = React.ComponentProps<typeof StyledRoot>

export const Tabs: React.FC<TabsProps> = ({
  children,
  ...remainingProps
}: TabsProps) => {
  return <StyledRoot {...remainingProps}>{children}</StyledRoot>
}

Tabs.displayName = 'Tabs'
