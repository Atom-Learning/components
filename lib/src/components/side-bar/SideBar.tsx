import React from 'react'

import { styled } from '~/stitches'

import {
  useFocusWithin,
  useHover,
  useInteractOutside,
  usePress
} from 'react-aria'
import { colorSchemes as topBarColorSchemes } from './stitches.topBar.colorscheme.config'

const Container = styled('div', {
  height: '100vh',
  position: 'sticky',
  top: '0',
  width: '88px',
  zIndex: 1
})

const Content = styled('div', {
  bg: '$background',
  borderRight: '1px solid $grey200',
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  p: '$4',
  transition: 'width 150ms ease-out, box-shadow 150ms ease-out',
  variants: {
    isExpanded: {
      true: {
        width: '256px',
        boxShadow: '4px 0 4px -2px rgba(31, 31, 31, 0.1);'
      },
      false: {
        width: '88px'
      }
    }
  }
})

const PointerBlocker = styled('div', {
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  bg: 'rgba(255,0,0,0.2)',
  transition: 'all',
  variants: {
    isVisible: {
      true: { visibility: 'visible', transitionDelay: '0s' },
      false: { visibility: 'hidden', transitionDelay: '50ms' }
    }
  }
})

export const SideBar = ({
  className = topBarColorSchemes['light'],
  children,
  ...props
}: React.ComponentProps<typeof Container>) => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => setIsExpanded(true),
    onBlurWithin: () => setIsExpanded(false)
  })
  let { hoverProps, isHovered } = useHover({
    onHoverStart: () => setIsExpanded(true),
    onHoverEnd: () => setIsExpanded(false)
  })
  let { pressProps } = usePress({
    onPress: (e) => setIsExpanded(!isExpanded)
  })

  useInteractOutside({
    ref,
    onInteractOutside: (e) => setIsExpanded(false)
  })

  return (
    <Container className={className} {...props}>
      <Content
        {...focusWithinProps}
        {...hoverProps}
        {...pressProps}
        isExpanded={isExpanded}
        aria-expanded={isExpanded}
        ref={ref}
      >
        {children}
        <PointerBlocker isVisible={!isHovered && !isExpanded} />
      </Content>
    </Container>
  )
}

SideBar.displayName = 'TopBar'
