import type { Theme } from '@atom-learning/theme'
import * as atomTheme from '@atom-learning/theme'
import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

export const utils = {
  bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value
  }),

  inset: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    top: value,
    right: value,
    bottom: value,
    left: value
  }),

  size: (value: Stitches.ScaleValue<'size'> | number | string) => ({
    height: value,
    width: value
  }),

  p: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    padding: value
  }),
  pt: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    paddingTop: value
  }),
  pr: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    paddingRight: value
  }),
  pb: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    paddingBottom: value
  }),
  pl: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    paddingLeft: value
  }),
  px: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    paddingTop: value,
    paddingBottom: value
  }),

  m: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    margin: value
  }),
  mt: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    marginTop: value
  }),
  mr: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    marginRight: value
  }),
  mb: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    marginBottom: value
  }),
  ml: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    marginLeft: value
  }),
  mx: (value: Stitches.ScaleValue<'space'> | number | string) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: Stitches.ScaleValue<'space'> | number | string) => ({
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
  hover: '(hover: hover)'
}

const stitchesConfig = createStitches({
  theme: atomTheme as Theme,
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

export type CSS = Stitches.CSS<typeof stitchesConfig>
