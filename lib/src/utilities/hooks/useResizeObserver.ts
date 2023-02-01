import * as React from 'react'
import { debounce } from 'throttle-debounce'

type TUseResizeObserverOptions = {
  elements: (HTMLElement | undefined | null)[]
  onResize: (entries: ResizeObserverEntry[]) => void
  delay?: number
}

type TUseResizeObserverOutput = ResizeObserver | null

const createResizeObserver = (callback: () => void) => {
  try {
    return new ResizeObserver(callback)
  } catch (error) {
    return null
  }
}

export const useResizeObserver = ({
  delay = 500,
  elements,
  onResize
}: TUseResizeObserverOptions): TUseResizeObserverOutput => {
  const observer = React.useMemo(
    () => createResizeObserver(debounce(delay, onResize)),
    [delay, onResize]
  )

  React.useEffect(() => {
    elements.forEach((element) => {
      if (element) {
        observer?.observe(element)
      }
    })

    return () => {
      elements.forEach((element) => element && observer?.unobserve(element))
    }
  }, [observer, elements])

  return observer
}
