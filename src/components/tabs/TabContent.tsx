import * as React from 'react'
import { Content } from '@radix-ui/react-tabs'
import { styled } from '~/stitches'

const StyledTabContent = styled(Content, {
  flexGrow: 1,
  padding: 20
})

type TabContentProps = React.ComponentProps<typeof StyledTabContent> & {
  value: string
}

export const TabContent: React.FC<TabContentProps> = ({
  children,
  css,
  value
}: TabContentProps) => (
  <StyledTabContent value={value} css={css}>
    {children}
  </StyledTabContent>
)

TabContent.displayName = 'TabContent'
