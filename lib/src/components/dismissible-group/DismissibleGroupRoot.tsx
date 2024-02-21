import * as React from 'react'

export interface IDismissibleGroupContext {
  disabled?: boolean
  onDismiss: (value: React.ReactText) => void
}
export const DismissibleGroupContext =
  React.createContext<IDismissibleGroupContext>({
    onDismiss: () => null
  })

export interface IDismissibleGroupProps {
  disabled?: boolean
  onDismiss: (value: React.ReactText) => void
}

export const DismissibleGroupProvider = ({
  children,
  disabled,
  onDismiss
}: React.PropsWithChildren<IDismissibleGroupProps>) => {
  const value = React.useMemo<IDismissibleGroupContext>(
    () => ({ disabled, onDismiss }),
    [disabled, onDismiss]
  )
  return (
    <DismissibleGroupContext.Provider value={value}>
      {children}
    </DismissibleGroupContext.Provider>
  )
}

export interface IDismissibleGroupRootProps extends IDismissibleGroupProps {
  as?: React.ElementType
}

export const DismissibleGroupRoot = ({
  as: Component = 'div',
  disabled,
  onDismiss,
  ...rest
}: React.PropsWithChildren<IDismissibleGroupRootProps>) => {
  return (
    <DismissibleGroupProvider disabled={disabled} onDismiss={onDismiss}>
      <Component {...rest} />
    </DismissibleGroupProvider>
  )
}
