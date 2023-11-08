import React from 'react'

import { createTheme, styled } from '~/stitches'

import {
  useFocusWithin,
  useHover,
  useInteractOutside,
  usePress
} from 'react-aria'
import { Text } from '../text'
import { Image } from '../image'

const SIZE_COLLAPSED = '88px'
const SIZE_EXPANDED = '256px'

const light = createTheme({
  colors: {
    background: 'white',
    divider: '$grey200',
    borderBottom: '$grey200'
  }
})

export const BrandLogo = ({ src, alt = 'Atom Learning logo', ...props }) => (
  <Image src={src} alt={alt} {...props} />
)

export const BrandName = styled(Text, {
  color: '$tonal400'
})

export const Brand = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '$tonal400',
  '&:hover, &:focus': { textDecoration: 'none' }
})

export const Main = styled('div', {
  p: '$4',
  width: '100%',
  flexGrow: 1,
  overflowY: 'auto',
  overflowX: 'hidden'
})
export const Header = styled('div', {
  p: '$4',
  width: '100%',
  borderBottom: '1px solid $base3'
})
export const Footer = styled('div', {
  p: '$4',
  width: '100%',
  borderTop: '1px solid $base3'
})

const Container = styled('div', {
  height: '100vh',
  position: 'sticky',
  top: '0',
  zIndex: 1,
  variants: {
    type: { expandable: { width: SIZE_COLLAPSED } }
  }
})

const Content = styled('div', {
  bg: '$background',
  borderRight: '1px solid $grey200',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
  transition: 'width 150ms ease-out, box-shadow 150ms ease-out',
  variants: {
    type: { static: {}, expandable: {} },
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

const ExpandableContext = React.createContext<{ isExpanded?: boolean }>({
  isExpanded: undefined
})

export const SideBar = ({
  className = light,
  children,
  type = 'expandable',
  ...props
}: React.ComponentProps<typeof Container> & {
  type: 'expandable' | 'static'
}) => {
  const [isExpanded, setIsExpanded] = React.useState(type === 'static')
  const ref = React.useRef<HTMLDivElement>(null)

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

  useInteractOutside({
    ref,
    onInteractOutside: (e) => setIsExpanded(false)
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
    <ExpandableContext.Provider value={{ isExpanded }}>
      <Container {...props} className={className} type={type}>
        <Content {...expandableProps} isExpanded={isExpanded} type={type}>
          {children}
          {type === 'expandable' && (
            <PointerBlocker isVisible={!isHovered && !isExpanded} />
          )}
        </Content>
      </Container>
    </ExpandableContext.Provider>
  )
}

SideBar.Header = Header
SideBar.Main = Main
SideBar.Footer = Footer
SideBar.BrandLogo = BrandLogo
SideBar.Brand = Brand
SideBar.BrandName = BrandName

export const useExpandable = () => {
  return React.useContext(ExpandableContext)
}

SideBar.displayName = 'SideBar'
