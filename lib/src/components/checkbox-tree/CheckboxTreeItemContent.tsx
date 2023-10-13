import * as React from 'react'

import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'
import { Tree } from '~/components/tree'
import { styled } from '~/stitches'


const StyledItemContent = styled(Flex, {
  width: 0,
  flexGrow: 1
})

type TCheckboxTreeItemContentProps = React.ComponentProps<typeof Flex>


export const CheckboxTreeItemContent = ({ children,
  ...rest }: TCheckboxTreeItemContentProps): JSX.Element => {
  return (
    <StyledItemContent gap={2} align="center" as="label" {...rest}>
      {
        React.Children.map(children, (child) => {
          if (typeof child === 'string' || typeof child === 'number') {
            return (
              <Tree.Text>{child}</Tree.Text>
            )
          }
          if (React.isValidElement(child) && child.type === Icon) {
            return <Tree.Icon {...child.props} />
          }
          return child
        }) as React.ReactElement[]
      }
    </StyledItemContent>
  )
}
