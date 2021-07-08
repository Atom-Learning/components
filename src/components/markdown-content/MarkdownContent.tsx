import directive from 'mdast-util-directive'
import fromMarkdown from 'mdast-util-from-markdown'
import syntax from 'micromark-extension-directive'
import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../box/Box'
import { Divider } from '../divider/Divider'
import { Heading, HeadingProps } from '../heading/Heading'
import { Image } from '../image/Image'
import { Link } from '../link/Link'
import { List } from '../list/List'
import { StackContent } from '../stack-content/StackContent'
import { Text } from '../text/Text'

type MarkdownContentProps = {
  content: string
  handleDirectives?: (node, handleNode) => React.ReactElement
}

const getHeadingProps = (depth: number): HeadingProps => {
  switch (depth) {
    case 1:
      return { size: 'xl', as: 'h1' }
    case 2:
      return { size: 'lg', as: 'h2' }
    case 3:
      return { size: 'md', as: 'h3' }
    case 4:
      return { size: 'sm', as: 'h4' }
    case 5:
      return { size: 'xs', as: 'h5' }
    default:
      return { size: 'xs', as: 'h6' }
  }
}

const Code = styled(Box, {
  bg: '$tonal200',
  p: '$3',
  my: '$4',
  borderRadius: '$1',
  lineHeight: 1.4,
  fontFamily: '$mono',
  fontSize: '$sm'
})

const InlineCode = styled(Box, {
  display: 'inline-block',
  bg: '$tonal200',
  p: '$0 $1',
  borderRadius: '$0',
  fontFamily: '$mono',
  fontSize: '85%'
})

const StyledList = styled(List, {
  '& p:before, & p:after': { display: 'none' }
})

export const MarkdownContent: React.FC<MarkdownContentProps> = ({
  content,
  handleDirectives = () => null
}) => {
  const AST = fromMarkdown(content, {
    extensions: [syntax()],
    mdastExtensions: [directive.fromMarkdown]
  })

  const handleNode = (node) => {
    if (node.type === 'code') {
      return <Code as="pre">{node.value}</Code>
    }

    if (node.type === 'emphasis') {
      return <em>{node.children.map(handleNode)}</em>
    }

    if (node.type === 'heading') {
      const { size, as } = getHeadingProps(node.depth)

      return (
        <Heading as={as} size={size}>
          {node.children.map(handleNode)}
        </Heading>
      )
    }

    if (node.type === 'inlineCode') {
      return <InlineCode as="code">{node.value}</InlineCode>
    }

    if (node.type === 'image') {
      return <Image src={node.url} alt={node.alt} />
    }

    if (node.type === 'link') {
      return (
        <Link title={node.title} href={node.url}>
          {node.children.map(handleNode)}
        </Link>
      )
    }

    if (node.type === 'list') {
      return (
        <StyledList ordered={node.ordered}>
          {node.children.map(handleNode)}
        </StyledList>
      )
    }

    if (node.type === 'listItem') {
      return <List.Item>{node.children.map(handleNode)}</List.Item>
    }

    if (node.type === 'paragraph') {
      return <Text>{node.children.map(handleNode)}</Text>
    }

    if (node.type === 'strong') {
      return <strong>{node.children.map(handleNode)}</strong>
    }

    if (node.type === 'text') {
      return node.value
    }

    if (node.type === 'textDirective') {
      return handleDirectives(node, handleNode)
    }

    if (node.type === 'thematicBreak') {
      return <Divider css={{ my: '$4', width: '100%' }} />
    }

    return null
  }

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
