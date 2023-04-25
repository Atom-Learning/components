import React from 'react'

import { SectionMessageTheme } from './SectionMessage'

interface SectionMessageContextValue {
  theme: SectionMessageTheme
}

export const SectionMessageContext = React.createContext<
  SectionMessageContextValue | undefined
>(undefined)

export const useSectionMessageContext = (): SectionMessageContextValue => {
  const context = React.useContext(SectionMessageContext)

  if (context === undefined) {
    throw new Error(
      'useSectionMessageContext must be used within a SectionMessageProvider'
    )
  }

  return context
}
