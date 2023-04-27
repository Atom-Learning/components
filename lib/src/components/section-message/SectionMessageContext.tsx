import React from 'react'

import type { SectionMessageProps } from './SectionMessage'

export type TSectionMessageContext = {
  theme: SectionMessageProps['theme']
  hasIcon: boolean
  setHasIcon: React.Dispatch<React.SetStateAction<boolean>>
  hasDismiss: boolean
  setHasDismiss: React.Dispatch<React.SetStateAction<boolean>>
}
export type TSectionMessageProviderProps = {
  theme: TSectionMessageContext['theme']
}

export const SectionMessageContext =
  React.createContext<TSectionMessageContext>({})

export const SectionMessageProvider: React.FC<TSectionMessageProviderProps> = ({
  theme = 'info',
  children
}) => {
  const [hasIcon, setHasIcon] = React.useState(false)
  const [hasDismiss, setHasDismiss] = React.useState(false)
  const value = React.useMemo<TSectionMessageContext>(
    () => ({ theme, hasIcon, setHasIcon, hasDismiss, setHasDismiss }),
    [theme, hasIcon, setHasIcon, hasDismiss, setHasDismiss]
  )
  return (
    <SectionMessageContext.Provider value={value}>
      {children}
    </SectionMessageContext.Provider>
  )
}

export const useSectionMessageContext = (): TSectionMessageContext => {
  const context = React.useContext(SectionMessageContext)

  if (context === undefined) {
    throw new Error(
      'useSectionMessageContext must be used within a SectionMessageProvider'
    )
  }

  return context
}
