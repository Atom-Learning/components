import * as React from 'react'

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
          onClose={() =>
            dispatch({
              payload: alerts[0].id,
              type: 'REMOVE'
            })
          }
        />
      )}
      {children}
    </AlertContext.Provider>
  )
}

export const useAlert = (): context => React.useContext(AlertContext)
