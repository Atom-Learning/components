import { Content, Link as LinkType } from 'mdast'
import * as React from 'react'

import { Link } from '../../link'

type MarkdownLinkProps = {
  node: LinkType
  handleNode: (node: Content) => React.ReactElement
}

export const MarkdownLink = ({ node, handleNode }: MarkdownLinkProps) => (
  <Link title={node.title ?? undefined} href={node.url}>
    {node.children?.map(handleNode)}
  </Link>
)
