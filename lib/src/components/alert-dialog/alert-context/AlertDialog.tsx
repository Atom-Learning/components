import * as React from 'react'

import { CSS } from '~/stitches'

import { Button } from '../../button'
import { Flex } from '../../flex'
import { Heading } from '../../heading'
import { Text } from '../../text'
import { AlertDialog } from '../AlertDialog'
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
  confirmElement,
  cancelElement,
  ...remainingProps
}) => (
  <AlertDialog defaultOpen>
    <AlertDialog.Content
      size={size}
      onEscapeKeyDown={(e) => e.preventDefault()}
      onCloseAutoFocus={onClose}
      css={{
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '90vh',
        gap: '$5'
      }}
      {...remainingProps}
    >
      <Flex align="center" gap="2">
        {theme && <AlertDialogIcon theme={theme} />}
        <Heading as={AlertDialog.Title} size="sm" css={{ mr: '$4' }}>
          {title}
        </Heading>
      </Flex>
      {description && (
        <Text
          as={AlertDialog.Description}
          css={{ display: 'flex', overflowY: 'auto' }}
        >
          {description}
        </Text>
      )}
      <Flex gap="2" justify="end" wrap="wrap">
        <AlertDialog.Cancel asChild>
          {cancelElement ||
            (cancelActionText && (
              <Button
                size="sm"
                appearance="outline"
                onClick={() => onAction?.(false)}
              >
                {cancelActionText}
              </Button>
            ))}
        </AlertDialog.Cancel>
        <AlertDialog.Action asChild>
          {confirmElement || (
            <Button size="sm" onClick={() => onAction?.(true)}>
              {confirmActionText}
            </Button>
          )}
        </AlertDialog.Action>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog>
)
