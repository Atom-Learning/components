import * as React from 'react'

import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'

import { TreeIcon } from './TreeIcon'
import { TreeText } from './TreeText'

type TTreeItemContentProps = React.ComponentProps<typeof Flex>

export const TreeItemContent = ({
  children,
  ...rest
}: TTreeItemContentProps): JSX.Element => {
  return (
    <Flex gap={2} align="center" {...rest}>
      {
        React.Children.map(children, (child) => {
          if (typeof child === 'string' || typeof child === 'number') {
            return (
              <TreeText>{child}</TreeText>
            )
          }
          if (React.isValidElement(child) && child.type === Icon) {
            return <TreeIcon {...child.props} />
          }
          return child
        }) as React.ReactElement[]
      }
    </Flex>
  )
}
