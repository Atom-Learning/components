import { generateAlphaColors } from './generateAlphaColors'

export const warning = {
  warning1: '#FFF6E5',
  warning2: '#FFF6E5',
  warning3: '#FFF1D6',
  warning4: '#FFE8BD',
  warning5: '#FFE8BD',
  warning6: '#FFB71B',
  warning7: '#BD4B00',
  warning8: '#8A3700',
  warning9: '#4D1E00',
  warning10: '#361F10' // (!) This colour has NOT been designed
}

export const warningA = generateAlphaColors('warning', warning)
