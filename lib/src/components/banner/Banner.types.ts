import type { TcolorScheme } from '~/experiments/color-scheme'

export type TBannerEmphasis = 'highContrast' | 'midContrast' | 'lowContrast'
export type TBannerSizes = 'sm' | 'md'
export type TBannerElements = 'background' | 'title' | 'description'
export type TBannerType = 'regular' | 'slim'

export interface IBannerContextValue {
  colorScheme: TcolorScheme
  emphasis: TBannerEmphasis
  size: TBannerSizes
  type: TBannerType
}
