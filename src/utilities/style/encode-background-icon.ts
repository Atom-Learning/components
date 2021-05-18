import { parseToHsl, toColorString } from 'polished'

type Icons = 'chevron'

const icons = {
  chevron: (color: string): string =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="${color}"><polyline points="6 10 12 16 18 10"/></svg>`
}

export const encodeBackgroundIcon = (color: string, icon: Icons): string => {
  // convert hsl theme value to hex
  // svg doesn't support hsl in attributes
  const hex = toColorString(parseToHsl(color))
  // encode icon and return as data uri
  return `url(data:image/svg+xml;charset=US-ASCII,${encodeURIComponent(
    icons[icon](hex)
  )})`
}
