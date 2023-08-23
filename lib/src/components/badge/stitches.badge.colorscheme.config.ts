import { createTheme } from '~/stitches'

export const colorSchemes = {}

colorSchemes['non-semantic'] = createTheme('non-semantic', {
  colors: {
    textSubtle: '$accent10',
    backgroundSubtle: '$accent2',
    textBold: '$foreground7plus',
    backgroundBold: '$accent9'
  }
})

colorSchemes['info'] = createTheme('info', {
  colors: {
    textSubtle: '$blue900',
    backgroundSubtle: '$blue100',
    textBold: '#FFF',
    backgroundBold: '$blue800'
  }
})

colorSchemes['neutral'] = createTheme('neutral', {
  colors: {
    textSubtle: '$grey900',
    backgroundSubtle: '$grey100',
    textBold: '#FFF',
    backgroundBold: '$grey800'
  }
})

colorSchemes['success'] = createTheme('success', {
  colors: {
    textSubtle: '$successMid',
    backgroundSubtle: '$successLight',
    textBold: '#FFF',
    backgroundBold: '$success'
  }
})

colorSchemes['danger'] = createTheme('danger', {
  colors: {
    textSubtle: '$dangerMid',
    backgroundSubtle: '$dangerLight',
    textBold: '#FFF',
    backgroundBold: '$danger'
  }
})

colorSchemes['warning'] = createTheme('warning', {
  colors: {
    textSubtle: '$warningText',
    backgroundSubtle: '$warningLight',
    textBold: '$grey1000',
    backgroundBold: '$warning'
  }
})
