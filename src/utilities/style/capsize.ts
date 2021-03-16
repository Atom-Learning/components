import { CSS } from '~/stitches'

// https://seek-oss.github.io/capsize/
export const capsize = (margin: string): Record<string, CSS> => ({
  '&::before': {
    content: "''",
    marginBottom: margin,
    display: 'table'
  },
  '&::after': {
    content: "''",
    marginTop: margin,
    display: 'table'
  }
})
