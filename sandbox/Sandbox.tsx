import React from 'react'

import { Box, css } from '../dist'

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}

const Container = (props) => <Box css={containerStyles} {...props} />

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
    <p className={css({ margin: '0 0 $2 0' })}>
      Use this app to quickly render components in an environment where you have
      more control than in Storybook. But don't commit changes to this app into
      the main branch!
    </p>
    <Links />
  </Box>
)

const linkStyle = css({ marginRight: '16px' })

const Links = () => (
  <Box>
    <a
      href="https://stitches.dev"
      className={linkStyle}
      target="_blank"
      rel="noreferrer"
    >
      Stitches docs
    </a>
    <a
      className={linkStyle}
      href="https://github.com/typescript-cheatsheets/react/blob/main/README.md#basic-cheatsheet-table-of-contents"
      target="_blank"
      rel="noreferrer"
    >
      TypeScript/React cheat sheet
    </a>
  </Box>
)

const Body = (props) => <Box css={{ flexGrow: 1, p: '$3' }} {...props} />

export const Sandbox = ({ children }) => (
  <Container>
    <Header />
    <Body>{children}</Body>
  </Container>
)
