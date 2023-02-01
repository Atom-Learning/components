import { useEffect, useState, useMemo } from 'react'
import { debounce, throttle } from 'throttle-debounce'

export const useWindowScrollPosition = ({ delay = 500, delayMethod = 'throttle' }: { delay?: number, delayMethod?: 'throttle' | 'debounce' } = {}): {
  x: number
  y: number
} => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  const delayMethodFn = useMemo(() => {
    if (delayMethod === 'throttle') return throttle
    if (delayMethod === 'debounce') return debounce
  }, [delayMethod])

  useEffect(() => {
    const handleScroll = delayMethodFn(delay, () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY })
    })

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [delayMethodFn])

  return scrollPosition
}
