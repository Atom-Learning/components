import React, { useCallback, useEffect, useRef, useState } from 'react'
import { debounce } from 'throttle-debounce'
import { opacify } from 'polished'

import { Flex } from '../flex'

import { styled, theme } from '~/stitches'

import { FilterTabsButton } from './FilterTabsButton'

const fadedPrimaryDark = opacify(-0.9, theme.colors.primary.value)

type FilterTabsType = {
  filters: string[]
  value?: string
  defaultValue?: string
  onValueChange: (value) => void
  disabled?: boolean
}

const FilterTabsOuter = styled('div', {
  position: 'relative'
})

const FilterTabsContainer = styled(Flex, {
  flexShrink: '0',
  borderBottom: '1px solid $tonal300',
  overflowX: 'auto',
  width: '100%',
  cursor: 'pointer'
})

const FilterTabsItem = styled(Flex, {
  fontFamily: '$body',
  p: '$4',
  height: '$5',
  flexShrink: '0',
  '&:hover': {
    bg: `${fadedPrimaryDark}`
  },
  '&[data-disabled=true]': {
    bg: 'unset',
    color: '$tonal300',
    cursor: 'not-allowed'
  },
  variants: {
    selected: {
      true: {
        fontWeight: '600',
        color: '$primary'
      }
    }
  }
})

export const FilterTabs: React.FC<FilterTabsType> &
  React.ComponentProps<typeof FilterTabsContainer> = ({
  filters,
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  ...remainingProps
}) => {
  const filterTabsRef = useRef<HTMLDivElement>(null)
  const [showLeftScroller, setShowLeftScroller] = useState<boolean>(false)
  const [showRightScroller, setShowRightScroller] = useState<boolean>(false)
  const [screenWidth, setScreenWidth] = useState<number>()
  const [currentValue, setCurrentValue] = useState<string>()

  const scrollTriggerListTo = useCallback((direction: 'left' | 'right') => {
    const tabsList = filterTabsRef.current
    if (tabsList) {
      const { scrollWidth, scrollLeft } = tabsList
      const scrollAmount = Math.round(scrollWidth * 0.1)
      let left = scrollLeft
      if (direction === 'right') {
        const newScrollAmount = tabsList.scrollLeft + scrollAmount
        left = newScrollAmount <= scrollWidth ? newScrollAmount : scrollLeft
      } else {
        const newScrollAmount = scrollLeft - scrollAmount
        left = newScrollAmount > 0 ? newScrollAmount : 0
      }

      tabsList.scroll({
        left,
        behavior: 'smooth'
      })

      setTimeout(() => {
        const { scrollWidth, scrollLeft, offsetWidth } = tabsList
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
      }, 500)
    }
  }, [])

  useEffect(() => {
    const onResize = debounce(500, () => {
      setScreenWidth(window.innerWidth)
    })
    window.addEventListener('resize', onResize)

    if (defaultValue) setCurrentValue(defaultValue)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    const tabsList = filterTabsRef.current
    if (tabsList) {
      const { offsetWidth, scrollWidth } = tabsList

      const shouldShowScroller = scrollWidth > offsetWidth

      tabsList.scroll?.({
        left: 0
      })
      setShowLeftScroller(false)
      setShowRightScroller(shouldShowScroller)
    }
  }, [screenWidth])

  return (
    <FilterTabsOuter>
      <FilterTabsContainer {...remainingProps} ref={filterTabsRef}>
        {filters.map((filter) => (
          <FilterTabsItem
            selected={filter === (value || currentValue)}
            onClick={() => {
              if (!disabled) {
                onValueChange(filter)
                setCurrentValue(filter)
              }
            }}
            key={filter}
            data-disabled={disabled}
          >
            {filter}
          </FilterTabsItem>
        ))}
      </FilterTabsContainer>
      <FilterTabsButton
        onClick={scrollTriggerListTo}
        visible={showLeftScroller}
        side="left"
        disabled={disabled}
      />
      <FilterTabsButton
        onClick={scrollTriggerListTo}
        visible={showRightScroller}
        side="right"
        disabled={disabled}
      />
    </FilterTabsOuter>
  )
}
