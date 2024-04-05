import React from 'react'

import { styled } from '~/stitches'

import { TreeCollapsible } from './TreeCollapsible'
import { TreeCollapsibleContent } from './TreeCollapsibleContent'
import { TreeCollapsibleTrigger } from './TreeCollapsibleTrigger'
import { TreeIcon } from './TreeIcon'
import { TreeItem } from './TreeItem'
import { TreeList } from './TreeList'
import { TreeText } from './TreeText'

const StyledRoot = styled(TreeList, {})

type TreeProps = React.ComponentProps<typeof StyledRoot>

export const TreeRoot: React.ForwardRefExoticComponent<TreeProps> =
  React.forwardRef(({ children, ...rest }, ref) => {
    return (
      <StyledRoot {...rest} ref={ref} role="tree">
        {children}
      </StyledRoot>
    )
  })

export const Tree = Object.assign(TreeRoot, {
  Collapsible: TreeCollapsible,
  CollapsibleContent: TreeCollapsibleContent,
  CollapsibleTrigger: TreeCollapsibleTrigger,
  Item: TreeItem,
  Icon: TreeIcon,
  Text: TreeText
})
