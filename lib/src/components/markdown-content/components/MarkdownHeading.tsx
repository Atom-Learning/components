import { Content, Heading as HeadingType } from 'mdast'
import * as React from 'react'
import { Heading, HeadingProps } from '../../heading/Heading'

type MarkdownHeadingProps = {
  node: HeadingType
  handleNode: (node: Content) => React.ReactElement
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

export const MarkdownHeading: React.FC<MarkdownHeadingProps> = ({
  node,
  handleNode,
  ...rest
}) => {
  const { as, size } = getHeadingProps(node.depth)

  return (
    <Heading as={as} size={size} {...rest}>
      {node.children?.map(handleNode)}
    </Heading>
  )
}
