import { Content, ListItem } from 'mdast'
import * as React from 'react'

import { List } from '../../list'

type MarkdownListItemProps = {
  node: ListItem
  handleNode: (node: Content) => React.ReactElement
}

export const MarkdownListItem = ({
  node,
  handleNode
}: MarkdownListItemProps) => (
  <List.Item>{node.children?.map(handleNode)}</List.Item>
)
