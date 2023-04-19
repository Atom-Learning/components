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
        gap: '$2',
        '& > button': {
          width: '100%'
        }
      },
      md: {
        flexDirection: 'row',
        gap: 'calc($4 + $1)'
      }
    }
  }
})

export const BannerActions: React.FC<React.ComponentProps<typeof Flex>> = ({
  children,
  ...props
}) => {
  const { size } = useBannerContext()
  const INVALID_CHILDREN_MESSAGE = `A maximum of ${MAX_ALLOWED_CHILDREN} ${BannerButton.displayName} component(s) are permitted as children of ${BannerActions.displayName}`

  invariant(
    React.Children.count(children) <= MAX_ALLOWED_CHILDREN,
    INVALID_CHILDREN_MESSAGE
  )

  return (
    <StyledActionsContainer containerSize={size} {...props}>
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
    </StyledActionsContainer>
  )
}

BannerActions.displayName = 'BannerActions'
