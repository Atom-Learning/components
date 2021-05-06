import * as React from 'react'

import type { CSS } from '~/stitches'

import { Box } from '../box/Box'
import { Divider } from '../divider/Divider'
import { Heading } from '../heading/Heading'
import { Image } from '../image/Image'
import { List } from '../list/List'
import { Text } from '../text/Text'

type StackContentProps = {
  children: React.ReactNode
  css?: CSS
}

const cloneWithStyle = (child: React.ReactElement, style: CSS) =>
  React.cloneElement(child, { css: style })

export const StackContent: React.FC<StackContentProps> = ({
  children,
  css
}) => (
  <Box css={css}>
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child
      }

      const type = child?.type

      if (type === Heading) {
        return cloneWithStyle(child, {
          maxWidth: '75ch',
          '&:not(:last-child)': { my: '$4' }
        })
      }

      if (type === Text || type === List) {
        return cloneWithStyle(child, {
          maxWidth: '75ch',
          '&:not(:last-child)': { mb: '$4' }
        })
      }

      if (type === Divider) {
        return React.cloneElement(child, {
          'data-testid': '1',
          css: {
            my: '$5'
          }
        })
      }

      if (type === Image) {
        return cloneWithStyle(child, {
          display: 'block',
          '&:not(:last-child)': { my: '$5' }
        })
      }

      return child
    })}
  </Box>
)

StackContent.displayName = 'StackContent'
