import * as React from 'react'
import { Content } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContext } from './DropdownMenu.context'
import { DROPDOWN_Z_INDEX } from '~/constants/zIndices'
import { styled } from '~/stitches'
import { Box } from '../box'
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade
} from '~/utilities'

const StyledDropdownMenuContent = styled(Content, {
  bg: '$base1',
  color: '$foreground',
  borderRadius: '$0',
  boxShadow: '$0',
  py: '$0',
  zIndex: DROPDOWN_Z_INDEX,
  maxHeight: `var(--radix-dropdown-menu-content-available-height)`,
  display: 'flex',
  flexDirection: 'column',
  '@allowMotion': {
    animationDuration: '250ms',
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

export const DropdownMenuContent = ({ children, ...rest }) => {
  const { setContentRef } = React.useContext(DropdownMenuContext)

  // If we need header and footer split this out
  return (
    <StyledDropdownMenuContent ref={setContentRef} {...rest}>
      <Box css={{ flexGrow: 1, overflow: 'auto' }}>{children}</Box>
    </StyledDropdownMenuContent>
  )

}
