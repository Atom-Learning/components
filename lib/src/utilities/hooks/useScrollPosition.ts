import { useEffect, useState } from 'react'
import { debounce } from 'throttle-debounce'

export const useScrollPosition = ({ elRef, delay = 500 } = {}): {
  left: number
  top: number
} => {
  const [scrollPosition, setScrollPosition] = useState({ left: 0, top: 0 })

  useEffect(() => {
    if (!elRef) return

    const handleScroll = debounce(delay, () => {
      setScrollPosition({ left: elRef.scrollLeft, top: elRef.scrollTop })
    })

    elRef.addEventListener('scroll', handleScroll)

    return () => {
      elRef.removeEventListener('scroll', handleScroll)
    }
  }, [elRef])

  return scrollPosition
}
