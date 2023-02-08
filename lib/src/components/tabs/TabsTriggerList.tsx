import { List } from '@radix-ui/react-tabs'
import React from 'react'
import { styled } from '~/stitches'
import { ColorScheme } from '~/experiments/color-scheme'
import { useWindowSize } from '~/utilities/hooks/useWindowSize'
import { useCallbackRefState } from '~/utilities/hooks/useCallbackRef'
import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { ChevronLeft, ChevronRight } from '@atom-learning/icons'

const StyledContainer = styled(ColorScheme, {
  position: 'relative',
  borderBottom: '1px solid $base3',
  width: '100%'
})

const StyledTriggerList = styled(List, {
  flexShrink: 0,
  display: 'flex',
  width: '100%',
  overflowX: 'auto',
  '&::-webkit-scrollbar': { display: 'none' },
  scrollbarWidth: 'none'
})

const StyledChevronActionIcon = styled(ActionIcon, {
  height: '100% !important',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  background: '$background !important',
  color: '$interactive1 !important',
  borderRadius: 0,
  opacity: 0.9
})

const SCROLL_PERCENTAGE = 10
export const TabsTriggerList: React.FC<
  React.ComponentProps<typeof StyledTriggerList> & {
    colorScheme?: typeof ColorScheme
  }
> = ({ children, colorScheme = {}, ...rest }) => {
  const [listRef, setListRefCallback] = useCallbackRefState()

  const { width: screenWidth } = useWindowSize()

  const [showLeftScroller, setShowLeftScroller] = React.useState<boolean>(false)
  const [showRightScroller, setShowRightScroller] =
    React.useState<boolean>(false)

  const scrollTriggerListTo = React.useCallback(
    (direction: 'left' | 'right') => {
      if (!listRef) return
      const { scrollWidth, scrollLeft, offsetWidth } = listRef
      const scrollAmount = Math.round(scrollWidth * (SCROLL_PERCENTAGE / 100))
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

      listRef.scroll({
        left,
        behavior: 'smooth'
      })

      // Relying on setTimeout since scroll does not have a callback / doesn't return a promise :(
      setTimeout(() => {
        const { scrollWidth, scrollLeft, offsetWidth } = listRef
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
    },
    [listRef]
  )

  React.useEffect(() => {
    if (!listRef) return
    const { offsetWidth, scrollWidth } = listRef

    const shouldShowScroller = scrollWidth > offsetWidth

    // Scroll to left on resize, hide left scroll button and then decide if right scroll button should be visible or not
    listRef.scroll?.({
      left: 0
    })
    setShowLeftScroller(false)
    setShowRightScroller(shouldShowScroller)
  }, [listRef, screenWidth])

  return (
    <StyledContainer
      base="slate"
      accent="blue"
      interactive="hiContrast1"
      {...colorScheme}
      {...rest}
    >
      {showLeftScroller && (
        <StyledChevronActionIcon
          label="scroll left"
          size="md"
          css={{
            left: 0
          }}
          onClick={() => scrollTriggerListTo('left')}
        >
          <Icon is={ChevronLeft} />
        </StyledChevronActionIcon>
      )}

      <StyledTriggerList ref={setListRefCallback}>{children}</StyledTriggerList>

      {showRightScroller && (
        <StyledChevronActionIcon
          label="scroll right"
          size="md"
          css={{
            right: 0
          }}
          onClick={() => scrollTriggerListTo('right')}
        >
          <Icon is={ChevronRight} />
        </StyledChevronActionIcon>
      )}
    </StyledContainer>
  )
}

TabsTriggerList.displayName = 'TabsTriggerList'
