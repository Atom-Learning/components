import * as React from 'react'

import { AlertDialog } from '../AlertDialog'
import { AlertDialogContent } from './AlertDialog'

export type contentType = {
  title: string
  description?: string
  onAction: (result: boolean) => void
  confirmActionText?: string
  cancelActionText?: string
}

type context = {
  showAlert: (data: contentType) => void
}

const AlertContext = React.createContext<context>({ showAlert: () => null })

export const AlertProvider: React.FC = ({ children }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [content, setContent] = React.useState<contentType | undefined>(
    undefined
  )

  const showAlert = (data) => {
    setContent(data)
    setDialogOpen(true)
  }

  const onAction = (result) => {
    setDialogOpen(false)
    content?.onAction?.(result)
  }

  return (
    <AlertContext.Provider value={{ showAlert }}>
      <AlertDialog open={dialogOpen}>
        {content && (
          <AlertDialogContent
            {...content}
            onAction={onAction}
            onCloseAutoFocus={() => setContent(undefined)}
          />
        )}
      </AlertDialog>
      {children}
    </AlertContext.Provider>
  )
}

export const useAlert = (): context => React.useContext(AlertContext)
