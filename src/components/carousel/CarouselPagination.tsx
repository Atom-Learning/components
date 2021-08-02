import { DotGroup } from 'pure-react-carousel'

import { styled } from '~/stitches'

export const CarouselPagination = styled(DotGroup, {
  justifyContent: 'center',
  '& button': {
    bg: '$tonal300',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    mx: '$1',
    p: '$1',
    size: '$space$3',
    transition: 'all 0.25s ease-in',
    '&[class*="selected"]': {
      bg: '$tertiary'
    }
  }
})
