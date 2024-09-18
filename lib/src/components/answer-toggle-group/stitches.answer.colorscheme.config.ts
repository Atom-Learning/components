import { createTheme } from '~/stitches'

/*
 * Semantic themes
 */
const correct = createTheme({
  colors: {
    text: '$success',
    background: '$successLight',
    border: '$success',

    textSelected: 'white',
    backgroundSelected: '$success',
    borderSelected: 'transparent',

    feedbackIcon: '$success',
    feedbackIconBackground: 'white',

    identifierText: '$textSubtle',
    identifierBackground: '$grey100',
    identifierSelectedText: '$success',
    identifierSelectedBackground: '$grey100',

    // interactive
    textHover: '$successMid',
    backgroundHover: '$successLight',
    borderHover: '$successMid',

    textPressed: '$successDark',
    backgroundPressed: '$successLight',
    borderPressed: '$successDark',

    textSelectedHover: 'white',
    backgroundSelectedHover: '$successMid',
    textSelectedPressed: 'white',
    backgroundSelectedPressed: '$successDark',
  }
})

const incorrect = createTheme({
  colors: {
    text: '$danger',
    background: '$dangerLight',
    border: '$danger',

    textSelected: 'white',
    backgroundSelected: '$danger',
    borderSelected: 'transparent',

    feedbackIcon: '$danger',
    feedbackIconBackground: 'white',

    identifierText: '$textSubtle',
    identifierBackground: '$grey100',
    identifierSelectedText: '$danger',
    identifierSelectedBackground: '$grey100',

    // interactive
    textHover: '$dangerMid',
    backgroundHover: '$dangerLight',
    borderHover: '$dangerMid',

    textPressed: '$dangerDark',
    backgroundPressed: '$dangerLight',
    borderPressed: '$dangerDark',

    textSelectedHover: 'white',
    backgroundSelectedHover: '$dangerMid',
    textSelectedPressed: 'white',
    backgroundSelectedPressed: '$dangerDark',
  }
})

const skipped = createTheme({
  colors: {
    text: '$textRegular',
    background: 'white',
    border: '$grey600',

    textSelected: '$textRegular',
    backgroundSelected: '$grey100',
    borderSelected: '$grey700',

    feedbackIcon: '$grey700',
    feedbackIconBackground: 'white',

    identifierText: '$textSubtle',
    identifierBackground: '$grey100',
    identifierSelectedText: '$textSubtle',
    identifierSelectedBackground: '$grey100',

    // interactive
    textHover: '$textRegular',
    backgroundHover: '$grey100',
    borderHover: '$grey800',

    textPressed: '$textRegular',
    backgroundPressed: '$grey200',
    borderPressed: '$grey1000',

    textSelectedHover: '$textRegular',
    backgroundSelectedHover: '$grey200',
    textSelectedPressed: '$textRegular',
    backgroundSelectedPressed: '$grey300',
  }
})

export const colorSchemesState = {
  correct,
  incorrect,
  skipped
}


/*
 * Non-semantic themes
 */
const _default = createTheme({
  colors: {
    text: '$textRegular',
    background: 'white',
    border: '$grey600',

    textSelected: '$primary1000',
    backgroundSelected: '$primary100',
    borderSelected: '$primary700',

    identifierText: '$textSubtle',
    identifierBackground: '$grey100',
    identifierSelectedText: '$textSubtle',
    identifierSelectedBackground: '$grey100',

    // interactive
    textHover: '$textRegular',
    backgroundHover: '$grey100',
    borderHover: '$grey800',

    textPressed: '$textRegular',
    backgroundPressed: '$grey200',
    borderPressed: '$grey1000',

    textSelectedHover: '$primary1000',
    backgroundSelectedHover: '$primary200',
    textSelectedPressed: '$primary1000',
    backgroundSelectedPressed: '$primary300',
  }
})

const quest = createTheme({
  colors: {
    text: '$textRegular',
    background: 'white',
    border: '$grey600',

    textSelected: '$lapis1000',
    backgroundSelected: '$lapis100',
    borderSelected: '$lapis700',

    identifierText: '$textSubtle',
    identifierBackground: '$grey100',
    identifierSelectedText: '$textSubtle',
    identifierSelectedBackground: '$grey100',

    // interactive
    textHover: '$textRegular',
    backgroundHover: '$grey100',
    borderHover: '$grey800',

    textPressed: '$textRegular',
    backgroundPressed: '$grey200',
    borderPressed: '$grey1000',

    textSelectedHover: '$lapis1000',
    backgroundSelectedHover: '$lapis200',
    textSelectedPressed: '$lapis1000',
    backgroundSelectedPressed: '$lapis300',
  }
})

const iseb = createTheme({
  colors: {
    text: '$textRegular',
    background: 'white',
    border: '$grey600',

    textSelected: '$textRegular',
    backgroundSelected: '$purple100',
    borderSelected: '$purple700',

    identifierText: '$textSubtle',
    identifierBackground: '$grey100',
    identifierSelectedText: '$textSubtle',
    identifierSelectedBackground: '$grey100',

    // interactive
    textHover: '$textRegular',
    backgroundHover: '$grey100',
    borderHover: '$grey800',

    textPressed: '$textRegular',
    backgroundPressed: '$grey200',
    borderPressed: '$grey1000',

    textSelectedHover: '$textRegular',
    backgroundSelectedHover: '$purple200',
    textSelectedPressed: '$textRegular',
    backgroundSelectedPressed: '$purple300',
  }
})

const gl = createTheme({
  colors: {
    text: '$textRegular',
    background: 'white',
    border: '$grey600',

    textSelected: '$textRegular',
    backgroundSelected: '#DEE6F7',
    borderSelected: '#475E94',

    identifierText: '$textSubtle',
    identifierBackground: '$grey100',
    identifierSelectedText: '$textSubtle',
    identifierSelectedBackground: '$grey100',

    // interactive
    textHover: '$textRegular',
    backgroundHover: '$grey100',
    borderHover: '$grey800',

    textPressed: '$textRegular',
    backgroundPressed: '$grey200',
    borderPressed: '$grey1000',

    textSelectedHover: '$textRegular',
    backgroundSelectedHover: '#C8D5F4',
    textSelectedPressed: '$textRegular',
    backgroundSelectedPressed: '#B2C4F0',
  }
})

const colorScheme = createTheme({
  colors: {
    text: '$textRegular',
    background: '$colors$base1',
    border: '$colors$base5',

    textSelected: '$colors$accent10',
    backgroundSelected: '$colors$accent1',
    borderSelected: '$colors$accent7',

    identifierText: '$textSubtle',
    identifierBackground: '$grey100',
    identifierSelectedText: '$textSubtle',
    identifierSelectedBackground: '$grey100',

    // interactive
    textHover: '$textRegular',
    backgroundHover: '$colors$base2',
    borderHover: '$colors$base7',

    textPressed: '$textRegular',
    backgroundPressed: '$colors$base3',
    borderPressed: '$colors$base9',

    textSelectedHover: '$colors$accent10',
    backgroundSelectedHover: '$colors$accent2',
    textSelectedPressed: '$colors$accent10',
    backgroundSelectedPressed: '$colors$accent3',
  }
})

export const colorSchemes = {
  default: _default,
  quest,
  iseb,
  gl,
  colorScheme,
}

