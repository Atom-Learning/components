import atomTheme from '@atom-learning/theme'
import { createCss, StitchesCss } from '@stitches/react'

export type CSSValue = number | string
export type CSSBlob = { [key: string]: CSSValue }

// TODO: assess how intuitive the team finds these
export const utils = {
  p: () => (value: CSSValue): CSSBlob => ({
    padding: value
  }),
  pt: () => (value: CSSValue): CSSBlob => ({
    paddingTop: value
  }),
  pr: () => (value: CSSValue): CSSBlob => ({
    paddingRight: value
  }),
  pb: () => (value: CSSValue): CSSBlob => ({
    paddingBottom: value
  }),
  pl: () => (value: CSSValue): CSSBlob => ({
    paddingLeft: value
  }),
  px: () => (value: CSSValue): CSSBlob => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: () => (value: CSSValue): CSSBlob => ({
    paddingTop: value,
    paddingBottom: value
  }),

  m: () => (value: CSSValue): CSSBlob => ({
    margin: value
  }),
  mt: () => (value: CSSValue): CSSBlob => ({
    marginTop: value
  }),
  mr: () => (value: CSSValue): CSSBlob => ({
    marginRight: value
  }),
  mb: () => (value: CSSValue): CSSBlob => ({
    marginBottom: value
  }),
  ml: () => (value: CSSValue): CSSBlob => ({
    marginLeft: value
  }),
  mx: () => (value: CSSValue): CSSBlob => ({
    marginLeft: value,
    marginRight: value
  }),
  my: () => (value: CSSValue): CSSBlob => ({
    marginTop: value,
    marginBottom: value
  }),
  bg: () => (value: string): CSSBlob => ({
    background: value
  }),
  size: () => (value: CSSValue | Array<CSSValue>): CSSBlob => {
    if (Array.isArray(value)) {
      const [height, width] = value
      return {
        height,
        width
      }
    }
    return {
      height: value,
      width: value
    }
  }
}

export const conditions = {
  sm: `@media (min-width: 550px)`,
  md: `@media (min-width: 800px)`,
  lg: `@media (min-width: 1100px)`,
  xl: `@media (min-width: 1350px)`,
  motion: `@media (prefers-reduced-motion)`,
  hover: `@media (hover: hover)`
}

const stitchesConfig = createCss({
  theme: atomTheme,
  utils,
  conditions
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
