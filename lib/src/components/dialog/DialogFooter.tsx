import { Close } from '@radix-ui/react-dialog'
import * as React from 'react'
import { Flex } from '../flex'

export const DialogFooter = ({
  css,
  ...props
}: React.ComponentProps<typeof Flex>) => (
  <Flex justify="end" css={{ pt: '$4', ...css }} {...props} />
)
