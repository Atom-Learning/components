import { createTheme } from '~/stitches'

export const colorSchemes = {}

const generateColors = ({ prefix, colorName, color0 = '' }) => {
  const colors = {}
  let i = 1
  if (color0) {
    colors[`${prefix}${i}`] = color0
    i++
  }
  let k = 1
  for (i; i <= 11; i++) {
    colors[`${prefix}${i}`] = `$${colorName}${k * 100}`
    k++
  }
  return colors
}

colorSchemes['interactive-loContrast'] = createTheme({
  colors: {
    interactiveForeground: '$foreground',
    interactive1: '$accent1',
    interactive2: '$accent2',
    interactive3: '$accent3'
  }
})

colorSchemes['interactive-hiContrast'] = createTheme({
  colors: {
    interactiveForeground: '$foreground7plus',
    interactive1: '$accent9',
    interactive2: '$accent10',
    interactive3: '$accent11'
  }
})

type TcolorSetup = {
  colorName: string
  color0?: string
}

export const bases = {
  primary1: { colorName: 'primary', color0: '#FFFFFF' },
  primary2: { colorName: 'primary' },
  grey1: { colorName: 'grey', color0: '#FFFFFF' },
  grey2: { colorName: 'grey' },
  blue1: { colorName: 'blue', color0: '#FFFFFF' },
  blue2: { colorName: 'blue' },
  purple1: { colorName: 'purple', color0: '#FFFFFF' },
  purple2: { colorName: 'purple' },
  cyan1: { colorName: 'cyan', color0: '#FFFFFF' },
  cyan2: { colorName: 'cyan' },
  green1: { colorName: 'green', color0: '#FFFFFF' },
  green2: { colorName: 'green' },
  magenta1: { colorName: 'magenta', color0: '#FFFFFF' },
  magenta2: { colorName: 'magenta' },
  red1: { colorName: 'red', color0: '#FFFFFF' },
  red2: { colorName: 'red' },
  teal1: { colorName: 'teal', color0: '#FFFFFF' },
  teal2: { colorName: 'teal' },
  orange1: { colorName: 'orange', color0: '#FFFFFF' },
  orange2: { colorName: 'orange' },
  yellow1: { colorName: 'yellow', color0: '#FFFFFF' },
  yellow2: { colorName: 'yellow' },
  lime1: { colorName: 'lime', color0: '#FFFFFF' },
  lime2: { colorName: 'lime' }
}
const generateBase = () => {
  Object.entries(bases).forEach(
    ([name, { colorName, color0 = '' }]: [string, TcolorSetup]) => {
      const themeName = `base-${name}`
      colorSchemes[themeName] = createTheme({
        colors: {
          foreground: '$grey1000',
          foreground7plus: '#FFFFFF',
          ...generateColors({ prefix: 'base', colorName, color0 })
        }
      })
    }
  )
}

export const accents = {
  primary1: { colorName: 'primary', color0: '#FFFFFF' },
  primary2: { colorName: 'primary' },
  grey1: { colorName: 'grey', color0: '#FFFFFF' },
  grey2: { colorName: 'grey' },
  blue1: { colorName: 'blue', color0: '#FFFFFF' },
  blue2: { colorName: 'blue' },
  purple1: { colorName: 'purple', color0: '#FFFFFF' },
  purple2: { colorName: 'purple' },
  cyan1: { colorName: 'cyan', color0: '#FFFFFF' },
  cyan2: { colorName: 'cyan' },
  green1: { colorName: 'green', color0: '#FFFFFF' },
  green2: { colorName: 'green' },
  magenta1: { colorName: 'magenta', color0: '#FFFFFF' },
  magenta2: { colorName: 'magenta' },
  red1: { colorName: 'red', color0: '#FFFFFF' },
  red2: { colorName: 'red' },
  teal1: { colorName: 'teal', color0: '#FFFFFF' },
  teal2: { colorName: 'teal' },
  orange1: { colorName: 'orange', color0: '#FFFFFF' },
  orange2: { colorName: 'orange' },
  yellow1: { colorName: 'yellow', color0: '#FFFFFF' },
  yellow2: { colorName: 'yellow' },
  lime1: { colorName: 'lime', color0: '#FFFFFF' },
  lime2: { colorName: 'lime' }
}
const generateAccent = () => {
  Object.entries(accents).forEach(
    ([name, { colorName, color0 = '' }]: [string, TcolorSetup]) => {
      const themeName = `accent-${name}`
      colorSchemes[themeName] = createTheme({
        colors: generateColors({ prefix: 'accent', colorName, color0 })
      })
    }
  )
}

generateBase()
generateAccent()
