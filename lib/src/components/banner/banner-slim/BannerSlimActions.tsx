import * as React from 'react'

import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

import { Flex } from '../../flex'
import { useBannerContext } from '../BannerContext'

const toWidth = {
  sm: '100%',
  md: 'auto'
}

export const BannerSlimActions: React.FC<React.ComponentProps<typeof Flex>> = ({
  children,
  css,
  ...props
}) => {
  const { size } = useBannerContext()
  const width = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toWidth[s]),
    [size]
  )
  return (
    <Flex gap="4" css={{ p: '$4', width, ...css }} {...props}>
      {children}
    </Flex>
  )
}

BannerSlimActions.displayName = 'BannerSlimActions'
