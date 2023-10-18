import * as React from 'react'

import { CSS } from '~/stitches'

import { Button } from '../../button'
import { Heading } from '../../heading'
import { Flex } from '../../flex'
import { Text } from '../../text'
import { AlertDialog } from '../AlertDialog'
import { AlertDialogClose } from './AlertDialogClose'
import { AlertDialogIcon } from './AlertDialogIcon'
import type { alert } from './types'

type AlertDialogContentProps = React.ComponentProps<typeof AlertDialog> & {
  css?: CSS
  onClose: () => void
} & alert

export const Alert: React.FC<AlertDialogContentProps> = ({
  title,
  size,
  theme,
  description,
  onAction,
  cancelActionText,
  confirmActionText,
  onClose,
  showCloseButton = true,
  confirmButtonTheme = 'primary',
  confirmButtonAppearance = 'solid',
  cancelButtonTheme = 'primary',
  cancelButtonAppearance = 'outline',
  ...remainingProps
}) => (
  <AlertDialog defaultOpen>
    <AlertDialog.Content
      size={size}
      onEscapeKeyDown={(e) => e.preventDefault()}
      onCloseAutoFocus={onClose}
      css={{ display: 'flex', flexDirection: 'column', maxHeight: '90vh' }}
      {...remainingProps}
    >
      <Flex css={{ alignItems: 'center', mb: '$5' }}>
        {theme && <AlertDialogIcon theme={theme} />}
        <Heading as={AlertDialog.Title} size="sm" css={{ mr: '$4' }}>
          {title}
        </Heading>
      </Flex>
      {showCloseButton && <AlertDialogClose />}
      {description && (
        <Text
          as={AlertDialog.Description}
          css={{ display: 'flex', overflowY: 'scroll', mb: '$5' }}
        >
          {description}
        </Text>
      )}
      <Flex gap="2" justify="end">
        {cancelActionText && (
          <Button
            as={AlertDialog.Cancel}
            onClick={() => onAction?.(false)}
            size="sm"
            theme={cancelButtonTheme}
            appearance={cancelButtonAppearance}
          >
            {cancelActionText}
          </Button>
        )}
        <Button
          as={AlertDialog.Action}
          onClick={() => onAction?.(true)}
          size="sm"
          theme={confirmButtonTheme}
          appearance={confirmButtonAppearance}
        >
          {confirmActionText}
        </Button>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog>
)
