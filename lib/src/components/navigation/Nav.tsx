import React from 'react'
import { styled, keyframes, CSS } from '~/stitches'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {
  NavDropdownContent,
  NavLink,
  NavDropdownTrigger,
  NavDropdownItem
} from './NavItem'

type NavSubComponents = {
  Link: typeof NavLink
  Dropdown: typeof NavDropdown
  DropdownContent: typeof NavDropdownContent
  DropdownItem: typeof NavDropdownItem
}

interface NavContextValue {
  activeItem: string | undefined
  setActiveItem: React.Dispatch<React.SetStateAction<string | undefined>>
  onNodeUpdate: (
    trigger: HTMLButtonElement,
    itemValue: string
  ) => HTMLButtonElement
}

const NavContext = React.createContext<NavContextValue | undefined>(undefined)

const useNavContext = () => {
  const context = React.useContext(NavContext)

  if (context === undefined) {
    throw new Error('useNavContext must be used within a NavContextProvider')
  }

  return context
}

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 }
})

const StyledMenu = styled(NavigationMenu.Root, {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative'
})

const StyledList = styled(NavigationMenu.List, {
  display: 'flex',
  justifyContent: 'center',
  gap: '$1',
  listStyle: 'none'
})

const StyledContent = styled(NavigationMenu.Content, {
  padding: '$3',
  background: 'white',
  marginTop: '4px',
  boxShadow:
    '0px 3px 6px rgba(51, 51, 51, 0.15), 0px 3px 6px rgba(51, 51, 51, 0.2)',
  borderRadius: '$1'
})

const StyledViewport = styled(NavigationMenu.Viewport, {})

const ViewportPosition = styled('div', {
  position: 'absolute',
  left: 0,
  top: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
})

type NavDropdownProps = {
  title: string
  active?: boolean
} & React.HTMLProps<HTMLButtonElement>

const NavDropdown: React.FC<NavDropdownProps> = ({
  children,
  title,
  active,
  ...props
}) => {
  const { onNodeUpdate } = useNavContext()

  return (
    <NavigationMenu.Item value={title}>
      <NavDropdownTrigger
        active={active}
        {...props}
        ref={(node: HTMLButtonElement) => onNodeUpdate(node, title)}
      >
        {title}
      </NavDropdownTrigger>
      <StyledContent>{children}</StyledContent>
    </NavigationMenu.Item>
  )
}

type NavProps = {
  css?: CSS
}

export const Nav: React.FC<NavProps> & NavSubComponents = ({
  children,
  css
}) => {
  const [offset, setOffset] = React.useState<number | null | undefined>()
  const [activeItem, setActiveItem] = React.useState<string | undefined>()
  const [listWidth, setListWidth] = React.useState(0)
  const listRef = React.useRef<HTMLUListElement>(null)

  React.useLayoutEffect(() => {
    if (listRef.current) {
      setListWidth(listRef.current.offsetWidth)
    }
  }, [])

  // https://github.com/radix-ui/primitives/issues/1462
  const onNodeUpdate = (trigger: HTMLButtonElement, itemValue: string) => {
    if (!activeItem) {
      setOffset(null)
      return trigger
    }

    if (trigger && listWidth && activeItem === itemValue) {
      const listCenter = listWidth / 2

      const triggerOffsetRight =
        listWidth -
        trigger.offsetLeft -
        trigger.offsetWidth +
        trigger.offsetWidth / 2

      setOffset(Math.round(listCenter - triggerOffsetRight))
    }

    return trigger
  }

  return (
    <NavContext.Provider
      value={{
        activeItem,
        setActiveItem,
        onNodeUpdate
      }}
    >
      <StyledMenu onValueChange={setActiveItem} css={css}>
        <StyledList ref={listRef}>{children}</StyledList>
        <ViewportPosition>
          <StyledViewport
            css={{
              // Avoid transitioning from initial position when first opening
              display: !offset ? 'none' : undefined,
              transform: `translateX(${offset}px)`,
              transition: 'all 0.3s ease',
              '&[data-state="open"]': { animation: `${fadeIn} 0.15s ease` },
              '&[data-state="closed"]': {
                animation: `${fadeOut} 0.15s ease`
              }
            }}
          />
        </ViewportPosition>
      </StyledMenu>
    </NavContext.Provider>
  )
}

Nav.Link = NavLink
Nav.Dropdown = NavDropdown
Nav.DropdownContent = NavDropdownContent
Nav.DropdownItem = NavDropdownItem
