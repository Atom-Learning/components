import { useEffect, useState, useMemo } from 'react'
import { debounce, throttle } from 'throttle-debounce'

type TUseScrollPositionOptions = {
  element?: HTMLElement | null
  delay?: number
  delayMethod?: 'throttle' | 'debounce'
}

type TUseScrollPositionOutput = {
  left: number
  top: number
}

export const useScrollPosition = ({
  element,
  delay = 500,
  delayMethod = 'throttle'
}: TUseScrollPositionOptions): TUseScrollPositionOutput => {
  const [scrollPosition, setScrollPosition] = useState({ left: 0, top: 0 })

  const delayMethodFn = useMemo(() => {
    if (delayMethod === 'throttle') return throttle
    if (delayMethod === 'debounce') return debounce
  }, [delayMethod])

  useEffect(() => {
    if (!element) return

    const handleScroll = delayMethodFn(delay, () => {
      setScrollPosition({ left: element.scrollLeft, top: element.scrollTop })
    })

    element.addEventListener('scroll', handleScroll)

    return () => {
      element.removeEventListener('scroll', handleScroll)
    }
  }, [element, delayMethodFn, delay])

  return scrollPosition
}
