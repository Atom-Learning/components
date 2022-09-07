import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { CSS, keyframes, styled } from '~/stitches'
import { fadeOut } from '~/utilities/style/keyframe-animations'

import { NavigationMenuContext } from './NavigationMenuContext'
import { NavigationMenuDropdown } from './NavigationMenuDropdown'
import {
  NavigationMenuDropdownContent,
  NavigationMenuDropdownItem,
  NavigationMenuLink
} from './NavigationMenuItem'

type NavigationMenuSubComponents = {
  Link: typeof NavigationMenuLink
  Dropdown: typeof NavigationMenuDropdown
  DropdownContent: typeof NavigationMenuDropdownContent
  DropdownItem: typeof NavigationMenuDropdownItem
}

const delayedFadeIn = keyframes({
  '0%, 75%': { opacity: 0 },
  '100%': { opacity: 1 }
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
  variants: {
    alignment: {
      center: { justifyContent: 'center' },
      left: { justifyContent: 'left' },
      right: { justifyContent: 'right' }
    }
  }
})

type NavigationMenuProps = {
  css?: CSS
}

// const isOutOfViewport = (elem: HTMLElement) => {
//   // Get element's bounding
//   const bounding = elem.getBoundingClientRect()

//   // Check if it's out of the viewport on each side
//   const out: any = {}
//   out.top = bounding.top < 0
//   out.left = bounding.left < 0
//   out.bottom =
//     bounding.bottom >
//     (window.innerHeight || document.documentElement.clientHeight)
//   out.right =
//     bounding.right > (window.innerWidth || document.documentElement.clientWidth)
//   out.any = out.top || out.left || out.bottom || out.right
//   out.all = out.top && out.left && out.bottom && out.right

//   return out
// }

export const NavigationMenu: React.FC<NavigationMenuProps> &
  NavigationMenuSubComponents = ({ children, css }) => {
  const [offset, setOffset] = React.useState<number | null | undefined>()
  const [alignment, setAlignment] = React.useState<
    'left' | 'right' | 'center' | null | undefined
  >()
  // const [prevAlignment, setPrevAlignment] = React.useState<
  //   'left' | 'right' | 'center' | null | undefined
  // >()
  const [activeItem, setActiveItem] = React.useState<string | undefined>()
  const [listWidth, setListWidth] = React.useState(0)
  const listRef = React.useRef<HTMLUListElement>(null)
  const viewportRef = React.useRef<HTMLDivElement | null>(null)
  const fadeDuration = 200

  // React.useLayoutEffect(() => {
  //   if (listRef.current) {
  //     setListWidth(listRef.current.offsetWidth)
  //   }
  // }, [])

  React.useEffect(() => {
    let timer: NodeJS.Timer

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

    if (trigger && activeItem === itemValue) {
      setTimeout(() => {
        // DOM reads
        const triggerBoundingRect = trigger.getBoundingClientRect()
        const triggerListBoundingRect = listRef.current?.getBoundingClientRect()
        const dropdownContentWidth = parseInt(
          String(
            viewportRef.current?.style.getPropertyValue(
              '--radix-navigation-menu-viewport-width'
            )
          )
        )

        // values
        const triggerCenter =
          triggerBoundingRect.left + triggerBoundingRect.width / 2
        const triggerListLeft = triggerListBoundingRect?.left || 0
        // const triggerListRight = triggerListBoundingRect?.right || 0
        const dropdownContentCenter = dropdownContentWidth / 2

        // if (listWidth) {
          // const listCenter = listWidth / 2

          // const triggerOffsetRight =
          //   listWidth -
          //   trigger.offsetLeft -
          //   trigger.offsetWidth +
          //   trigger.offsetWidth / 2

          // setOffset(-dropdownContentCenter + triggerCenter - triggerListLeft)
        // }

        // if (triggerCenter < dropdownContentCenter) {
        //   setOffset(0)
        // } else if (window.innerWidth - triggerCenter < dropdownContentCenter) {
        //   setOffset(
        //     window.innerWidth -
        //       (triggerListLeft + dropdownContentWidth) -
        //       (window.innerWidth - triggerListRight)
        //   )
        // } else {
        //   setOffset(
        //     -dropdownContentCenter + triggerCenter - triggerListLeft
        //   )
        // }
        if (triggerCenter < dropdownContentCenter) {
          setAlignment('left')
        } else if (window.innerWidth - triggerCenter < dropdownContentCenter) {
          setAlignment('right')
        } else {
          setAlignment('center')
          // setOffset(-dropdownContentCenter + triggerCenter - triggerListLeft)
        }
      }, 0)
    }

    return trigger
  }

  return (
    <NavigationMenuContext.Provider value={{ onNodeUpdate }}>
      <StyledMenu onValueChange={setActiveItem} css={css}>
        <StyledList ref={listRef}>{children}</StyledList>
        <ViewportPosition alignment={alignment}>
          <StyledViewport
            ref={viewportRef}
            css={{
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

NavigationMenu.Link = NavigationMenuLink
NavigationMenu.Dropdown = NavigationMenuDropdown
NavigationMenu.DropdownContent = NavigationMenuDropdownContent
NavigationMenu.DropdownItem = NavigationMenuDropdownItem

NavigationMenu.displayName = 'NavigationMenu'
