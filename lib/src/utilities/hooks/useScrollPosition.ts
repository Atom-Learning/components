import { useEffect, useState } from 'react'
import { debounce } from 'throttle-debounce'

export const useScrollPosition = ({
  element,
  delay = 500
}: {
  element?: HTMLElement | null
  delay?: number
}): {
  left: number
  top: number
} => {
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
  }, [element])

  return scrollPosition
}
