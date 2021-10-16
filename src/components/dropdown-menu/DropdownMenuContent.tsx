import { Content } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade
} from '~/utilities'

export const DropdownMenuContent = styled(Content, {
  bg: 'white',
  borderRadius: '$0',
  boxShadow: '$0',
  py: '$3',
  '@allowMotion': {
    animationDuration: '75ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  }
})
