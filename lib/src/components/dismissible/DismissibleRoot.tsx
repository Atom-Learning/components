import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'

export interface IDismissibleRootContext {
  disabled?: boolean
  isDismissed: boolean
  setIsDismissed: (boolean) => void
}

export const DismissibleRootContext =
  React.createContext<IDismissibleRootContext>({
    isDismissed: false,
    setIsDismissed: () => null
  })

export interface IDismissibleRootProps {
  disabled?: boolean
}

export const DismissibleRootProvider: React.FC<IDismissibleRootProps> = ({
  children,
  disabled
}) => {
  const [isDismissed, setIsDismissed] = React.useState(false)
  const value = React.useMemo<IDismissibleRootContext>(
    () => ({ disabled, isDismissed, setIsDismissed }),
    [disabled, isDismissed]
  )
  return (
    <DismissibleRootContext.Provider value={value}>
      {children}
    </DismissibleRootContext.Provider>
  )
}

export interface IDismissibleGroupItemProps {
  asChild?: boolean
  value: React.ReactText
  onDismiss?: (value: React.ReactText) => void
}

const DismissibleRootInternal: React.FC<IDismissibleGroupItemProps> = ({
  asChild = false,
  value,
  onDismiss,
  ...rest
}) => {
  const rootContext = React.useContext(DismissibleRootContext)

  const { isDismissed, disabled } = rootContext

  React.useEffect(() => {
    if (isDismissed) onDismiss?.(value)
  }, [isDismissed])

  if (isDismissed) return null

  const props = { ...(disabled && { [`data-disabled`]: '' }), ...rest }
  const Component = asChild ? Slot : 'div'
  return <Component {...props} />
}
export const DismissibleRoot: React.FC<
  IDismissibleGroupItemProps & IDismissibleRootProps
> = ({ disabled = false, ...rest }) => (
  <DismissibleRootProvider disabled={disabled}>
    <DismissibleRootInternal {...rest} />
  </DismissibleRootProvider>
)
