import { useEffect, useState } from 'react'
import { throttle } from 'throttle-debounce'

export const useScrollPosition = (): { x: number; y: number } => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })
  const { x, y } = scrollPosition

  useEffect(() => {
    const handleScroll = throttle(500, () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY })
    })

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { x, y }
}
