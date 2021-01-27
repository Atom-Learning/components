import React from 'react'

import { Box, css, Link } from '../dist'

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

const Header = () => (
  <Box
    as="header"
    css={{
      backgroundColor: 'tonal',
      p: '$3',
      borderRadius: '$1',
      mb: '$3'
    }}
  >
    <h1 className={css({ margin: '$2 0' })}>Component lib sandbox</h1>

    <Links />
  </Box>
)

const Links = () => (
  <Box as="nav">
    <Link
      href="https://stitches.dev"
      className={css({ marginRight: '16px' })}
      target="_blank"
      rel="noreferrer"
    >
      Stitches docs
    </Link>
    <Link
      className={css({ marginRight: '16px' })}
      href="https://github.com/typescript-cheatsheets/react/blob/main/README.md#basic-cheatsheet-table-of-contents"
      target="_blank"
      rel="noreferrer"
    >
      TypeScript/React cheat sheet
    </Link>
  </Box>
)

const Body = (props) => <Box css={{ flexGrow: 1, p: '$3' }} {...props} />

export const Sandbox = ({ children }) => (
  <Container>
    <Header />
    <Body>{children}</Body>
  </Container>
)
