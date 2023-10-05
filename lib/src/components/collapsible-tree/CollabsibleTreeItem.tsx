import { Content, Root, Trigger } from '@radix-ui/react-collapsible'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledCollapsibleTreeItemRoot = styled(Root, {})

const StyledCollapsibleTreeItemTrigger = styled(Trigger, {})

const StyledCollapsibleTreeItemContent = styled(Content, {
  '&[data-state="closed"]': { display: 'none' }
})

type TCollapsibleItemProps = React.ComponentProps<typeof StyledCollapsibleTreeItemRoot>

export const CollapsibleItem = (props: TCollapsibleItemProps): JSX.Element => {

  return <StyledCollapsibleTreeItemRoot {...props} />
}
