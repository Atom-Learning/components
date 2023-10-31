import { createTheme } from '~/stitches'

const light = createTheme({
  colors: {
    text: '$tonal400',
    background: 'white',
    backgroundHover: '$tonal50',
    textHover: '$tonal600',
    backgroundActive: '$tonal100',
    textActive: '$tonal600',
    backgroundDataActive: '$primaryLight',
    dataActiveText: '$primary',
    dataActiveTextHover: '$primary',
    dataActivePressedText: '$primary',
    dataActiveFocus: '$primary',
    dataActiveBackgroundHover: '$tonal50',
    dataActiveBackground: '$tonal100',
    activeItemColor: '$tonal500',
    activeItemBackgroundColor: '$tonal500',
    triggerOpenBackground: '$tonal100',
    navigationDropdown: 'white'
  }
})

export const colorSchemes = {
  light
}
