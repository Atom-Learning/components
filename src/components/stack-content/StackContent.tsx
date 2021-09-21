import * as React from 'react'

import type { CSS } from '~/stitches'
import { styled } from '~/stitches'

import { Divider } from '../divider/Divider'
import { Heading } from '../heading/Heading'
import { Image } from '../image/Image'
import { List } from '../list/List'
import {
  MarkdownHeading,
  MarkdownImage,
  MarkdownList,
  MarkdownParagraph,
  MarkdownThematicBreak
} from '../markdown-content/components'
import { Text } from '../text/Text'

const StyledStackContent = styled('div', {})

type StackContentProps = React.ComponentProps<typeof StyledStackContent> & {
  children: React.ReactNode
  css?: CSS
}

const cloneWithStyle = (child: React.ReactElement, style: CSS) =>
  React.cloneElement(child, {
    css: {
      ...style,
      ...child.props.css
    }
  })

export const StackContent: React.FC<StackContentProps> = ({
  children,
  ...remainingProps
}) => (
  <StyledStackContent {...remainingProps}>
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child
      }

      const type = child?.type

      if (type === Heading || type === MarkdownHeading) {
        return cloneWithStyle(child, {
          maxWidth: '65ch',
          '&:not(:first-child)': { mt: '$5' },
          '&:not(:last-child)': { mb: '$5' }
        })
      }

      if (
        type === Text ||
        type === MarkdownParagraph ||
        type === List ||
        type === MarkdownList
      ) {
        return cloneWithStyle(child, {
          maxWidth: '75ch',
          '&:not(:last-child)': { mb: '$5' }
        })
      }

      if (type === Divider || type === MarkdownThematicBreak) {
        return cloneWithStyle(child, {
          my: '$5'
        })
      }

      if (type === Image || type === MarkdownImage) {
        return cloneWithStyle(child, {
          display: 'block',
          '&:not(:first-child)': { mt: '$6' },
          '&:not(:last-child)': { mb: '$6' }
        })
      }

      return child
    })}
  </StyledStackContent>
)

StackContent.displayName = 'StackContent'
