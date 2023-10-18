import * as React from 'react'

import { CSS } from '~/stitches'

import { Button } from '../../button'
import { Heading } from '../../heading'
import { Flex } from '../../flex'
import { Text } from '../../text'
import { AlertDialog } from '../AlertDialog'
import { AlertDialogClose } from './AlertDialogClose'
import type { alert } from './types'

type AlertDialogContentProps = React.ComponentProps<typeof AlertDialog> & {
  css?: CSS
  onClose: () => void
} & alert

export const Alert: React.FC<AlertDialogContentProps> = ({
  title,
  size,
  description,
  onAction,
  cancelActionText,
  confirmActionText,
  onClose,
  showCloseButton = true,
  ...remainingProps
}) => (
  <AlertDialog defaultOpen>
    <AlertDialog.Content
      size={size}
      onEscapeKeyDown={(e) => e.preventDefault()}
      onCloseAutoFocus={onClose}
      {...remainingProps}
    >
      <Heading as={AlertDialog.Title} size="sm" css={{ mb: '$5', mr: '$4' }}>
        {title}
      </Heading>
      {showCloseButton && <AlertDialogClose />}
      {description && (
        <Text as={AlertDialog.Description} css={{ mb: '$5' }}>
          {description}
        </Text>
      )}
      <Flex gap="2" justify="end">
        {cancelActionText && (
          <Button
            appearance="outline"
            as={AlertDialog.Cancel}
            onClick={() => onAction(false)}
            size="sm"
          >
            {cancelActionText}
          </Button>
        )}
        <Button
          as={AlertDialog.Action}
          onClick={() => onAction(true)}
          size="sm"
        >
          {confirmActionText}
        </Button>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog>
)
