import * as React from 'react'

import { TInlineMessage } from '~/components/inline-message'

import { TFieldWrapperProps } from './FieldWrapper'

export type TFieldWrapperProviderProps = {
  name: TFieldWrapperProps['name']
  feedback: TFieldWrapperProps['feedback']
}

type TFieldWrapperContextValue = {
  name?: TFieldWrapperProps['name']
  state?: TInlineMessage['theme']
}

const INITIAL_CONTEXT_VALUE = {}

export const FieldWrapperContext = React.createContext<TFieldWrapperContextValue>(INITIAL_CONTEXT_VALUE)

export const useFieldWrapperContext = (): TFieldWrapperContextValue => {
  const context = React.useContext(FieldWrapperContext)

  if (context === undefined) {
    /* (!) Note:
     * We don't want to throw an error for this useContext; even if it's not actually IN the context!
     * That's because a field which will be using this may, or may not actually be in a `FieldWrapper` (or may be used by itself).
     * Just send back the basic object.
     */
    return INITIAL_CONTEXT_VALUE
  }

  return context
}

export const FieldWrapperProvider: React.FC<TFieldWrapperProviderProps> = ({
  name,
  feedback,
  children
}) => {
  const state = React.useMemo(() => {
    const STATES_IN_ORDER_OF_IMPORTANCE = ['error', 'warning', 'success', 'info', 'neutral'] as const
    const getStateByImportance = () => {
      if (!feedback) return
      const feedbackLength = feedback.length
      if (feedbackLength === 0) return
      if (feedbackLength === 1) return feedback[0].theme
      for (const s of STATES_IN_ORDER_OF_IMPORTANCE) {
        const found = feedback?.some?.(el => el.theme === s);
        if (found) return s
      }
    }
    return getStateByImportance()
  }, [feedback])

  const value = React.useMemo<TFieldWrapperContextValue>(
    () => ({ state, name }),
    [state, name]
  )
  return (
    <FieldWrapperContext.Provider value={value}>{children}</FieldWrapperContext.Provider>
  )
}
