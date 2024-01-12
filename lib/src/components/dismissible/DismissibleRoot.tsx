import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

export interface IDismissibleRootContext {
  disabled?: boolean
  isDismissed: boolean
  setIsDismissed: (boolean) => void
  onDismiss: () => void
}

export const DismissibleRootContext =
  React.createContext<IDismissibleRootContext>({
    isDismissed: false,
    setIsDismissed: () => undefined,
    onDismiss: () => undefined
  })

export interface IDismissibleRootProps {
  disabled?: boolean
  dismissed?: boolean
  onDismiss?: () => void
}

export const DismissibleRootProvider: React.FC<IDismissibleRootProps> = ({
  dismissed: controlledIsDismissed,
  children,
  disabled,
  onDismiss = () => null
}) => {
  const [isDismissed, setIsDismissed] = React.useState(false)

  const value = React.useMemo<IDismissibleRootContext>(() => {
    const isControlled = typeof controlledIsDismissed === 'boolean'
    return {
      disabled,
      isDismissed: isControlled
        ? (controlledIsDismissed as boolean)
        : isDismissed,
      setIsDismissed: isControlled ? () => null : setIsDismissed,
      onDismiss
    }
  }, [disabled, isDismissed, onDismiss, controlledIsDismissed])

  return (
    <DismissibleRootContext.Provider value={value}>
      {children}
    </DismissibleRootContext.Provider>
  )
}

export interface IDismissibleRootInternalProps {
  asChild?: boolean
}

const DismissibleRootInternal: React.FC<IDismissibleRootInternalProps> = ({
  asChild = false,
  ...rest
}) => {
  const rootContext = React.useContext(DismissibleRootContext)

  const { isDismissed, disabled } = rootContext

  if (isDismissed) return null

  const props = { ...(disabled && { [`data-disabled`]: '' }), ...rest }
  const Component = asChild ? Slot : 'div'
  return <Component {...props} />
}

export const DismissibleRoot: React.FC<
  IDismissibleRootInternalProps & IDismissibleRootProps
> = ({ disabled = false, dismissed, onDismiss, ...rest }) => (
  <DismissibleRootProvider
    dismissed={dismissed}
    disabled={disabled}
    onDismiss={onDismiss}
  >
    <DismissibleRootInternal {...rest} />
  </DismissibleRootProvider>
)
