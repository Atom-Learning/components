import { List } from '@radix-ui/react-tabs'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from '@atom-learning/icons'

import { styled } from '~/stitches'
import { ActionIcon } from '~/components/action-icon'
import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'
import { TabTrigger } from './TabTrigger'
import { passPropsToChildren } from './utils'
interface ListProps extends React.ComponentProps<typeof StyledTriggerList> {
  enableTabScrolling?: boolean
}

const StyledChevronIcon = styled(ActionIcon, {
  position: 'absolute',
  top: 'calc(50% - 20px)'
})

const StyledTriggerList = styled(List, {
  flexShrink: 0,
  display: 'flex',
  variants: {
    theme: {
      light: {},
      dark: {}
    }
  }
})

export const TriggerListWrapper: React.FC<ListProps> = ({
  css,
  children,
  theme,
  enableTabScrolling,
  ...rest
}) => {
  const triggerListRef = useRef<HTMLDivElement>(null)
  const [showLeftScroller, setShowLeftScroller] = useState<boolean>(false)
  const [showRightScroller, setShowRightScroller] = useState<boolean>(false)

  const scrollTriggerListTo = useCallback((direction: 'left' | 'right') => {
    const triggerList = triggerListRef.current
    if (triggerList) {
      const { scrollWidth, scrollLeft } = triggerList
      const scrollAmount = Math.round(scrollWidth / 4) // 25% of whole scroll width
      let left = scrollLeft
      if (direction === 'right') {
        const newScrollAmount = triggerList.scrollLeft + scrollAmount
        left = newScrollAmount <= scrollWidth ? newScrollAmount : scrollLeft
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
        if (scrollLeft === 0) {
          setShowLeftScroller(false)
          setShowRightScroller(true)
        } else if (scrollLeft + offsetWidth === scrollWidth) {
          setShowRightScroller(false)
          setShowLeftScroller(true)
        } else {
          setShowLeftScroller(true)
          setShowRightScroller(true)
        }
      }, 300)
    }
  }, [])

  useEffect(() => {
    const triggerList = triggerListRef.current
    if (triggerList) {
      const { offsetWidth, scrollWidth } = triggerList

      const shouldShowScroller = scrollWidth > offsetWidth
      if (shouldShowScroller) {
        setShowRightScroller(true)
      }
    }
  }, [])

  const showScroller =
    showLeftScroller || showRightScroller || enableTabScrolling

  if (!showScroller) {
    return (
      <StyledTriggerList css={css} {...rest} ref={triggerListRef}>
        {passPropsToChildren(children, { theme }, [TabTrigger])}
      </StyledTriggerList>
    )
  }

  return (
    <Flex css={{ position: 'relative' }}>
      {showLeftScroller && (
        <StyledChevronIcon
          size="lg"
          role="scrollbar"
          label="scroll-left"
          onClick={() => scrollTriggerListTo('left')}
          css={{ left: 0 }}
        >
          <Icon is={ChevronLeft} size="lg" />
        </StyledChevronIcon>
      )}
      <StyledTriggerList
        {...rest}
        ref={triggerListRef}
        css={{
          ...css,
          width: '100%',
          overflowX: 'auto',
          '&::-webkit-scrollbar': { display: 'none' }
        }}
      >
        {passPropsToChildren(children, { theme }, [TabTrigger])}
      </StyledTriggerList>
      {showRightScroller && (
        <StyledChevronIcon
          size="lg"
          role="scrollbar"
          label="scroll-right"
          onClick={() => scrollTriggerListTo('right')}
          css={{ right: 0 }}
        >
          <Icon is={ChevronRight} size="lg" />
        </StyledChevronIcon>
      )}
    </Flex>
  )
}
