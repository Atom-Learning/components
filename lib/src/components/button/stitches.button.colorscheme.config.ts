import { createTheme } from '~/stitches'

/*
 * Semantic themes
 */
const success = createTheme({
  colors: {
    textSolid: 'white',
    textSolidHover: 'white',
    textSolidActive: 'white',
    backgroundSolid: '$success',
    backgroundSolidHover: '$successMid',
    backgroundSolidActive: '$successDark',

    textOutline: '$success',
    textOutlineHover: '$successMid',
    textOutlineActive: '$successDark',
    backgroundOutline: 'rgba(255,255,255, 0)',
    backgroundOutlineHover: 'rgba(255,255,255, .5)',
    backgroundOutlineActive: 'rgba(255,255,255, .5)'
  }
})

const danger = createTheme({
  colors: {
    textSolid: 'white',
    textSolidHover: 'white',
    textSolidActive: 'white',
    backgroundSolid: '$danger',
    backgroundSolidHover: '$dangerMid',
    backgroundSolidActive: '$dangerDark',

    textOutline: '$danger',
    textOutlineHover: '$dangerMid',
    textOutlineActive: '$dangerDark',
    backgroundOutline: 'rgba(255,255,255, 0)',
    backgroundOutlineHover: 'rgba(255,255,255, .5)',
    backgroundOutlineActive: 'rgba(255,255,255, .5)'
  }
})

const warning = createTheme({
  colors: {
    textSolid: '$grey900',
    textSolidHover: '$grey1000',
    textSolidActive: '$grey1100',
    backgroundSolid: '$warning',
    backgroundSolidHover: '$warningMid',
    backgroundSolidActive: '$warningDark',

    textOutline: '$warning',
    textOutlineHover: '$warningText',
    textOutlineActive: '$warningText',
    backgroundOutline: 'rgba(255,255,255, 0)',
    backgroundOutlineHover: 'rgba(255,255,255, .5)',
    backgroundOutlineActive: 'rgba(255,255,255, .5)'
  }
})

/*
 * Non-semantic themes
 */
const primary = createTheme({
  colors: {
    textSolid: 'white',
    textSolidHover: 'white',
    textSolidActive: 'white',
    backgroundSolid: '$blue800',
    backgroundSolidHover: '$blue900',
    backgroundSolidActive: '$blue1000',

    textOutline: '$blue800',
    textOutlineHover: '$blue900',
    textOutlineActive: '$blue1000',
    backgroundOutline: 'rgba(255,255,255, 0)',
    backgroundOutlineHover: 'rgba(255,255,255, .5)',
    backgroundOutlineActive: 'rgba(255,255,255, .5)'
  }
})

const inverse = createTheme({
  colors: {
    textSolid: '$blue800',
    textSolidHover: '$blue900',
    textSolidActive: '$blue1000',
    backgroundSolid: 'white',
    backgroundSolidHover: '$blue100',
    backgroundSolidActive: '$blue200',

    textOutline: 'white',
    textOutlineHover: 'white',
    textOutlineActive: 'white',
    backgroundOutline: 'rgba(255,255,255, 0)',
    backgroundOutlineHover: 'rgba(255,255,255, .5)',
    backgroundOutlineActive: 'rgba(255,255,255, .5)'
  }
})

const secondary = createTheme({
  colors: {
    textSolid: 'white',
    textSolidHover: 'white',
    textSolidActive: 'white',
    backgroundSolid: '$blue1000',
    backgroundSolidHover: '$blue1100',
    backgroundSolidActive: '$blue1200',

    textOutline: '$blue1000',
    textOutlineHover: '$blue1100',
    textOutlineActive: '$blue1200',
    backgroundOutline: 'rgba(255,255,255, 0)',
    backgroundOutlineHover: 'rgba(255,255,255, .5)',
    backgroundOutlineActive: 'rgba(255,255,255, .5)'
  }
})

const neutral = createTheme({
  colors: {
    textSolid: 'white',
    textSolidHover: 'white',
    textSolidActive: 'white',
    backgroundSolid: '$grey800',
    backgroundSolidHover: '$grey900',
    backgroundSolidActive: '$grey1000',

    textOutline: '$grey800',
    textOutlineHover: '$grey900',
    textOutlineActive: '$grey1000',
    backgroundOutline: 'rgba(255,255,255, 0)',
    backgroundOutlineHover: 'rgba(255,255,255, .5)',
    backgroundOutlineActive: 'rgba(255,255,255, .5)'
  }
})


export const colorSchemes = {
  success,
  danger,
  warning,
  primary,
  inverse,
  secondary,
  neutral
}
