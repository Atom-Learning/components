import { createStyled } from '@stitches/react'
export * from '@stitches/react'

export const tokens = {
  colors: {
    $tonal100: 'hsl(0, 0%, 15%)',
    $tonal200: 'hsl(0, 0%, 25%)',
    $tonal300: 'hsl(0, 0%, 40%)',
    $tonal400: 'hsl(0, 0%, 55%)',
    $tonal500: 'hsl(0, 2%, 70%)',
    $tonal600: 'hsl(0, 2%, 80%)',
    $tonal700: 'hsl(0, 6%, 90%)',
    $tonal800: 'hsl(0, 6%, 95%)',
    $tonal900: 'hsl(0, 6%, 97%)',

    $primary100: 'hsl(200, 75%, 95%)',
    $primary200: 'hsl(200, 74%, 86.5%)',
    $primary300: 'hsl(201, 74%, 78%)',
    $primary400: 'hsl(201, 74%, 69%)',
    $primary500: 'hsl(201, 74%, 60%)',
    $primary600: 'hsl(203, 66.5%, 54.5%)',
    $primary700: 'hsl(204, 62%, 49%)',
    $primary800: 'hsl(206, 72%, 43.5%)',
    $primary900: 'hsl(208, 85%, 38%)',

    $secondary300: 'hsl(215, 60%, 27%)',
    $secondary500: 'hsl(215, 60%, 19%)',
    $secondary700: 'hsl(228, 66%, 14%)',

    $tertiary300: 'hsl(220, 19%, 40%)',
    $tertiary500: 'hsl(219, 19.5%, 29%)',
    $tertiary700: 'hsl(218, 20%, 18.5%)',

    $successLight: 'hsl(137, 44.5%, 60%)',
    $success: 'hsl(137, 60%, 42.5%)',
    $successDark: 'hsl(137, 60%, 31.5%)',

    $warning: 'hsl(24 ,100%, 55%)',
    $warningDark: 'hsl(24 ,100%, 41%)',

    $dangerLight: 'hsl(354.5, 88%, 67%)',
    $danger: 'hsl(354.5, 70.5%, 53.5%)',
    $dangerDark: 'hsl(354.5, 70.5%, 40%)',

    $english: '#b7373f',
    $maths: '#31a6d8',
    $vr: '#0cd394',
    $nvr: '#ffaf02'
  },
  space: {
    $0: '2px',
    $1: '4px',
    $2: '8px',
    $3: '16px',
    $4: '32px',
    $5: '64px',
    $6: '128px'
  },
  sizes: {
    $0: '16px',
    $1: '32px',
    $2: '48px',
    $3: '64px'
  },
  fonts: {
    sans: "'urw-din', system-ui, -apple-system, 'Helvetica Neue', sans-serif",
    mono:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace"
  },
  fontSizes: {
    xs: '10px',
    sm: '13px',
    md: '16px',
    lg: '21px',
    xl: '28px',
    xxl: '37px',
    xxxl: '50px'
  },
  shadows: {
    $1:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
    $2:
      '0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
    $3:
      '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)'
  },
  radii: {
    $1: '3px',
    $2: '6px',
    $3: '12px',
    $4: '18px'
  }
}

export const utils = {
  p: (value: number | string) => ({
    padding: value
  }),
  pt: (value: number | string) => ({
    paddingTop: value
  }),
  pr: (value: number | string) => ({
    paddingRight: value
  }),
  pb: (value: number | string) => ({
    paddingBottom: value
  }),
  pl: (value: number | string) => ({
    paddingLeft: value
  }),
  px: (value: number | string) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: number | string) => ({
    paddingTop: value,
    paddingBottom: value
  }),

  m: (value: number | string) => ({
    margin: value
  }),
  mt: (value: number | string) => ({
    marginTop: value
  }),
  mr: (value: number | string) => ({
    marginRight: value
  }),
  mb: (value: number | string) => ({
    marginBottom: value
  }),
  ml: (value: number | string) => ({
    marginLeft: value
  }),
  mx: (value: number | string) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: number | string) => ({
    marginTop: value,
    marginBottom: value
  })
}

export const breakpoints = {
  sm: (rule: string): string => `@media (min-width: 550px) { ${rule} }`,
  md: (rule: string): string => `@media (min-width: 800px) { ${rule} }`,
  lg: (rule: string): string => `@media (min-width: 1100px) { ${rule} }`,
  xl: (rule: string): string => `@media (min-width: 1350px) { ${rule} }`,
  motion: (rule: string): string =>
    `@media (prefers-reduced-motion) { ${rule} }`,
  hover: (rule: string): string => `@media (hover: hover) { ${rule} }`
}

export const { styled, css } = createStyled({
  tokens,
  utils,
  breakpoints
})
