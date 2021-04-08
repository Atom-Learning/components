import * as React from 'react'

import { CSS } from '~/stitches'

import { Button } from '../../button'
import { Heading } from '../../heading'
import { Stack } from '../../stack'
import { Text } from '../../text'
import { AlertDialog } from '../AlertDialog'
import { alert } from './types'

type AlertDialogContentProps = React.ComponentProps<typeof AlertDialog> & {
  css?: CSS
  onClose: () => void
} & alert

export const Alert: React.FC<AlertDialogContentProps> = ({
  title,
  description,
  onAction,
  cancelActionText,
  confirmActionText,
  onClose,
  ...remainingProps
}) => (
  <AlertDialog defaultOpen>
    <AlertDialog.Content
      onEscapeKeyDown={(e) => e.preventDefault()}
      onPointerDownOutside={(e) => e.preventDefault()}
      css={{ textAlign: 'center' }}
      onCloseAutoFocus={onClose}
      {...remainingProps}
    >
      <Heading as={AlertDialog.Title} size="sm" css={{ mb: '$3' }}>
        {title}
      </Heading>
      {description && (
        <Text as={AlertDialog.Description} css={{ mb: '$4' }}>
          {description}
        </Text>
      )}
      <Stack gap="3" css={{ mx: 'auto' }}>
        <Button
          size="sm"
          theme="danger"
          as={AlertDialog.Cancel}
          onClick={() => onAction(false)}
        >
          {cancelActionText}
        </Button>
        <Button
          size="sm"
          theme="success"
          as={AlertDialog.Action}
          onClick={() => onAction(true)}
        >
          {confirmActionText}
        </Button>
      </Stack>
    </AlertDialog.Content>
  </AlertDialog>
)
