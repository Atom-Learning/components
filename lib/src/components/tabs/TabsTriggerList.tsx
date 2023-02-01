import { List } from '@radix-ui/react-tabs'
import React from 'react'
import { styled } from '~/stitches'
import { ColorScheme } from '~/experiments/color-scheme'
import { useSize } from '~/utilities/hooks/useSize'
import { useScrollPosition } from '~/utilities/hooks/useScrollPosition'
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

export const TabsTriggerList: React.FC<
  React.ComponentProps<typeof StyledTriggerList> & {
    colorScheme?: typeof ColorScheme
  }
> = ({ children, colorScheme = {}, ...rest }) => {
  const [listRef, setListRefCallback] = useCallbackRefState()

  const { width } = useSize({ element: listRef, delay: 500 })
  const { left } = useScrollPosition({ element: listRef, delay: 100, delayMethod: 'debounce' })

  const canScrollXAxis = React.useMemo(() => {
    if (!listRef) return false
    return listRef.scrollWidth > listRef.clientWidth
  }, [width, listRef])

  const canScrollLeft = React.useMemo(() => {
    if (!canScrollXAxis) return false
    return left > 0
  }, [left, canScrollXAxis])

  const canScrollRight = React.useMemo(() => {
    if (!listRef || !canScrollXAxis) return false
    return listRef.scrollWidth - left - listRef.clientWidth > 1 // 1 rather than 0 to account for sub-pixel widths and calculations
  }, [listRef, left, canScrollXAxis])

  const scrollList = React.useCallback(
    (stepModifier) => {
      if (!listRef) return
      listRef.scroll({
        left: listRef.scrollLeft + listRef.clientWidth * stepModifier,
        behavior: 'smooth'
      })
    },
    [listRef]
  )

  return (
    <StyledContainer
      base="slate"
      accent="blue"
      interactive="hiContrast1"
      {...colorScheme}
      {...rest}
    >
      {canScrollLeft && (
        <StyledChevronActionIcon
          label="scroll left"
          size="md"
          css={{
            left: 0
          }}
          onClick={() => scrollList(-0.8)}
        >
          <Icon is={ChevronLeft} />
        </StyledChevronActionIcon>
      )}

      <StyledTriggerList ref={setListRefCallback}>{children}</StyledTriggerList>

      {canScrollRight && (
        <StyledChevronActionIcon
          label="scroll right"
          size="md"
          css={{
            right: 0
          }}
          onClick={() => scrollList(0.8)}
        >
          <Icon is={ChevronRight} />
        </StyledChevronActionIcon>
      )}
    </StyledContainer>
  )
}

TabsTriggerList.displayName = 'TabsTriggerList'
