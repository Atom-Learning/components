import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { MAX_Z_INDEX } from '~/constants/zIndices'
import { keyframes, styled } from '~/stitches'
import { fadeOut } from '~/utilities/style/keyframe-animations'

import { NavigationMenuContext } from './NavigationMenuContext'
import { NavigationMenuDropdown } from './NavigationMenuDropdown'
import { NavigationMenuDropdownContent } from './NavigationMenuDropdownContent'
import {
  NavigationMenuDropdownItem,
  NavigationMenuDropdownItemTitle
} from './NavigationMenuDropdownItem'
import { NavigationMenuDropdownTrigger } from './NavigationMenuDropdownTrigger'
import { NavigationMenuLink } from './NavigationMenuLink'
import { colorSchemes as navigationMenuColorSchemes } from './stitches.navigationMenu.colorscheme.config'

const delayedFadeIn = keyframes({
  '0%, 50%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative'
})

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$1',
  listStyle: 'none'
})

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
  zIndex: MAX_Z_INDEX
})

const ViewportPosition = styled('div', {
  position: 'absolute',
  left: 0,
  top: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
})

const NavigationMenuComponent = ({
  children,
  css,
  ...props
}: React.ComponentProps<typeof StyledMenu>) => {
  const [offset, setOffset] = React.useState<number | null | undefined>()
  const [activeItem, setActiveItem] = React.useState<string | undefined>()
  const [listWidth, setListWidth] = React.useState(0)
  const listRef = React.useRef<HTMLUListElement>(null)
  const fadeDuration = 200

  React.useLayoutEffect(() => {
    if (listRef.current) {
      setListWidth(listRef.current.offsetWidth)
    }
  }, [])

  React.useEffect(() => {
    let timer: NodeJS.Timer

    // Delay transitioning back to initial position
    // to allow enough time for fadeOut animation to complete
    if (activeItem === '') {
      timer = setTimeout(() => setOffset(null), fadeDuration)
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    }
  }, [activeItem])

  // https://github.com/radix-ui/primitives/issues/1462
  const onNodeUpdate = (trigger: HTMLButtonElement, itemValue: string) => {
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
    <NavigationMenuContext.Provider value={{ onNodeUpdate }}>
      <StyledMenu
        className={navigationMenuColorSchemes['light']}
        onValueChange={setActiveItem}
        css={css}
        {...props}
      >
        <StyledList ref={listRef}>{children}</StyledList>
        <ViewportPosition>
          <StyledViewport
            css={{
              '--navigation-menu-viewport-offset': `${offset || 0}px`,
              transform: `translateX(${offset || 0}px)`,
              '&[data-state="open"]': {
                animation: `${delayedFadeIn} ${fadeDuration}ms ease`
              },
              '&[data-state="closed"]': {
                animation: `${fadeOut} ${fadeDuration}ms ease-out`
              }
            }}
          />
        </ViewportPosition>
      </StyledMenu>
    </NavigationMenuContext.Provider>
  )
}

export const NavigationMenu = Object.assign(NavigationMenuComponent, {
  Link: NavigationMenuLink,
  Dropdown: NavigationMenuDropdown,
  DropdownContent: NavigationMenuDropdownContent,
  DropdownItem: NavigationMenuDropdownItem,
  DropdownItemTitle: NavigationMenuDropdownItemTitle,
  DropdownTrigger: NavigationMenuDropdownTrigger
})

NavigationMenuComponent.displayName = 'NavigationMenu'
