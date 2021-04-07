import * as React from 'react'

import { CSS } from '~/stitches'

import { Button } from '../../button'
import { Heading } from '../../heading'
import { Stack } from '../../stack'
import { Text } from '../../text'
import { AlertDialog } from '../AlertDialog'
import { contentType } from './useAlert'

type AlertDialogContentProps = contentType &
  React.ComponentProps<typeof AlertDialog.Content> & { css?: CSS }

export const AlertDialogContent: React.FC<AlertDialogContentProps> = ({
  title,
  description,
  onAction,
  cancelActionText,
  confirmActionText,
  css,
  ...remainingProps
}) => (
  <AlertDialog.Content
    onEscapeKeyDown={(e) => e.preventDefault()}
    onPointerDownOutside={(e) => e.preventDefault()}
    css={{ textAlign: 'center', ...(css as any) }}
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
        {cancelActionText || 'Cancel'}
      </Button>
      <Button
        size="sm"
        theme="success"
        as={AlertDialog.Action}
        onClick={() => onAction(true)}
      >
        {confirmActionText || 'Confirm'}
      </Button>
    </Stack>
  </AlertDialog.Content>
)
