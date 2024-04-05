import { createTheme } from '~/stitches'

/*
 * Semantic themes
 */

const info = createTheme({
  colors: {
    textSubtle: '$infoMid',
    backgroundSubtle: '$infoLight',
    textBold: '#FFF',
    backgroundBold: '$info'
  }
})

const neutral = createTheme({
  colors: {
    textSubtle: '$grey900',
    backgroundSubtle: '$grey100',
    textBold: '#FFF',
    backgroundBold: '$grey800'
  }
})

const success = createTheme({
  colors: {
    textSubtle: '$successMid',
    backgroundSubtle: '$successLight',
    textBold: '#FFF',
    backgroundBold: '$success'
  }
})

const danger = createTheme({
  colors: {
    textSubtle: '$dangerMid',
    backgroundSubtle: '$dangerLight',
    textBold: '#FFF',
    backgroundBold: '$danger'
  }
})

const warning = createTheme({
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

const grey = createTheme({
  colors: {
    textSubtle: '$grey1000',
    backgroundSubtle: '$grey200',
    textBold: '#FFF',
    backgroundBold: '$grey800'
  }
})

const blue = createTheme({
  colors: {
    textSubtle: '$blue1000',
    backgroundSubtle: '$blue200',
    textBold: '#FFF',
    backgroundBold: '$blue800'
  }
})

const purple = createTheme({
  colors: {
    textSubtle: '$purple1000',
    backgroundSubtle: '$purple200',
    textBold: '#FFF',
    backgroundBold: '$purple800'
  }
})

const cyan = createTheme({
  colors: {
    textSubtle: '$cyan1000',
    backgroundSubtle: '$cyan200',
    textBold: '#FFF',
    backgroundBold: '$cyan800'
  }
})

const green = createTheme({
  colors: {
    textSubtle: '$green1000',
    backgroundSubtle: '$green200',
    textBold: '#FFF',
    backgroundBold: '$green800'
  }
})

const magenta = createTheme({
  colors: {
    textSubtle: '$magenta1000',
    backgroundSubtle: '$magenta200',
    textBold: '#FFF',
    backgroundBold: '$magenta800'
  }
})

const red = createTheme({
  colors: {
    textSubtle: '$red1000',
    backgroundSubtle: '$red200',
    textBold: '#FFF',
    backgroundBold: '$red800'
  }
})

const teal = createTheme({
  colors: {
    textSubtle: '$teal1000',
    backgroundSubtle: '$teal200',
    textBold: '#FFF',
    backgroundBold: '$teal800'
  }
})

const orange = createTheme({
  colors: {
    textSubtle: '$orange1000',
    backgroundSubtle: '$orange200',
    textBold: '$grey1200',
    backgroundBold: '$orange600'
  }
})

const yellow = createTheme({
  colors: {
    textSubtle: '$yellow1000',
    backgroundSubtle: '$yellow200',
    textBold: '$grey1200',
    backgroundBold: '$yellow500'
  }
})

const lime = createTheme({
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
