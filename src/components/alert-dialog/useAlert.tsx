import * as React from 'react'

import { Button } from '../button'
import { Heading } from '../heading'
import { Stack } from '../stack'
import { Text } from '../text'
import { AlertDialog } from './AlertDialog'

type contentType = {
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
          <AlertDialog.Content
            onCloseAutoFocus={() => setContent(undefined)}
            onEscapeKeyDown={(e) => e.preventDefault()}
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <Heading
              as={AlertDialog.Title}
              size="sm"
              css={{ mb: '$3', textAlign: 'center' }}
            >
              {content.title}
            </Heading>
            {content.description && (
              <Text
                as={AlertDialog.Description}
                css={{ mb: '$4', textAlign: 'center' }}
              >
                {content.description}
              </Text>
            )}
            <Stack gap="3" css={{ mx: 'auto' }}>
              <Button
                size="sm"
                theme="danger"
                as={AlertDialog.Cancel}
                onClick={() => onAction(false)}
              >
                {content.cancelActionText || 'Cancel'}
              </Button>
              <Button
                size="sm"
                theme="success"
                as={AlertDialog.Action}
                onClick={() => onAction(true)}
              >
                {content.confirmActionText || 'Confirm'}
              </Button>
            </Stack>
          </AlertDialog.Content>
        )}
      </AlertDialog>
      {children}
    </AlertContext.Provider>
  )
}

export const useAlert = (): context => React.useContext(AlertContext)
