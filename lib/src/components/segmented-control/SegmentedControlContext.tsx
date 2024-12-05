import * as React from 'react'

import type { SegmentedControlRootProps } from './SegmentedControlRoot'

export type SegmentedControlTheme = 'primary' | 'marsh'

interface SegmentedControlContextValue {
  size: SegmentedControlRootProps['size']
  theme: SegmentedControlTheme
}

export interface SegmentedControlProviderProps
  extends SegmentedControlContextValue {
  children: React.ReactNode
}

const SegmentedControlContext =
  React.createContext<SegmentedControlContextValue | null>(null)

export const SegmentedControlProvider = ({
  size,
  theme,
  children
}: SegmentedControlProviderProps): JSX.Element => {
  const value = React.useMemo<SegmentedControlContextValue>(
    () => ({ size, theme }),
    [size, theme]
  )

  return (
    <SegmentedControlContext.Provider value={value}>
      {children}
    </SegmentedControlContext.Provider>
  )
}

export const useSegmentedControl = (): SegmentedControlContextValue => {
  const context = React.useContext(SegmentedControlContext)

  if (!context) {
    throw new Error(
      'useSegmentedControlContext must be used within a SegmentedControlProvider'
    )
  }

  return context
}
