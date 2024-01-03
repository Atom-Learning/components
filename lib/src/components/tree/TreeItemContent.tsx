import * as React from 'react'

import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'
import { styled } from '~/stitches'

import { TreeIcon } from './TreeIcon'
import { TreeText } from './TreeText'

const StyledItemContent = styled(Flex, {
  width: '100%',
  position: 'relative',
  minHeight: '$3',
  pl: '$6'
})

type TreeItemContentProps = React.ComponentProps<typeof Flex>

export const TreeItemContent = React.forwardRef(
  (
    { children, ...rest }: TreeItemContentProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <StyledItemContent gap={2} align="center" ref={ref} {...rest}>
        {
          React.Children.map(children, (child) => {
            if (typeof child === 'string' || typeof child === 'number') {
              return <TreeText>{child}</TreeText>
            }
            if (React.isValidElement(child) && child.type === Icon) {
              return <TreeIcon {...child.props} />
            }
            return child
          }) as React.ReactElement[]
        }
      </StyledItemContent>
    )
  }
)
