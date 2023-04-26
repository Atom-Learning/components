import invariant from 'invariant'
import * as React from 'react'

import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

import { Stack } from '../../stack'
import { useBannerContext } from '../BannerContext'
import { BannerRegularButton } from './BannerRegularButton'

const MAX_ALLOWED_CHILDREN = 2

const toGap = {
  sm: 2,
  md: 4
}

export const BannerRegularActions: React.FC<
  React.ComponentProps<typeof Stack>
> = ({ children, ...props }) => {
  const { size } = useBannerContext()

  const gap = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toGap[s]),
    [size]
  )

  invariant(
    React.Children.count(children) <= MAX_ALLOWED_CHILDREN,
    `A maximum of ${MAX_ALLOWED_CHILDREN} ${BannerRegularButton.displayName} component(s) are permitted as children of ${BannerRegularActions.displayName}`
  )

  return (
    <Stack gap={gap} {...props}>
      {React.Children.map(children, (child, index) => {
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
    </Stack>
  )
}

BannerRegularActions.displayName = 'BannerRegularActions'
