import { styled } from '~/stitches'

// default styling lifted from https://www.zachleat.com/web/fluid-images/#copy-and-paste
export const Image = styled('img', {
  verticalAlign: 'middle',
  maxWidth: '100%',
  '&[width]': {
    width: 'auto'
  },
  '&[width][height]': {
    height: 'auto'
  },
  '&[src$=".svg"]': {
    width: '100%',
    height: 'auto',
    maxWidth: 'none'
  }
})

Image.displayName = 'Image'
