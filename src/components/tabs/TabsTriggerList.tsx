import { ChevronLeft, ChevronRight } from '@atom-learning/icons'
import { List } from '@radix-ui/react-tabs'
import { opacify } from 'color2k'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { debounce } from 'throttle-debounce'

import { ActionIcon } from '~/components/action-icon'
import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'
import { styled, theme } from '~/stitches'

import { TabTrigger } from './TabTrigger'
import { passPropsToChildren } from './utils'

interface ListProps extends React.ComponentProps<typeof StyledTriggerList> {
  enableTabScrolling?: boolean
  scrollPercentage?: number
}

const fadedWhite = opacify('white', -0.2)
const fadedPrimaryDark = opacify(theme.colors.primaryDark.value, -0.2)

const StyledChevronIcon = styled(ActionIcon, {
  position: 'absolute',
  transition: 'all 125ms',
  variants: {
    theme: {
      light: {
        bg: `${fadedWhite} !important`
      },
      dark: {
        bg: `${fadedPrimaryDark} !important`,
        color: 'currentColor !important'
      }
    },
    visible: {
      true: {
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'all'
      },
      false: {
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none'
      }
    }
  }
})

const StyledTriggerList = styled(List, {
  flexShrink: 0,
  display: 'flex',
  width: '100%',
  overflowX: 'auto',
  '&::-webkit-scrollbar': { display: 'none' },
  scrollbarWidth: 'none',
  variants: {
    theme: {
      light: {
        borderBottom: '1px solid $tonal300'
      },
      dark: {
        bg: '$primaryDark',
        borderBottom: '1px solid $tonal200'
      }
    },
    appearance: {
      uppercase: {
        '& button': { textTransform: 'uppercase' }
      }
    }
  }
})

export const TriggerListWrapper: React.FC<ListProps> = ({
  children,
  theme,
  appearance,
  enableTabScrolling,
  scrollPercentage = 10,
  ...rest
}) => {
  const triggerListRef = useRef<HTMLDivElement>(null)
  const [showLeftScroller, setShowLeftScroller] = useState<boolean>(false)
  const [showRightScroller, setShowRightScroller] = useState<boolean>(false)
  const [screenWidth, setScreenWidth] = useState<number>()

  const scrollTriggerListTo = useCallback((direction: 'left' | 'right') => {
    const triggerList = triggerListRef.current
    if (triggerList) {
      const { scrollWidth, scrollLeft, offsetWidth } = triggerList
      const scrollAmount = Math.round(scrollWidth * (scrollPercentage / 100))
      let left = scrollLeft
      if (direction === 'right') {
        const newScrollAmount = scrollLeft + scrollAmount
        left =
          newScrollAmount + offsetWidth <= scrollWidth
            ? newScrollAmount
            : scrollWidth - offsetWidth
      } else {
        const newScrollAmount = scrollLeft - scrollAmount
        left = newScrollAmount > 0 ? newScrollAmount : 0
      }

      triggerList.scroll({
        left,
        behavior: 'smooth'
      })

      // Relying on setTimeout since scroll does not have a callback / doesn't return a promise :(
      setTimeout(() => {
        const { scrollWidth, scrollLeft, offsetWidth } = triggerList
        const scrollDistance = scrollWidth - (scrollLeft + offsetWidth)
        if (scrollLeft === 0) {
          setShowLeftScroller(false)
          setShowRightScroller(true)
        } else if (scrollDistance < 5) {
          // sometimes right button does not hide due to few pixel precision
          setShowRightScroller(false)
          setShowLeftScroller(true)
        } else {
          setShowLeftScroller(true)
          setShowRightScroller(true)
        }
      }, 500)
    }
  }, [])

  useEffect(() => {
    const onResize = debounce(500, () => {
      setScreenWidth(window.innerWidth)
    })
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    const triggerList = triggerListRef.current
    if (triggerList) {
      const { offsetWidth, scrollWidth } = triggerList

      const shouldShowScroller = scrollWidth > offsetWidth

      // Scroll to left on resize, hide left scroll button and then decide if right scroll button should be visible or not
      triggerList.scroll?.({
        left: 0
      })
      setShowLeftScroller(false)
      setShowRightScroller(shouldShowScroller)
    }
  }, [screenWidth])

  const showScroller =
    showLeftScroller || showRightScroller || enableTabScrolling

  if (showScroller) {
    return (
      <Flex css={{ position: 'relative' }}>
        <StyledChevronIcon
          size="xl"
          label="Scroll Left"
          theme={theme}
          onClick={() => scrollTriggerListTo('left')}
          visible={showLeftScroller}
          css={{ left: 0 }}
        >
          <Icon is={ChevronLeft} size="lg" />
        </StyledChevronIcon>
        <StyledTriggerList
          {...rest}
          ref={triggerListRef}
          appearance={appearance}
          theme={theme}
        >
          {passPropsToChildren(children, { theme }, [TabTrigger])}
        </StyledTriggerList>
        <StyledChevronIcon
          size="xl"
          label="Scroll right"
          theme={theme}
          onClick={() => scrollTriggerListTo('right')}
          visible={showRightScroller}
          css={{ right: 0 }}
        >
          <Icon is={ChevronRight} size="lg" />
        </StyledChevronIcon>
      </Flex>
    )
  }

  return (
    <StyledTriggerList
      theme={theme}
      {...rest}
      appearance={appearance}
      ref={triggerListRef}
    >
      {passPropsToChildren(children, { theme }, [TabTrigger])}
    </StyledTriggerList>
  )
}
