import invariant from 'invariant'
import * as React from 'react'

import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

import { Flex } from '../../flex'
import { useBannerContext } from '../BannerContext'
import { BannerRegularButton } from './BannerRegularButton'

const MAX_ALLOWED_CHILDREN = 2

const toGap = {
  sm: '$2',
  md: '$4'
}

const toDirection = {
  sm: 'column',
  md: 'row'
}

export const BannerRegularActions: React.FC<
  React.ComponentProps<typeof Flex>
> = ({ children, css, ...props }) => {
  const { size } = useBannerContext()

  const gap = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toGap[s]),
    [size]
  )

  const direction = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toDirection[s]),
    [size]
  )

  invariant(
    React.Children.count(children) <= MAX_ALLOWED_CHILDREN,
    `A maximum of ${MAX_ALLOWED_CHILDREN} ${BannerRegularButton.displayName} component(s) are permitted as children of ${BannerRegularActions.displayName}`
  )

  return (
    <Flex
      css={{
        gap,
        flexDirection: direction,
        ...css
      }}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        // if child is undefined or null, React.isValidElement returns false and hence error is thrown.
        // This line will prevent that from happening
        if (child == null) return child

        if (!React.isValidElement(child)) {
          throw new Error(
            `Child passed to ${BannerRegularActions.displayName} is not a valid element`
          )
        }

        invariant(
          child.type === BannerRegularButton,
          `Children of type ${child?.type} aren't permitted. Only an ${BannerRegularButton.displayName} component is allowed in ${BannerRegularActions.displayName}`
        )

        const propsToInject: Partial<
          React.ComponentProps<typeof BannerRegularButton>
        > = {
          // Override button appearance - make the second button outlined
          appearance: index > 0 ? 'outline' : undefined
        }

        return React.cloneElement(
          child as React.ReactElement<
            React.ComponentProps<typeof BannerRegularButton>
          >,
          propsToInject
        )
      })}
    </Flex>
  )
}

BannerRegularActions.displayName = 'BannerRegularActions'
