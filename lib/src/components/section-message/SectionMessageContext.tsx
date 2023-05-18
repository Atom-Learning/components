import React from 'react'

import type { SectionMessageTheme } from './SectionMessage'

export type SectionMessageContextValue = {
  theme: SectionMessageTheme
  hasIcon: boolean
  setHasIcon: React.Dispatch<React.SetStateAction<boolean>>
  hasDismiss: boolean
  setHasDismiss: React.Dispatch<React.SetStateAction<boolean>>
}
export type SectionMessageProviderProps = {
  theme: SectionMessageTheme
  children: React.ReactNode
}

export const SectionMessageContext =
  React.createContext<SectionMessageContextValue | null>(null)

export const SectionMessageProvider = ({
  theme = 'info',
  children
}: SectionMessageProviderProps): JSX.Element => {
  const [hasIcon, setHasIcon] = React.useState(false)
  const [hasDismiss, setHasDismiss] = React.useState(false)

  const value = React.useMemo<SectionMessageContextValue>(
    () => ({ theme, hasIcon, setHasIcon, hasDismiss, setHasDismiss }),
    [theme, hasIcon, setHasIcon, hasDismiss, setHasDismiss]
  )

  return (
    <SectionMessageContext.Provider value={value}>
      {children}
    </SectionMessageContext.Provider>
  )
}

export const useSectionMessageContext = (): SectionMessageContextValue => {
  const context = React.useContext(SectionMessageContext)

  if (!context) {
    throw new Error(
      'useSectionMessageContext must be used within a SectionMessageProvider'
    )
  }

  return context
}
