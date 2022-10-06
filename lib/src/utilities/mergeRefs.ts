import { useMemo } from 'react'

export type ReactRef<T> = React.RefCallback<T> | React.MutableRefObject<T>

export function assignRef<T = unknown>(
  ref: ReactRef<T> | null | undefined,
  value: T
): void {
  if (ref == null) return

  if (typeof ref === 'function') {
    ref(value)
    return
  }

  try {
    ref.current = value
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}

export function mergeRefs<T>(
  ...refs: (ReactRef<T> | null | undefined)[]
): (node: T | null) => void {
  return (node: T | null) => {
    refs.forEach((ref) => {
      assignRef(ref, node)
    })
  }
}

export function useMergeRefs<T>(
  ...refs: (ReactRef<T> | null | undefined)[]
): (node: T | null) => void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => mergeRefs(...refs), refs)
}
