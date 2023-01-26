import { useEffect, useState } from 'react'
import { debounce, throttle } from 'throttle-debounce'

export const useWindowScrollPosition = ({ delay = 500, delayMethod = throttle }: { delay?: number, delayMethod?: throttle | debounce } = {}): {
  x: number
  y: number
} => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = delayMethod(delay, () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY })
    })

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}
