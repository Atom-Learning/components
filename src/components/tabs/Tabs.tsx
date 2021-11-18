import { Content, List, Root } from '@radix-ui/react-tabs'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from '@atom-learning/icons'

import { styled } from '~/stitches'
import { ActionIcon } from '~/components/action-icon'
import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'

import { TabTrigger } from './TabTrigger'

type TabsProps = React.ComponentProps<typeof StyledRoot>

const StyledRoot = styled(Root, {
  display: 'flex',
  flexDirection: 'column'
})

const StyledTabContent = styled(Content, {
  flexGrow: 1
})

const StyledTriggerList = styled(List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: '1px solid $primaryDark'
})

const StyledActionIcon = styled(ActionIcon, {
  position: 'absolute',
  top: 'calc(50% - 20px)',
  bg: 'white !important',
  opacity: 0.8
})

type ListProps = React.ComponentProps<typeof StyledTriggerList> & {
  enableTabScrolling?: boolean
}

const TriggerListWrapper: React.FC<ListProps> = ({
  css,
  enableTabScrolling,
  ...rest
}) => {
  const triggerListRef = useRef<HTMLDivElement>(null)
  const [showLeftScroller, setShowLeftScroller] = useState<boolean>(false)
  const [showRightScroller, setShowRightScroller] = useState<boolean>(false)

  const scrollTriggerListTo = useCallback((direction: 'left' | 'right') => {
    const triggerList = triggerListRef.current
    if (triggerList) {
      const { scrollWidth, scrollLeft, offsetWidth } = triggerList
      const scrollAmount = scrollWidth / 4 // 25% of whole scroll width
      if (direction === 'right') {
        if (triggerList.scrollLeft + scrollAmount <= scrollWidth) {
          triggerList.scroll({
            left: triggerList.scrollLeft + scrollAmount,
            behavior: 'smooth'
          })
        }
      } else {
        triggerList.scroll({
          left:
            triggerList.scrollLeft - scrollAmount > 0
              ? triggerList.scrollLeft - scrollAmount
              : 0,
          behavior: 'smooth'
        })
      }

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

  const showScroller = showLeftScroller || showRightScroller

  return showScroller || enableTabScrolling ? (
    <Flex css={{ position: 'relative' }}>
      {showLeftScroller && (
        <StyledActionIcon
          size="lg"
          label="scroll-left"
          onClick={() => scrollTriggerListTo('left')}
          css={{ left: 0 }}
        >
          <Icon is={ChevronLeft} size="lg" />
        </StyledActionIcon>
      )}
      <StyledTriggerList
        {...rest}
        ref={triggerListRef}
        css={{
          ...css,
          width: '100%',
          overflowX: 'auto',
          '&::-webkit-scrollbar': { display: 'none' },
          'div:first-child': { pl: '$6' },
          'div:last-child': { pr: '$6' }
        }}
      />
      {showRightScroller && (
        <StyledActionIcon
          size="lg"
          label="scroll-right"
          onClick={() => scrollTriggerListTo('right')}
          css={{ right: 0 }}
        >
          <Icon is={ChevronRight} size="lg" />
        </StyledActionIcon>
      )}
    </Flex>
  ) : (
    <StyledTriggerList css={css} {...rest} ref={triggerListRef} />
  )
}

export const Tabs: React.FC<TabsProps> & {
  TriggerList: typeof TriggerListWrapper
  Trigger: typeof TabTrigger
  Content: typeof StyledTabContent
} = ({ children, ...remainingProps }) => (
  <StyledRoot {...remainingProps}>{children}</StyledRoot>
)

Tabs.TriggerList = TriggerListWrapper
Tabs.Trigger = TabTrigger
Tabs.Content = StyledTabContent

Tabs.displayName = 'Tabs'
