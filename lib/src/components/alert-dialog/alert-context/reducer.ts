import { uid } from 'uid'
import { alert } from './types'

type State = alert[]
type Action =
  | { type: 'ADD'; payload: alert }
  | { type: 'REMOVE'; payload: string }

export const initialState = []

export const reducer = (state: State, action: Action): alert[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, { ...action.payload, id: action.payload.id || uid() }] // @TODO
    case 'REMOVE':
      return state.filter(({ id }) => id !== action.payload)
    default:
      return state
  }
}
