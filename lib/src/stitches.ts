import type { Theme } from '@atom-learning/theme'
import * as atomTheme from '@atom-learning/theme'
import { themeMap } from '@atom-learning/theme/theme-map'
import type {
  CSS as StitchesCSS,
  PropertyValue,
  ScaleValue
} from '@stitches/react'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const utils = {
  bg: (value: PropertyValue<'background'>) => ({
    background: value
  }),

  size: (value: ScaleValue<'size'> | number | string) => ({
    height: value,
    width: value
  }),

  p: (value: ScaleValue<'space'> | number | string) => ({
    padding: value
  }),
  pt: (value: ScaleValue<'space'> | number | string) => ({
    paddingTop: value
  }),
  pr: (value: ScaleValue<'space'> | number | string) => ({
    paddingRight: value
  }),
  pb: (value: ScaleValue<'space'> | number | string) => ({
    paddingBottom: value
  }),
  pl: (value: ScaleValue<'space'> | number | string) => ({
    paddingLeft: value
  }),
  px: (value: ScaleValue<'space'> | number | string) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: ScaleValue<'space'> | number | string) => ({
    paddingTop: value,
    paddingBottom: value
  }),

  m: (value: ScaleValue<'space'> | number | string) => ({
    margin: value
  }),
  mt: (value: ScaleValue<'space'> | number | string) => ({
    marginTop: value
  }),
  mr: (value: ScaleValue<'space'> | number | string) => ({
    marginRight: value
  }),
  mb: (value: ScaleValue<'space'> | number | string) => ({
    marginBottom: value
  }),
  ml: (value: ScaleValue<'space'> | number | string) => ({
    marginLeft: value
  }),
  mx: (value: ScaleValue<'space'> | number | string) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: ScaleValue<'space'> | number | string) => ({
    marginTop: value,
    marginBottom: value
  })
}

export const media = {
  sm: '(min-width: 550px)',
  md: '(min-width: 800px)',
  lg: '(min-width: 1100px)',
  xl: '(min-width: 1350px)',
  reducedMotion: '(prefers-reduced-motion)',
  allowMotion: '(prefers-reduced-motion: no-preference)',
  hover: '(hover: hover)'
}

const stitchesConfig = createStitches({
  theme: atomTheme as Theme,
  themeMap: {
    ...defaultThemeMap,
    ...themeMap
  },
  utils,
  media
})

export const {
  css,
  getCssText,
  createTheme,
  globalCss,
  keyframes,
  styled,
  theme
} = stitchesConfig

export type CSS = StitchesCSS<typeof stitchesConfig>
