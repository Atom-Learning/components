import { generateAlphaColors } from './generateAlphaColors'

export const slate = {
  slate1: '#F6F6F6',
  slate2: '#EBEBEB',
  slate3: '#E0E0E0',
  slate4: '#CECECE',
  slate5: '#C2C2C2',
  slate6: '#757575',
  slate7: '#545454',
  slate8: '#333333',
  slate9: '#1F1F1F',
  slate10: '#1C1C1C' // (!) This colour has NOT been designed
}

export const slateA = generateAlphaColors('slate', slate)
