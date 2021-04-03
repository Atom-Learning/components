import * as React from 'react'

import { Heading } from '../heading'
import { Text } from '../text'
import { AlertDialog } from './AlertDialog'

const AlertContext = React.createContext({})

export const AlertProvider: React.FC = ({ children }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [content, setContent] = React.useState({})

  const showAlert = (content) => {
    setDialogOpen(true)
    setContent(content)
  }

  return (
    <AlertContext.Provider value={{ showAlert }}>
      <AlertDialog open={dialogOpen}>
        <AlertDialog.Content>
          {content.title && (
            <Heading as={AlertDialog.Title}>{content.title}</Heading>
          )}
          {content.description && (
            <Text as={AlertDialog.Description}>{content.description}</Text>
          )}
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Accept</AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog>
      {children}
    </AlertContext.Provider>
  )
}

export const useAlert = () => React.useContext(AlertContext)
