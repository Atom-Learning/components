import * as React from 'react'

import { styled } from '~/stitches'
import {
  useFocusWithin,
  useHover,
  useInteractOutside,
  usePress
} from 'react-aria'

const Collapsible = styled('div', {
  p: '$4',
  transition: 'width 150ms, border-color 150ms',
  height: '100%',
  bg: 'white',
  borderRight: 'inset $grey200 1px',
  variants: {
    expanded: {
      true: { width: '256px' },
      false: { width: '88px', overflow: 'hidden' }
    }
  }
})

export const NavigationMenuVerticalCollapsible = ({ children }) => {
  const [expanded, setExpanded] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>()

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => setExpanded(true),
    onBlurWithin: () => setExpanded(false)
  })
  let { hoverProps } = useHover({
    onHoverStart: () => setExpanded(true),
    onHoverEnd: () => setExpanded(false)
  })
  let { pressProps } = usePress({
    onPress: (e) => {
      console.log({ e })
      setExpanded(true)
    }
  })

  useInteractOutside({
    ref,
    onInteractOutside: (e) => setExpanded(false)
  })

  return (
    <Collapsible
      {...focusWithinProps}
      {...hoverProps}
      {...pressProps}
      expanded={expanded}
      aria-expanded={expanded}
      ref={ref}
    >
      {children}
    </Collapsible>
  )
}
