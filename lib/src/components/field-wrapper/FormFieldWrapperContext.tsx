import * as React from 'react'

export type TFormFieldWrapperProviderProps = {
  fieldRef?: React.MutableRefObject<unknown>,
  updateValue?: (unknown) => void,
  value?: unknown
}

type TFormFieldWrapperContextValue = TFormFieldWrapperProviderProps

const INITIAL_CONTEXT_VALUE = {}

export const FormFieldWrapperContext = React.createContext<TFormFieldWrapperContextValue>(INITIAL_CONTEXT_VALUE)

export const useFormFieldWrapperContext = (): TFormFieldWrapperContextValue => {
  const context = React.useContext(FormFieldWrapperContext)

  if (context === undefined) {
    /* (!) Note:
     * We don't want to throw an error for this useContext; even if it's not actually IN the context!
     * That's because a field which will be using this may, or may not actually be in a `FormFieldWrapper` (or may be used by itself).
     * Just send back the basic object.
     */
    return INITIAL_CONTEXT_VALUE
  }

  return context
}

export const FormFieldWrapperProvider: React.FC<TFormFieldWrapperProviderProps> = ({
  fieldRef,
  value,
  updateValue,
  children
}) => {


  const contextValue = React.useMemo<TFormFieldWrapperContextValue>(
    () => ({ fieldRef, value, updateValue }),
    [fieldRef, value, updateValue]
  )
  return (
    <FormFieldWrapperContext.Provider value={contextValue}>{children}</FormFieldWrapperContext.Provider>
  )
}
