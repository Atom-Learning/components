import { useEffect, useState } from 'react'
import { debounce } from 'throttle-debounce'

type TUseScrollPositionOptions = {
  element?: HTMLElement | null
  delay?: number
}

type TUseScrollPositionOutput = {
  left: number
  top: number
}

export const useScrollPosition = ({
  element,
  delay = 500
}: TUseScrollPositionOptions): TUseScrollPositionOutput => {
  const [scrollPosition, setScrollPosition] = useState({ left: 0, top: 0 })

  useEffect(() => {
    if (!element) return

    const handleScroll = debounce(delay, () => {
      setScrollPosition({ left: element.scrollLeft, top: element.scrollTop })
    })

    element.addEventListener('scroll', handleScroll)

    return () => {
      element.removeEventListener('scroll', handleScroll)
    }
  }, [element, delay])

  return scrollPosition
}
