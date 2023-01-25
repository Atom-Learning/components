import { useEffect, useState } from 'react'
import { debounce } from 'throttle-debounce'

export const useWindowScrollPosition = ({ delay = 500 } = {}): {
  x: number
  y: number
} => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = debounce(delay, () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY })
    })

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}
