import atomTheme from '@atom-learning/theme'
import { createCss } from '@stitches/react'

type CSSValue = number | string
export type CSSBlob = { [key: string]: CSSValue }

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
  })
}

export const conditions = {
  sm: `@media (min-width: 550px)`,
  md: `@media (min-width: 800px)`,
  lg: `@media (min-width: 1100px)`,
  xl: `@media (min-width: 1350px)`,
  motion: `@media (prefers-reduced-motion)`,
  hover: `@media (hover: hover)`
}

export const { styled, css, global: globalCSS } = createCss({
  theme: atomTheme,
  utils,
  conditions
})
