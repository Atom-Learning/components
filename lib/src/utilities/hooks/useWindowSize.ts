import { useEffect, useState } from 'react'
import { debounce } from 'throttle-debounce'

interface Size {
  width: number | undefined
  height: number | undefined
}

export const useWindowSize = ({
  delay = 500
}: { delay?: number } = {}): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleResize = debounce(delay, () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    })

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [delay])

  return windowSize
}
