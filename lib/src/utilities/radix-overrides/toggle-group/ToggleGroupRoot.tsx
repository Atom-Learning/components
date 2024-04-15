import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as React from 'react'

type RootType = {
  disableDeselect?: boolean
}

type ToggleGroupRootProps = React.ComponentProps<typeof ToggleGroup.Root> &
  RootType

export const ToggleGroupRoot: React.ForwardRefExoticComponent<ToggleGroupRootProps> =
  React.forwardRef(
    (
      { disableDeselect = false, onValueChange, defaultValue, ...rest },
      ref
    ) => {
      const [internalValue, setInternalValue] =
        React.useState<ToggleGroupRootProps['value']>(defaultValue)
      const handleValueChange: ToggleGroupRootProps['onValueChange'] = (
        newValue
      ) => {
        if (disableDeselect && (newValue === '' || newValue?.length === 0))
          return
        setInternalValue(newValue)
        onValueChange?.(newValue)
      }

      return (
        // eslint-disable-next-line
        // @ts-ignore Radix types complain on properties depending on whether `type="single"` or `"multiple"`. Works correctly so muting.
        <ToggleGroup.Root
          ref={ref}
          onValueChange={handleValueChange}
          value={internalValue}
          {...rest}
        />
      )
    }
  )
