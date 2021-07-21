import { Image as ImageType } from 'mdast'
import * as React from 'react'

import { CSS } from '~/stitches'

import { Image } from '../../image/Image'

type MarkdownImageProps = {
  node: ImageType
  css?: CSS
}

export const MarkdownImage: React.FC<MarkdownImageProps> = ({ node, css }) => (
  <Image src={node.url} alt={node.alt} css={css} />
)
