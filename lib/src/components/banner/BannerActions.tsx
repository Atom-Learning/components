import invariant from 'invariant'
import * as React from 'react'

import { Flex } from '../flex'
import { BannerButton } from './BannerButton'

const MAX_ALLOWED_CHILDREN = 2

export const BannerActions: React.FC<React.ComponentProps<typeof Flex>> = ({
  children,
  css,
  ...props
}) => {
  const INVALID_CHILDREN_MESSAGE = `A maximum of ${MAX_ALLOWED_CHILDREN} ${BannerButton.displayName} component(s) are permitted as children of ${BannerActions.displayName}`

  invariant(
    React.Children.count(children) <= MAX_ALLOWED_CHILDREN,
    INVALID_CHILDREN_MESSAGE
  )

  return (
    <Flex css={{ gap: 'calc($4 + $1)', ...css }} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          throw new Error(INVALID_CHILDREN_MESSAGE)
        }

        invariant(
          child.type === BannerButton,
          `Children of type ${child?.type} aren't permitted. Only an ${BannerButton.displayName} component is allowed in ${BannerActions.displayName}`
        )

        // Override button appearance - make the second button outlined
        return index === 0
          ? child
          : React.cloneElement(
              child as React.ReactElement<
                React.ComponentProps<typeof BannerButton>
              >,
              { appearance: 'outline' }
            )
      })}
    </Flex>
  )
}

BannerActions.displayName = 'BannerActions'
