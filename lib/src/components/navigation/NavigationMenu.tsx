import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { CSS, keyframes, styled } from '~/stitches'

import {
  NavigationMenuDropdownContent,
  NavigationMenuDropdownItem,
  NavigationMenuLink
} from './NavigationMenuItem'

import { NavigationMenuDropdown } from './NavigationMenuDropdown'
import { NavigationMenuContext } from './NavigationMenuContext'

type NavigationMenuSubComponents = {
  Link: typeof NavigationMenuLink
  Dropdown: typeof NavigationMenuDropdown
  DropdownContent: typeof NavigationMenuDropdownContent
  DropdownItem: typeof NavigationMenuDropdownItem
}

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 }
})

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative'
})

const StyledList = styled(NavigationMenuPrimitive.List, {
  display: 'flex',
  justifyContent: 'center',
  gap: '$1',
  listStyle: 'none'
})

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {})

const ViewportPosition = styled('div', {
  position: 'absolute',
  left: 0,
  top: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
})

type NavigationMenuProps = {
  css?: CSS
}

const NavigationMenu: React.FC<NavigationMenuProps> &
  NavigationMenuSubComponents = ({ children, css }) => {
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
    <NavigationMenuContext.Provider
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
    </NavigationMenuContext.Provider>
  )
}

NavigationMenu.Link = NavigationMenuLink
NavigationMenu.Dropdown = NavigationMenuDropdown
NavigationMenu.DropdownContent = NavigationMenuDropdownContent
NavigationMenu.DropdownItem = NavigationMenuDropdownItem

NavigationMenu.displayName = 'NavigationMenu'

export { NavigationMenu }
