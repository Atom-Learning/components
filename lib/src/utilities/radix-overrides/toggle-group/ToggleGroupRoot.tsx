import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as React from 'react'

type RootType = {
  disableDeselect?: boolean
}

export const ToggleGroupRoot: React.ForwardRefExoticComponent<
  React.ComponentProps<typeof ToggleGroup.Root> & RootType
> = React.forwardRef(
  ({ disableDeselect = false, onValueChange, defaultValue, ...rest }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const handleValueChange = (newValue) => {
      if (disableDeselect && (newValue === '' || newValue.length === 0)) return
      setInternalValue(newValue)
      onValueChange?.(newValue)
    }

    return (
      <ToggleGroup.Root
        ref={ref}
        onValueChange={handleValueChange}
        value={internalValue}
        {...rest}
      />
    )
  }
)
