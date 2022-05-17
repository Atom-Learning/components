import { Content, List as ListType } from 'mdast'
import * as React from 'react'

import { CSS } from '~/stitches'

import { List } from '../../list'

type MarkdownListProps = {
  node: ListType
  handleNode: (node: Content) => React.ReactElement
  css?: CSS
}

export const MarkdownList: React.FC<MarkdownListProps> = ({
  node,
  handleNode,
  css
}) => (
  <List
    css={{ '& p:before, & p:after': { display: 'none' }, ...css } as CSS}
    ordered={node.ordered}
  >
    {node.children?.map(handleNode)}
  </List>
)
