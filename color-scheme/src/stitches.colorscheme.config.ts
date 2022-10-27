import { createStitches } from '@stitches/react'
import { blue, blueA } from './blue'
import { slate, slateA } from './slate'

export const colorSchemes = {}

const generateColors = (tokenPrefix, colorName) => {
  const colors = {}
  for (let i = 1; i <= 10; i++) {
    colors[`${tokenPrefix}${i}`] = `$${colorName}${i}`
    colors[`${tokenPrefix}A${i}`] = `$${colorName}A${i}`
  }
  return colors
}

const white = 'white'
const black = '#191919'

export const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      background: white,
      foreground: black,
      foreground6plus: white,
      ...blue,
      ...blueA,
      ...slate,
      ...slateA
    }
  }
})

colorSchemes['interactive-loContrast1'] = createTheme(
  'interactive-loContrast1',
  {
    colors: {
      interactiveForeground: '$foreground',
      interactive1: white,
      interactive2: '$accent1',
      interactive3: '$accent2'
    }
  }
)

colorSchemes['interactive-loContrast2'] = createTheme(
  'interactive-loContrast2',
  {
    colors: {
      interactiveForeground: '$foreground',
      interactive1: '$accent1',
      interactive2: '$accent2',
      interactive3: '$accent3'
    }
  }
)

colorSchemes['interactive-hiContrast1'] = createTheme(
  'interactive-hiContrast1',
  {
    colors: {
      interactiveForeground: '$foreground6plus',
      interactive1: '$accent7',
      interactive2: '$accent8',
      interactive3: '$accent9'
    }
  }
)

colorSchemes['interactive-hiContrast2'] = createTheme(
  'interactive-hiContrast2',
  {
    colors: {
      interactiveForeground: '$foreground6plus',
      interactive1: '$accent8',
      interactive2: '$accent9',
      interactive3: '$accent10'
    }
  }
)

export const bases = {
  slate: 'slate'
}
const generateBase = () => {
  Object.entries(bases).forEach(([themeName, colorName]) => {
    const baseThemeName = `base-${themeName}`
    colorSchemes[baseThemeName] = createTheme(baseThemeName, {
      colors: generateColors('tonal', colorName)
    })
  })
}

export const accents = {
  slate: 'slate',
  blue: 'blue'
}
const generateAccent = () => {
  Object.entries(accents).forEach(([themeName, colorName]) => {
    const accentThemeName = `accent-${themeName}`
    colorSchemes[accentThemeName] = createTheme(accentThemeName, {
      colors: generateColors('accent', colorName)
    })
  })
}

generateBase()
generateAccent()
