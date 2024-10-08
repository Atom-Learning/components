import { useEffect, useMemo, useState } from 'react'
import { debounce, throttle } from 'throttle-debounce'

type TUseWindowScrollPositionOptions = {
  delay?: number
  delayMethod?: 'throttle' | 'debounce'
}

type TUseWindowScrollPositionOutput = {
  x: number
  y: number
}

export const useWindowScrollPosition = ({
  delay = 500,
  delayMethod = 'throttle'
}: TUseWindowScrollPositionOptions = {}): TUseWindowScrollPositionOutput => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  const delayMethodFn = useMemo(
    () => (delayMethod === 'debounce' ? debounce : throttle),
    [delayMethod]
  )

  useEffect(() => {
    const handleScroll = delayMethodFn(delay, () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY })
    })

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [delayMethodFn, delay])

  return scrollPosition
}
