import { styled } from '~/stitches'

import { textVariantSize } from '../text'
const { sm, md } = textVariantSize()

export const Label = styled('label', {
  color: '$tonal500',
  display: 'block',
  fontFamily: '$body',
  fontWeight: 600,
  m: 0,
  variants: {
    size: { sm, md },
    required: {
      true: {
        '&::after': {
          color: '$danger',
          ml: '$1',
          content: '*'
        }
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

Label.displayName = 'Label'
