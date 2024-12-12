import * as React from 'react'

import type { SegmentedControlRootProps } from './SegmentedControlRoot'

export type SegmentedControlTheme = 'primary' | 'marsh'

interface SegmentedControlContextValue {
  size: SegmentedControlRootProps['size']
  theme: SegmentedControlTheme
}

interface SegmentedControlProviderProps extends SegmentedControlContextValue {
  children: React.ReactNode
}

const SegmentedControlContext =
  React.createContext<SegmentedControlContextValue>({
    size: 'md',
    theme: 'primary'
  })

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

export const useSegmentedControl = (): SegmentedControlContextValue =>
  React.useContext(SegmentedControlContext)
