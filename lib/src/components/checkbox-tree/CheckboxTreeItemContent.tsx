import * as React from 'react'

import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'
import { Tree } from '~/components/tree'
import { styled } from '~/stitches'

const StyledItemContent = styled(Flex, {
  maxWidth: '100%'
})

type CheckboxTreeItemContentProps = React.ComponentProps<typeof Flex>

export const CheckboxTreeItemContent = ({
  children,
  ...rest
}: CheckboxTreeItemContentProps): JSX.Element => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Stitches polymorphic components issue due to `as="label"`
    <StyledItemContent gap={2} align="center" as="label" {...rest}>
      {
        React.Children.map(children, (child) => {
          if (typeof child === 'string' || typeof child === 'number') {
            return <Tree.Text>{child}</Tree.Text>
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
