import { useEffect, useRef } from 'react'

export const useIsMountedRef = () => {
  const isMountedRef = useRef<boolean>()

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  })

  return isMountedRef
}
