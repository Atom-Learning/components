import { Text as TextType } from 'mdast'
import * as React from 'react'

type MarkdownTextProps = {
  node: TextType
}

export const MarkdownText = ({ node }: MarkdownTextProps): React.ReactNode =>
  node.value
