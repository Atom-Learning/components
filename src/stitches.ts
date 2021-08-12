import * as atomTheme from '@atom-learning/theme'
import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

type CSSDeclaration = { [key: string]: number | string }

export const utils = {
  bg: (
    value: Stitches.PropertyValue<'backgroundColor'> | string
  ): CSSDeclaration => ({
    backgroundColor: value
  }),

  p: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    padding: value
  }),
  pt: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    paddingTop: value
  }),
  pr: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    paddingRight: value
  }),
  pb: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    paddingBottom: value
  }),
  pl: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    paddingLeft: value
  }),
  px: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    paddingTop: value,
    paddingBottom: value
  }),

  m: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    margin: value
  }),
  mt: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    marginTop: value
  }),
  mr: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    marginRight: value
  }),
  mb: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    marginBottom: value
  }),
  ml: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    marginLeft: value
  }),
  mx: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    marginTop: value,
    marginBottom: value
  }),

  inset: (
    value: Stitches.ScaleValue<'space'> | number | string
  ): CSSDeclaration => ({
    top: value,
    right: value,
    bottom: value,
    left: value
  }),

  size: (
    value: Stitches.ScaleValue<'size'> | number | string
  ): CSSDeclaration => ({
    height: value,
    width: value
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
  theme: atomTheme,
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
