import React from 'react'

import { styled } from '~/stitches'

import { TreeCollapsible } from './TreeCollapsible'
import { TreeCollapsibleContent } from './TreeCollapsibleContent'
import { TreeCollapsibleTrigger } from './TreeCollapsibleTrigger'
import { TreeIcon } from './TreeIcon'
import { TreeItem } from './TreeItem'
import { TreeItemContent } from './TreeItemContent'
import { TreeList } from './TreeList'
import { TreeText } from './TreeText'

const StyledRoot = styled(TreeList, {
  width: '100%'
})

type TTreeProps = React.ComponentProps<typeof StyledRoot>

type TTreeType = React.FC<TTreeProps> & {
  Collapsible: typeof TreeCollapsible
  CollapsibleContent: typeof TreeCollapsibleContent
  CollapsibleTrigger: typeof TreeCollapsibleTrigger
  Item: typeof TreeItem
  ItemContent: typeof TreeItemContent
  Icon: typeof TreeIcon
  Text: typeof TreeText
}

export const Tree = (({ children, ...rest }) => {
  return (
    <StyledRoot {...rest}>{children}</StyledRoot>
  )
}) as TTreeType

Tree.Collapsible = TreeCollapsible
Tree.CollapsibleContent = TreeCollapsibleContent
Tree.CollapsibleTrigger = TreeCollapsibleTrigger
Tree.Item = TreeItem
Tree.ItemContent = TreeItemContent
Tree.Icon = TreeIcon
Tree.Text = TreeText
