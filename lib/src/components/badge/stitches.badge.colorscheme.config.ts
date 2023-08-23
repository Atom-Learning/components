import { createTheme } from '~/stitches'

const nonSemantic = createTheme('non-semantic', {
  colors: {
    textSubtle: '$accent10',
    backgroundSubtle: '$accent2',
    textBold: '$foreground7plus',
    backgroundBold: '$accent9'
  }
})

const info = createTheme('info', {
  colors: {
    textSubtle: '$blue900',
    backgroundSubtle: '$blue100',
    textBold: '#FFF',
    backgroundBold: '$blue800'
  }
})

const neutral = createTheme('neutral', {
  colors: {
    textSubtle: '$grey900',
    backgroundSubtle: '$grey100',
    textBold: '#FFF',
    backgroundBold: '$grey800'
  }
})

const success = createTheme('success', {
  colors: {
    textSubtle: '$successMid',
    backgroundSubtle: '$successLight',
    textBold: '#FFF',
    backgroundBold: '$success'
  }
})

const danger = createTheme('danger', {
  colors: {
    textSubtle: '$dangerMid',
    backgroundSubtle: '$dangerLight',
    textBold: '#FFF',
    backgroundBold: '$danger'
  }
})

const warning = createTheme('warning', {
  colors: {
    textSubtle: '$warningText',
    backgroundSubtle: '$warningLight',
    textBold: '$grey1000',
    backgroundBold: '$warning'
  }
})

export const colorSchemes = {
  'non-semantic': nonSemantic,
  info,
  neutral,
  success,
  danger,
  warning
}
