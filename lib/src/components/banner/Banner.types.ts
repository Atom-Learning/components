import type { TcolorScheme } from '~/experiments/color-scheme'

export type TBannerEmphasis = 'hiContrast' | 'midContrast' | 'loContrast'
export type TBannerSizes = 'sm' | 'md'
export type TBannerElements =
  | 'background'
  | 'title'
  | 'description'
  | 'primaryButtonBackground'
  | 'primaryButtonColor'
  | 'secondaryButtonBackground'
  | 'secondaryButtonColor'

export interface IBannerContextValue {
  colorScheme: TcolorScheme
  emphasis: TBannerEmphasis
  size: TBannerSizes
}
