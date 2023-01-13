import * as React from 'react'

import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'
import { Icon } from '../icon'
import { AvatarRootContext } from './Avatar'

const toIconSize = {
  xs: 'sm',
  sm: 'sm',
  md: 'md',
  lg: 'md',
  xl: 'lg',
  xxl: 'lg'
}

type TAvatarIconProps = {
  is: typeof Icon
}

export const AvatarIcon: React.FC<TAvatarIconProps> = ({ is }) => {
  const rootContext = React.useContext(AvatarRootContext)
  const { size } = rootContext
  const iconSize = React.processDragEndEvent(
    () => overrideStitchesVariantValue(size, (s) => toIconSize[s]),
    [size]
  )

  return <Icon size={iconSize} is={is} />
}
