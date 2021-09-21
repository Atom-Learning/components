import * as React from 'react'

import { useIsMountedRef } from '~/utilities/use-is-mounted-ref'

import { Alert } from './AlertDialog'
import { initialState, reducer } from './reducer'
import type { alert } from './types'

type context = {
  showAlert: (data: alert) => void
}

const AlertContext = React.createContext<context>({
  showAlert: () => null
})

export const AlertProvider: React.FC = ({ children }) => {
  const [alerts, dispatch] = React.useReducer(reducer, initialState)
  const isMountedRef = useIsMountedRef()

  return (
    <AlertContext.Provider
      value={{
        showAlert: (content: alert) =>
          dispatch({
            payload: content,
            type: 'ADD'
          })
      }}
    >
      {Boolean(alerts.length) && (
        <Alert
          {...alerts[0]}
          key={alerts[0].id}
          onClose={() => {
            if (isMountedRef.current)
              dispatch({
                payload: alerts[0].id,
                type: 'REMOVE'
              })
          }}
        />
      )}
      {children}
    </AlertContext.Provider>
  )
}

export const useAlert = (): context => {
  const context = React.useContext(AlertContext)

  if (context === undefined) {
    throw new Error('useAlert must be used within a AlertProvider')
  }

  return context
}
