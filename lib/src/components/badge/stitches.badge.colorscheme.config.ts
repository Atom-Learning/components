import { createTheme } from '~/stitches'

/*
 * Semantic themes
 */

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

/*
 * Non-semantic themes
 */

const grey = createTheme('grey', {
  colors: {
    textSubtle: '$grey1000',
    backgroundSubtle: '$grey200',
    textBold: '#FFF',
    backgroundBold: '$grey800'
  }
})

const blue = createTheme('blue', {
  colors: {
    textSubtle: '$blue1000',
    backgroundSubtle: '$blue200',
    textBold: '#FFF',
    backgroundBold: '$blue800'
  }
})

const purple = createTheme('purple', {
  colors: {
    textSubtle: '$purple1000',
    backgroundSubtle: '$purple200',
    textBold: '#FFF',
    backgroundBold: '$purple800'
  }
})

const cyan = createTheme('cyan', {
  colors: {
    textSubtle: '$cyan1000',
    backgroundSubtle: '$cyan200',
    textBold: '#FFF',
    backgroundBold: '$cyan800'
  }
})

const green = createTheme('green', {
  colors: {
    textSubtle: '$green1000',
    backgroundSubtle: '$green200',
    textBold: '#FFF',
    backgroundBold: '$green800'
  }
})

const magenta = createTheme('magenta', {
  colors: {
    textSubtle: '$magenta1000',
    backgroundSubtle: '$magenta200',
    textBold: '#FFF',
    backgroundBold: '$magenta800'
  }
})

const red = createTheme('red', {
  colors: {
    textSubtle: '$red1000',
    backgroundSubtle: '$red200',
    textBold: '#FFF',
    backgroundBold: '$red800'
  }
})

const teal = createTheme('teal', {
  colors: {
    textSubtle: '$teal1000',
    backgroundSubtle: '$teal200',
    textBold: '#FFF',
    backgroundBold: '$teal800'
  }
})

const orange = createTheme('orange', {
  colors: {
    textSubtle: '$orange1000',
    backgroundSubtle: '$orange200',
    textBold: '$grey1200',
    backgroundBold: '$orange600'
  }
})

const yellow = createTheme('yellow', {
  colors: {
    textSubtle: '$yellow1000',
    backgroundSubtle: '$yellow200',
    textBold: '$grey1200',
    backgroundBold: '$yellow500'
  }
})

const lime = createTheme('lime', {
  colors: {
    textSubtle: '$lime1000',
    backgroundSubtle: '$lime200',
    textBold: '$grey1200',
    backgroundBold: '$lime600'
  }
})

export const colorSchemes = {
  info,
  neutral,
  success,
  danger,
  warning,
  grey,
  blue,
  purple,
  cyan,
  green,
  magenta,
  red,
  teal,
  orange,
  yellow,
  lime
}
