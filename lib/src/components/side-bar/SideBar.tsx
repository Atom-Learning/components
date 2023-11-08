import React from 'react'

import { styled, createTheme } from '~/stitches'
import {
  useFocusWithin,
  useHover,
  useInteractOutside,
  usePress
} from 'react-aria'
import {
  SideBarBrand,
  SideBarBrandLogo,
  SideBarBrandName,
  SideBarFooter,
  SideBarHeader,
  SideBarMain
} from './SideBarComponents'

const SIZE_COLLAPSED = '88px'
const SIZE_EXPANDED = '256px'

const light = createTheme({
  colors: {
    background: 'white',
    border: '$grey200'
  }
})

const Container = styled('div', {
  height: '100svh',
  position: 'sticky',
  top: '0',
  zIndex: 1,
  variants: {
    type: {
      expandable: { width: SIZE_COLLAPSED }
    }
  }
})

const Content = styled('div', {
  bg: '$background',
  borderRight: '1px solid $border',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
  transition: 'width 150ms ease-out, box-shadow 150ms ease-out',
  willChange: 'width',
  variants: {
    type: {
      static: {},
      expandable: {}
    },
    isExpanded: {
      true: { width: SIZE_EXPANDED },
      false: { width: SIZE_COLLAPSED }
    }
  },
  compoundVariants: [
    {
      isExpanded: true,
      type: 'expandable',
      css: { boxShadow: '4px 0 4px -2px rgba(31, 31, 31, 0.1);' }
    }
  ]
})

const PointerBlocker = styled('div', {
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  transition: 'all',
  variants: {
    isVisible: {
      true: { visibility: 'visible', transitionDelay: '0s' },
      false: { visibility: 'hidden', transitionDelay: '50ms' }
    }
  }
})

type SideBarProps = React.ComponentProps<typeof Container> & {
  type: 'expandable' | 'static'
}

export const SideBar = ({
  className = light,
  children,
  type = 'expandable',
  ...props
}: SideBarProps) => {
  const [isExpanded, setIsExpanded] = React.useState(type === 'static')
  const ref = React.useRef<HTMLDivElement>(null)

  useInteractOutside({
    ref,
    onInteractOutside: (e) => setIsExpanded(false)
  })
  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: (e) => setIsExpanded(true),
    onBlurWithin: () => setIsExpanded(false)
  })
  let { hoverProps, isHovered } = useHover({
    onHoverStart: () => setIsExpanded(true),
    onHoverEnd: () => setIsExpanded(false)
  })
  let { pressProps } = usePress({
    onPress: (e) => setIsExpanded(true)
  })

  const expandableProps =
    type === 'expandable'
      ? {
          ...focusWithinProps,
          ...hoverProps,
          ...pressProps,
          'aria-expanded': isExpanded,
          ref
        }
      : {}

  return (
    <Container {...props} className={className} type={type}>
      <Content {...expandableProps} isExpanded={isExpanded} type={type}>
        {children}
        {type === 'expandable' && (
          <PointerBlocker isVisible={!isHovered && !isExpanded} />
        )}
      </Content>
    </Container>
  )
}

SideBar.Brand = SideBarBrand
SideBar.BrandLogo = SideBarBrandLogo
SideBar.BrandName = SideBarBrandName
SideBar.Footer = SideBarFooter
SideBar.Header = SideBarHeader
SideBar.Main = SideBarMain

SideBar.displayName = 'SideBar'
