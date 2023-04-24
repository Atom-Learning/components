import invariant from 'invariant'
import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../flex'
import { BannerButton } from './BannerButton'
import { useBannerContext } from './BannerContext'

const MAX_ALLOWED_CHILDREN = 2

const StyledActionsContainer = styled(Flex, {
  variants: {
    containerSize: {
      sm: {
        flexDirection: 'column',
        gap: '$2'
      },
      md: {
        flexDirection: 'row',
        gap: '$4'
      }
    }
  }
})

export const BannerActions: React.FC<React.ComponentProps<typeof Flex>> = ({
  children,
  ...props
}) => {
  const { size } = useBannerContext()
  const INVALID_NUMBER_OF_CHILDREN = `A maximum of ${MAX_ALLOWED_CHILDREN} ${BannerButton.displayName} component(s) are permitted as children of ${BannerActions.displayName}`

  invariant(
    React.Children.count(children) <= MAX_ALLOWED_CHILDREN,
    INVALID_NUMBER_OF_CHILDREN
  )

  return (
    <StyledActionsContainer containerSize={size} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          throw new Error(
            `Child passed to ${BannerActions.displayName} is not a valid element`
          )
        }

        invariant(
          child.type === BannerButton,
          `Children of type ${child?.type} aren't permitted. Only an ${BannerButton.displayName} component is allowed in ${BannerActions.displayName}`
        )

        const propsToInject: Partial<
          React.ComponentProps<typeof BannerButton>
        > = {
          // Override button appearance - make the second button outlined
          appearance: index > 0 ? 'outline' : undefined,
          fullWidth: size === 'sm'
        }

        // Override button appearance - make the second button outlined
        return React.cloneElement(
          child as React.ReactElement<
            React.ComponentProps<typeof BannerButton>
          >,
          propsToInject
        )
      })}
    </StyledActionsContainer>
  )
}

BannerActions.displayName = 'BannerActions'
