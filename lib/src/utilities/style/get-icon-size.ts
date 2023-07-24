import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

const toIconSize = {
  sm: 'sm',
  md: 'md',
  lg: 'md'
}

export const getFieldIconSize = (size: any) =>
  overrideStitchesVariantValue(size, (s) => toIconSize[s])
