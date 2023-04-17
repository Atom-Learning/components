import { TBannerElements, TBannerEmphasis } from './Banner.types'

const elementEmphasisMap: Record<
  TBannerEmphasis,
  Record<TBannerElements, string>
> = {
  hiContrast: {
    background: '$base11',
    title: '$base1',
    description: '$grey100'
  },
  loContrast: {
    background: '$base1',
    description: '$tonal900',
    title: '$grey1000'
  },
  midContrast: {
    background: '$base3',
    description: '$tonal900',
    title: '$grey1000'
  }
}

export const resolveEmphasis = (
  element: TBannerElements,
  emphasis?: TBannerEmphasis
): string => (emphasis ? elementEmphasisMap[emphasis][element] : '')
