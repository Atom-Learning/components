import { Content } from '@radix-ui/react-tabs'

import { styled } from '~/stitches'

const StyledTabsContent = styled(Content, {
  flexGrow: 1,
  fontFamily: '$body'
})

export const TabsContent = StyledTabsContent

TabsContent.displayName = 'TabsContent'
