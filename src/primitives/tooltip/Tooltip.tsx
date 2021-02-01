import * as RadixTooltip from '@radix-ui/react-tooltip'
import * as React from 'react'

import { styled } from '../../stitches'
const StyledContent = styled(RadixTooltip.Content, {
  boxShadow: '$1',
  borderRadius: 4,
  padding: '$2 $3',
  fontSize: '$sm',
  bg: '$tonal900',
  color: '$tonal100'
})
const StyledArrow = styled(RadixTooltip.Arrow, {
  fill: '$tonal900'
})
const StyledTrigger = styled(RadixTooltip.Trigger, {
  cursor: 'pointer'
})

export const Tooltip = ({ children, text, ...rest }) => (
  <RadixTooltip.Root>
    <StyledTrigger {...rest}>{children}</StyledTrigger>
    <StyledContent side="top">
      {text}
      <StyledArrow />
    </StyledContent>
  </RadixTooltip.Root>
)
