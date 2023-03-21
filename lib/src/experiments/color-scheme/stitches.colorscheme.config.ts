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

colorSchemes['interactive-loContrast'] = createTheme('interactive-loContrast', {
  colors: {
    interactiveForeground: '$foreground',
    interactive1: '$accent1',
    interactive2: '$accent2',
    interactive3: '$accent3'
  }
})

colorSchemes['interactive-hiContrast'] = createTheme('interactive-hiContrast', {
  colors: {
    interactiveForeground: '$foreground7plus',
    interactive1: '$accent9',
    interactive2: '$accent10',
    interactive3: '$accent11'
  }
})

export const bases = {
  grey1: { colorName: 'grey', color0: '#FFFFFF' },
  grey2: { colorName: 'grey' },
  blue1: { colorName: 'blue', color0: '#FFFFFF' },
  blue2: { colorName: 'blue' },
  purple1: { colorName: 'purple', color0: '#FFFFFF' },
  purple2: { colorName: 'purple' }
}
const generateBase = () => {
  Object.entries(bases).forEach(([name, { colorName, color0 = '' }]) => {
    const themeName = `base-${name}`
    colorSchemes[themeName] = createTheme(themeName, {
      colors: {
        foreground: '$grey1000',
        foreground7plus: '#FFFFFF',
        ...generateColors({ prefix: 'base', colorName, color0 })
      }
    })
  })
}

export const accents = {
  grey1: { colorName: 'grey', color0: '#FFFFFF' },
  grey2: { colorName: 'grey' },
  blue1: { colorName: 'blue', color0: '#FFFFFF' },
  blue2: { colorName: 'blue' },
  purple1: { colorName: 'purple', color0: '#FFFFFF' },
  purple2: { colorName: 'purple' }
}
const generateAccent = () => {
  Object.entries(accents).forEach(([name, { colorName, color0 = '' }]) => {
    const themeName = `accent-${name}`
    colorSchemes[themeName] = createTheme(themeName, {
      colors: generateColors({ prefix: 'accent', colorName, color0 })
    })
  })
}

generateBase()
generateAccent()
