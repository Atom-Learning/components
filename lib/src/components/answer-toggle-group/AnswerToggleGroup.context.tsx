import * as React from 'react'

import { ToggleGroup } from '~/utilities/radix-overrides/toggle-group'


type AnswerToggleGroupProviderProps = React.ComponentProps<typeof ToggleGroup.Root>

type AnswerToggleGroupContextValue = Pick<AnswerToggleGroupProviderProps, 'value' | 'type'> & {
  setValue: ((newValue: string) => void) & ((newValue: string[]) => void)
}

export const AnswerToggleGroupContext = React.createContext<AnswerToggleGroupContextValue>({
  type: 'single',
  value: '',
  setValue: () => null
})

export const AnswerToggleGroupProvider = ({
  type,
  defaultValue,
  value,
  onValueChange,
  children
}: React.PropsWithChildren<AnswerToggleGroupProviderProps>) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || (type === 'single' ? '' : []))
  const handleValueChange = React.useCallback((newValue: string & string[]) => {
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }, [onValueChange])

  React.useEffect(() => { if (value) setInternalValue(value) }, [value])

  const contextValue = React.useMemo<AnswerToggleGroupContextValue>(
    () => ({ type, value: internalValue, setValue: handleValueChange }),
    [type, internalValue, handleValueChange]
  )
  return <AnswerToggleGroupContext.Provider value={contextValue}>{children}</AnswerToggleGroupContext.Provider>
}
