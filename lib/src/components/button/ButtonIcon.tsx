import * as React from 'react'

import { Icon } from '~/components/icon'
import { styled } from '~/stitches'
import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

import { ButtonContext } from './Button.context'

const toTextSize = {
  xs: 'sm',
  sm: 'md',
  md: 'md'
}

const StyledButtonIcon = styled(Icon, { flexShrink: 0 })
export const ButtonIcon = (
  props: React.ComponentProps<typeof StyledButtonIcon>
) => {
  const { size: buttonSize } = React.useContext(ButtonContext)

  const size = React.useMemo(
    () => overrideStitchesVariantValue(buttonSize, (s) => toTextSize[s]),
    [buttonSize]
  )

  return <StyledButtonIcon size={size} {...props} />
}
