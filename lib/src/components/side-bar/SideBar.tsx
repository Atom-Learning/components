import React from 'react'
import { useFocusWithin, useHover, useInteractOutside } from 'react-aria'

import { createTheme, styled } from '~/stitches'

import {
  SideBarBody,
  SideBarBrand,
  SideBarBrandLogo,
  SideBarBrandName,
  SideBarFooter,
  SideBarHeader
} from './SideBarComponents'
import { SideBarContext } from './SideBarContext'

const SIZE_COLLAPSED = '88px'
const SIZE_EXPANDED = '256px'

const light = createTheme({
  colors: {
    background: 'white',
    text: '$grey400',
    border: '$grey200'
  }
})

const Root = styled('div', {
  position: 'sticky',
  zIndex: 1,
  variants: {
    type: {
      static: {},
      expandable: { width: SIZE_COLLAPSED }
    }
  }
})

const Content = styled('div', {
  bg: '$background',
  borderRight: '1px solid $border',
  boxShadow: '4px 0 4px -2px rgba(31, 31, 31, 0)',
  display: 'flex',
  flexDirection: 'column',
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
  offset?: number | string
}

export const SideBar = ({
  className = light,
  children,
  type = 'expandable',
  offset = '0px',
  css,
  ...rest
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
  const { hoverProps, isHovered } = useHover({
    onHoverStart: () => setIsExpanded(true),
    onHoverEnd: () => setIsExpanded(false)
  })
  const touchProps = {
    onTouchEnd: () => setIsExpanded(true)
  }

  const expandableProps =
    type === 'expandable'
      ? {
          ...focusWithinProps,
          ...hoverProps,
          ...touchProps,
          ref
        }
      : {}

  return (
    <SideBarContext.Provider value={{ isExpanded }}>
      <Root
        {...rest}
        className={className}
        css={{ height: `calc(100svh - ${offset})`, top: offset, ...css }}
        type={type}
      >
        <Content {...expandableProps} isExpanded={isExpanded} type={type}>
          {children}
          {/**
           * When the SideBar is collapsed, ensure that the initial tap event
           * is used to expand the nav first before making the items available
           */}
          {type === 'expandable' && (
            <PointerBlocker isVisible={!isHovered && !isExpanded} />
          )}
        </Content>
      </Root>
    </SideBarContext.Provider>
  )
}

SideBar.Brand = SideBarBrand
SideBar.BrandLogo = SideBarBrandLogo
SideBar.BrandName = SideBarBrandName
SideBar.Header = SideBarHeader
SideBar.Body = SideBarBody
SideBar.Footer = SideBarFooter

SideBar.displayName = 'SideBar'
