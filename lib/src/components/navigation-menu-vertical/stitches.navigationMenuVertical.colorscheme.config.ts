import { createTheme } from '~/stitches'

const light = createTheme({
  colors: {
    text: '$foreground',
    background: '$base1',
    backgroundHover: '$base2',
    backgroundActive: '$base3',
    textSelected: '$accent9',
    backgroundSelected: '$accent2'
  }
})

export const colorSchemes = {
  light
}
