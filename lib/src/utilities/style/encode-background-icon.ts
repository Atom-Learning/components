import { toHex } from 'color2k'

type Icons = keyof typeof icons

const icons = {
  chevron: (color: string): string =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="${color}"><polyline points="6 10 12 16 18 10"/></svg>`,
  search: (color: string): string =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="${color}"><path d="M14.4121122,14.4121122 L20,20"></path><circle cx="10" cy="10" r="6"></circle></svg>`
}

// convert hsl theme value to hex
// svg doesn't support hsl in attributes
// encode icon and return as data uri
export const encodeBackgroundIcon = (color: string, icon: Icons): string =>
  `url(data:image/svg+xml;charset=US-ASCII,${encodeURIComponent(
    icons[icon](toHex(color))
  )})`
