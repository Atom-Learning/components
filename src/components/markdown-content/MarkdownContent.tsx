import directive from 'mdast-util-directive'
import fromMarkdown from 'mdast-util-from-markdown'
import syntax from 'micromark-extension-directive'
import * as React from 'react'

import { CSS } from '~/stitches'

import { StackContent } from '../stack-content/StackContent'
import {
  MarkdownCode,
  MarkdownEmphasis,
  MarkdownHeading,
  MarkdownImage,
  MarkdownInlineCode,
  MarkdownLink,
  MarkdownList,
  MarkdownListItem,
  MarkdownParagraph,
  MarkdownStrong,
  MarkdownText,
  MarkdownThematicBreak
} from './components'

type HandleNode = (node) => JSX.Element | null

type MarkdownContentProps = {
  content: string
  customComponents?: {
    [key: string]: React.FC<{
      node: any
      handleNode: HandleNode
    }>
  }
  css?: CSS
}

const defaultComponentsMap = {
  code: MarkdownCode,
  emphasis: MarkdownEmphasis,
  heading: MarkdownHeading,
  inlineCode: MarkdownInlineCode,
  image: MarkdownImage,
  link: MarkdownLink,
  list: MarkdownList,
  listItem: MarkdownListItem,
  paragraph: MarkdownParagraph,
  strong: MarkdownStrong,
  text: MarkdownText,
  thematicBreak: MarkdownThematicBreak
}

const generateNodeKey = (node) => {
  if (node.position?.start) {
    const { line, column, offset } = node.position?.start
    return `${node.type}${line}${column}${offset}`
  }

  return `${node.type}${+new Date()}`
}

export const MarkdownContent: React.FC<MarkdownContentProps> = ({
  content,
  customComponents = {},
  css
}) => {
  const AST = fromMarkdown(content, {
    extensions: [syntax()],
    mdastExtensions: [directive.fromMarkdown]
  })

  const componentsMap = {
    ...defaultComponentsMap,
    ...customComponents
  }

  const handleNode: HandleNode = (node) => {
    const MarkdownComponent = componentsMap[node.type]

    return MarkdownComponent ? (
      <MarkdownComponent
        key={generateNodeKey(node)}
        node={node}
        handleNode={handleNode}
      />
    ) : null
  }

  return <StackContent css={css}>{AST.children.map(handleNode)}</StackContent>
}

MarkdownContent.displayName = 'MarkdownContent'
