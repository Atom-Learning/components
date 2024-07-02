import * as React from 'react'

import type { EmptyStateProps } from './EmptyState'

type EmptyStateProviderProps = {
  size?: EmptyStateProps['size']
}

type EmptyStateContextValue = EmptyStateProviderProps

export const EmptyStateContext = React.createContext<EmptyStateContextValue>({})

export const EmptyStateProvider = ({
  size,
  children
}: React.PropsWithChildren<EmptyStateProviderProps>) => {
  const value = React.useMemo<EmptyStateContextValue>(() => ({ size }), [size])
  return (
    <EmptyStateContext.Provider value={value}>
      {children}
    </EmptyStateContext.Provider>
  )
}
