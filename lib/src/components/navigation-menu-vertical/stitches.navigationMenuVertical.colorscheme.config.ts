import { createTheme } from '~/stitches'

const light = createTheme({
  colors: {
    text: '$foreground',
    background: 'white',
    backgroundHover: '$grey100',
    backgroundActive: '$grey200',
    textSelected: '$blue800',
    backgroundSelected: '$blue100'
  }
})

export const colorSchemes = {
  light
}
