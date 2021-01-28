import React from 'react'

import { Box } from '../dist'
/**
 * Component library sandbox
 *
 * Useful documentation:
 * - https://stitches.dev
 * - https://github.com/typescript-cheatsheets/react/blob/main/README.md#basic-cheatsheet-table-of-contents
 *
 * Note: Please don't commit the changes in /sandbox/index.tsx
 */
const Container = (props) => (
  <Box
    as="main"
    css={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...props}
  />
)

const Body = (props) => <Box css={{ flexGrow: 1 }} {...props} />

export const Sandbox = ({ children }) => (
  <Container>
    <Body>{children}</Body>
  </Container>
)
