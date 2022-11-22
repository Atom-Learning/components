import { generateAlphaColors } from './generateAlphaColors'

export const danger = {
  danger1: '#FDEDED',
  danger2: '#FDEDED',
  danger3: '#FBDFDF',
  danger4: '#F9D2D2',
  danger5: '#F9D2D2',
  danger6: '#EE0505',
  danger7: '#EE0505',
  danger8: '#CB0404',
  danger9: '#A90303',
  danger10: '#641111' // (!) This colour has NOT been designed
}

export const dangerA = generateAlphaColors('danger', danger)
