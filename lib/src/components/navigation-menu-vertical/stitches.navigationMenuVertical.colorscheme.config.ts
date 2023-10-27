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

// @TODO: This should go into the Marketing website instead!
const dark = createTheme({
  colors: {
    text: 'white',
    background: '$blue1200',
    backgroundHover: '$blue1100',
    backgroundActive: '$blue1000',
    textSelected: 'white',
    backgroundSelected: '$blue1100'
  }
})

export const colorSchemes = {
  light,
  dark
}
