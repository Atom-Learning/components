import * as fromMd from 'mdast-util-from-markdown'
import * as React from 'react'

import { Box } from '../box/Box'
import { Divider } from '../divider/Divider'
import { Heading } from '../heading/Heading'
import { Image } from '../image/Image'
import { Link } from '../link/Link'
import { List } from '../list/List'
import { StackContent } from '../stack-content/StackContent'
import { Text } from '../text/Text'

type MarkdownContentProps = { content: string }

const handleNode = (node) => {
  if (node.type === 'heading') {
    return (
      <Heading
        as={`h${node.depth}`}
        size={
          node.depth === 1
            ? 'xl'
            : node.depth === 2
            ? 'lg'
            : node.depth === 3
            ? 'md'
            : node.depth === 4
            ? 'sm'
            : 'xs'
        }
      >
        {node.children.map(handleNode)}
      </Heading>
    )
  }
  if (node.type === 'thematicBreak') {
    return <Divider css={{ my: '$4' }} />
  }
  if (node.type === 'image') {
    return <Image src={node.url} alt={node.alt} />
  }
  if (node.type === 'code') {
    return (
      <Box
        as="pre"
        css={{
          bg: '$tonal200',
          p: '$3',
          borderRadius: '$1',
          lineHeight: 1.4,
          fontFamily: '$mono',
          fontSize: '$sm'
        }}
      >
        {node.value}
      </Box>
    )
  }
  if (node.type === 'paragraph') {
    return <Text>{node.children.map(handleNode)}</Text>
  }
  if (node.type === 'list') {
    return (
      <List as={node.ordered ? 'ol' : 'ul'}>
        {node.children.map(handleNode)}
      </List>
    )
  }
  if (node.type === 'listItem') {
    return <List.Item>{node.children.map(handleNode)}</List.Item>
  }
  if (node.type === 'strong') {
    return <strong>{node.children.map(handleNode)}</strong>
  }
  if (node.type === 'emphasis') {
    return <em>{node.children.map(handleNode)}</em>
  }
  if (node.type === 'text') {
    return node.value
  }
  if (node.type === 'inlineCode') {
    return (
      <Box
        as="pre"
        css={{
          display: 'inline-block',
          bg: '$tonal200',
          p: '$0 $1',
          borderRadius: '$0',
          fontFamily: '$mono',
          fontSize: '85%'
        }}
      >
        {node.value}
      </Box>
    )
  }
  if (node.type === 'link') {
    return (
      <Link title={node.title} href={node.url}>
        {node.children.map(handleNode)}
      </Link>
    )
  }
}

export const MarkdownContent: React.FC<MarkdownContentProps> = (props) => {
  const AST = fromMd(props.content)

  return (
    <StackContent
      css={{
        '& strong': { fontWeight: 600 },
        '& em': { fontStyle: 'italic' }
      }}
    >
      {AST.children.map(handleNode)}
    </StackContent>
  )
}

MarkdownContent.displayName = 'MarkdownContent'
