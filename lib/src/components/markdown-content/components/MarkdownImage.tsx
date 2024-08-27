import type { Image as ImageType } from 'mdast'
import * as React from 'react'

import { CSS } from '~/stitches'

import { Image } from '../../image/Image'

type MarkdownImageProps = {
  node: ImageType
  css?: CSS
}

export const MarkdownImage = ({ node, css }: MarkdownImageProps) => (
  <Image src={node.url} alt={node.alt ?? undefined} css={css} />
)
