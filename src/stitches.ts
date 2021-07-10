import type { Theme } from '@atom-learning/theme'
import * as atomTheme from '@atom-learning/theme'
import { createCss, StitchesCss } from '@stitches/react'

type CSSValue = number | string
type CSSBlob = { [key: string]: CSSValue }

type UtilTheme<T> =
  | `$${keyof typeof atomTheme[T]}`
  | (string & Record<string, never>)

// TODO: assess how intuitive the team finds these
export const utils = {
  p: () => (value: UtilTheme<'space'>): CSSBlob => ({
    padding: value
  }),
  pt: () => (value: UtilTheme<'space'>): CSSBlob => ({
    paddingTop: value
  }),
  pr: () => (value: UtilTheme<'space'>): CSSBlob => ({
    paddingRight: value
  }),
  pb: () => (value: UtilTheme<'space'>): CSSBlob => ({
    paddingBottom: value
  }),
  pl: () => (value: UtilTheme<'space'>): CSSBlob => ({
    paddingLeft: value
  }),
  px: () => (value: UtilTheme<'space'>): CSSBlob => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: () => (value: UtilTheme<'space'>): CSSBlob => ({
    paddingTop: value,
    paddingBottom: value
  }),

  m: () => (value: UtilTheme<'space'>): CSSBlob => ({
    margin: value
  }),
  mt: () => (value: UtilTheme<'space'>): CSSBlob => ({
    marginTop: value
  }),
  mr: () => (value: UtilTheme<'space'>): CSSBlob => ({
    marginRight: value
  }),
  mb: () => (value: UtilTheme<'space'>): CSSBlob => ({
    marginBottom: value
  }),
  ml: () => (value: UtilTheme<'space'>): CSSBlob => ({
    marginLeft: value
  }),
  mx: () => (value: UtilTheme<'space'>): CSSBlob => ({
    marginLeft: value,
    marginRight: value
  }),
  my: () => (value: UtilTheme<'space'>): CSSBlob => ({
    marginTop: value,
    marginBottom: value
  }),

  inset: () => (value: UtilTheme<'space'>): CSSBlob => ({
    top: value,
    right: value,
    bottom: value,
    left: value
  }),
  size: () => (value: UtilTheme<'sizes'>): CSSBlob => ({
    height: value,
    width: value
  }),

  bg: () => (value: UtilTheme<'colors'>): CSSBlob => ({
    background: value
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

const stitchesConfig = createCss({
  theme: atomTheme as Theme,
  utils,
  media
})

export const {
  css,
  getCssString,
  global: globalCss,
  keyframes,
  styled,
  theme
} = stitchesConfig

export type CSS = StitchesCss<typeof stitchesConfig>
