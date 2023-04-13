import invariant from 'invariant'
import * as React from 'react'

import { Button } from '../button'
import { Flex } from '../flex'

const MAX_ALLOWED_CHILDREN = 2

export const BannerActions: React.FC<React.ComponentProps<typeof Flex>> = ({
  children,
  css,
  ...props
}) => {
  const INVALID_CHILDREN_MESSAGE = `A maximum of ${MAX_ALLOWED_CHILDREN} ${Button.displayName} component(s) are permitted as children of ${BannerActions.displayName}`

  invariant(
    React.Children.count(children) <= MAX_ALLOWED_CHILDREN,
    INVALID_CHILDREN_MESSAGE
  )

  return (
    <Flex css={{ gap: '$4', ...css }} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          throw new Error(INVALID_CHILDREN_MESSAGE)
        }

        invariant(
          child.type === Button,
          `Children of type ${child?.type} aren't permitted. Only an ${Button.displayName} component is allowed in ${BannerActions.displayName}`
        )

        return child
      })}
    </Flex>
  )
}

BannerActions.displayName = 'BannerActions'
