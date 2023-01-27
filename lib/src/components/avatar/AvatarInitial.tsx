import * as React from 'react'

import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

import { Text } from '../text'
import { AvatarRootContext } from './Avatar'
import { AvatarPlaceholder } from './AvatarPlaceholder'

const toTextSize = {
  xs: 'xs',
  sm: 'sm',
  md: 'sm',
  lg: 'md',
  xl: 'md',
  xxl: 'lg'
}

export const AvatarInitial: React.FC<Record<string, never>> = () => {
  const rootContext = React.useContext(AvatarRootContext)
  const { name, size } = rootContext
  const textSize = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toTextSize[s]),
    [size]
  )

  if (!name) {
    return <AvatarPlaceholder />
  }

  return (
    <Text size={textSize} css={{ color: '$tonal400' }}>
      {name[0].toUpperCase()}
    </Text>
  )
}
