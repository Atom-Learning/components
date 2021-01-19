import { createStyled } from '@stitches/react'
export * from '@stitches/react'

export const utils = {
  p: (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value
  }),
  pt: (value: any) => ({
    paddingTop: value
  }),
  pr: (value: any) => ({
    paddingRight: value
  }),
  pb: (value: any) => ({
    paddingBottom: value
  }),
  pl: (value: any) => ({
    paddingLeft: value
  }),
  px: (value: any) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: any) => ({
    paddingTop: value,
    paddingBottom: value
  }),

  m: (value: any) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value
  }),
  mt: (value: any) => ({
    marginTop: value
  }),
  mr: (value: any) => ({
    marginRight: value
  }),
  mb: (value: any) => ({
    marginBottom: value
  }),
  ml: (value: any) => ({
    marginLeft: value
  }),
  mx: (value: any) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: any) => ({
    marginTop: value,
    marginBottom: value
  })
}

export const { styled, css } = createStyled({
  tokens: {
    space: {
      $0: '0px',
      $1: '4px',
      $2: '8px',
      $3: '16px',
      $4: '32px'
    },
    sizes: {
      $0: '16px',
      $1: '32px'
    },
    fonts: {
      body: 'system-ui, sans-serif',
      heading: '"urw-din",system-ui,-apple-system,"Helvetica Neue",sans-serif',
      monospace: 'Menlo, monospace'
    },
    fontSizes: {
      $sm: '11px',
      $md: '13px',
      $lg: '15px',
      $xl: '17px'
    },
    radii: {
      $1: '3px',
      $2: '5px',
      $3: '7px'
    },
    colors: {
      $primary: 'papayawhip',
      text: '#000',
      background: '#fff',
      primary: '#0e66b3',
      secondary: 'red',
      tonal: '#b3b1b1'
    }
  },
  utils
})
