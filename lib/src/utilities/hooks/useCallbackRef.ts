import * as React from 'react'

export const useCallbackRef: () => [
  React.MutableRefObject<HTMLElement | null>,
  (HTMLElement) => void
] = () => {
  const elRef = React.useRef<HTMLElement | null>(null)

  const setElRefCallback = React.useCallback((el) => {
    if (el) elRef.current = el
  }, [])

  return [elRef, setElRefCallback]
}

export const useCallbackRefState: () => [
  HTMLElement | null,
  (HTMLElement) => void
] = () => {
  const [elRef, setElRef] = React.useState<HTMLElement | null>(null)

  const setElRefCallback = React.useCallback((el) => {
    if (el) setElRef(el)
  }, [])

  return [elRef, setElRefCallback]
}
