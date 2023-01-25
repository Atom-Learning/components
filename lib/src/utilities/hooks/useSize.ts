import { useCallback, useState, useMemo } from 'react'
import { useResizeObserver } from './useResizeObserver'

interface Size {
  width: number | undefined
  height: number | undefined
}

export const useSize = ({
  element,
  delay = 500
}: {
  element?: HTMLElement | null
  delay?: number
}): Size => {
  const [size, setSize] = useState<Size>({
    width: undefined,
    height: undefined
  })

  const handleResize = useCallback(() => {
    setSize({
      width: element?.clientWidth,
      height: element?.clientHeight
    })
  }, [element])

  const elements = useMemo(() => [element], [element])

  useResizeObserver({
    delay,
    elements: elements,
    onResize: handleResize
  })

  return size
}
