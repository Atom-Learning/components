import * as React from 'react'
import { uid } from 'uid'

import { Alert } from './AlertDialog'

export type alert = {
  id: ReturnType<typeof uid>
  title: string
  description?: string
  onAction: (result: boolean) => void
  confirmActionText?: string
  cancelActionText?: string
}
type context = {
  showAlert: (data: alert) => void
}

type State = alert[]
type Action =
  | { type: 'ADD'; payload: alert }
  | { type: 'REMOVE'; payload: string }

const reducer = (state: State, action: Action): alert[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, { ...action.payload, id: uid() }]
    case 'REMOVE':
      return state.filter((t) => t.id !== action.payload)
    default:
      return state
  }
}

const AlertContext = React.createContext<context>({
  showAlert: () => null
})

export const AlertProvider: React.FC = ({ children }) => {
  const [alerts, dispatch] = React.useReducer(reducer, [])

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
