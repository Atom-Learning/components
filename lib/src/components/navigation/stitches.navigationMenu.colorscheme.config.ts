import { createTheme } from '~/stitches'

const light = createTheme({
  colors: {
    text: '$textSubtle',
    background: 'white',
    backgroundHover: '$grey100',
    textHover: '$textForeground',
    backgroundActive: '$grey200',
    textActive: '$grey1000',
    backgroundSelected: '$blue100',
    textSelected: '$blue800',
    textSelectedHover: '$blue800',
    textSelectedPressed: '$blue800',
    textSelectedFocus: '$blue800',
    backgroundSelectedHover: '$grey100',
    backgroundSelectedPressed: '$grey200',
    itemTextSelected: '$grey900',
    itemBackgroundSelected: '$grey900',
    triggerBackgroundOpen: '$grey200',
    dropdownBackground: 'white'
  }
})

export const colorSchemes = {
  light
}
