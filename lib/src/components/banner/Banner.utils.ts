import { TBannerElements, TBannerEmphasis } from './Banner.types'

const elementEmphasisMap: Record<
  TBannerEmphasis,
  Record<TBannerElements, string>
> = {
  hiContrast: {
    background: '$base11',
    title: '$base1',
    description: '$grey100',
    primaryButtonBackground: '$base1',
    primaryButtonColor: '$primary',
    secondaryButtonBackground: '',
    secondaryButtonColor: '$base1'
  },
  loContrast: {
    background: '$base1',
    description: '$tonal900',
    title: '$grey1000',
    primaryButtonBackground: '$primary',
    primaryButtonColor: '$base1',
    secondaryButtonBackground: '',
    secondaryButtonColor: '$primary'
  },
  midContrast: {
    background: '$base3',
    description: '$tonal900',
    title: '$grey1000',
    primaryButtonBackground: '$primary',
    primaryButtonColor: '$base1',
    secondaryButtonBackground: '',
    secondaryButtonColor: '$primary'
  }
}

export const resolveEmphasis = (
  element: TBannerElements,
  emphasis?: TBannerEmphasis
): string => (emphasis ? elementEmphasisMap[emphasis][element] : '')
