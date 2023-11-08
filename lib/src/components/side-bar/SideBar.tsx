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
import { SideBarExpandableContext } from './SideBarExpandableContext'

const SIZE_COLLAPSED = '88px'
const SIZE_EXPANDED = '256px'

const light = createTheme({
  colors: {
    background: 'white',
    border: '$grey200'
  }
})

const Root = styled('div', {
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

const Wrapper = styled('div', {
  borderRight: '1px solid $border',
  boxShadow: '4px 0 4px -2px rgba(31, 31, 31, 0)',
  height: '100%',
  overflow: 'hidden',
  willChange: 'width',
  '@allowMotion': {
    transition: 'width 125ms ease-out, box-shadow 125ms ease-out'
  },
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
      css: { boxShadow: '4px 0 4px -2px rgba(31, 31, 31, 0.1)' }
    }
  ]
})

const Content = styled('div', {
  bg: '$background',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: SIZE_EXPANDED
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

type SideBarProps = React.ComponentProps<typeof Root> & {
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
      ? { ...focusWithinProps, ...hoverProps, ...pressProps, ref }
      : {}

  return (
    <SideBarExpandableContext.Provider value={{ isExpanded }}>
      <Root {...props} className={className} type={type}>
        <Wrapper {...expandableProps} isExpanded={isExpanded} type={type}>
          <Content>
            {children}
            {type === 'expandable' && (
              <PointerBlocker isVisible={!isHovered && !isExpanded} />
            )}
          </Content>
        </Wrapper>
      </Root>
    </SideBarExpandableContext.Provider>
  )
}

SideBar.Brand = SideBarBrand
SideBar.BrandLogo = SideBarBrandLogo
SideBar.BrandName = SideBarBrandName
SideBar.Footer = SideBarFooter
SideBar.Header = SideBarHeader
SideBar.Main = SideBarMain

SideBar.displayName = 'SideBar'
