import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, css } from '../dist'

css.global(reset)

// css.global({
//   body: {
//     margin: 0
//   }
// })

const containerStyles = {
  fontFamily: 'body',
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}

const Container = (props) => <Box css={containerStyles} {...props} />

const Header = () => (
  <Box
    as="header"
    css={{
      backgroundColor: '#ebebeb',
      p: '$3',
      borderRadius: '$1',
      mb: '$3'
    }}
  >
    <h1 style={{ margin: '8px 0' }}>Component lib sandbox</h1>
    <p style={{ margin: '0 0 8px 0' }}>
      Use this app to quickly render components in an environment where you have
      more control than in Storybook. But don't commit changes to this app into
      the main branch!
    </p>
    <Links />
  </Box>
)

const linkStyle = { marginRight: '16px' }

const Links = () => (
  <Box>
    <a
      href="https://stitches.dev"
      style={linkStyle}
      target="_blank"
      rel="noreferrer"
    >
      Stitches docs
    </a>
    <a
      style={linkStyle}
      href="https://github.com/typescript-cheatsheets/react/blob/main/README.md#basic-cheatsheet-table-of-contents"
      target="_blank"
      rel="noreferrer"
    >
      TypeScript/React cheat sheet
    </a>
  </Box>
)

const Body = () => (
  <Box css={{ flexGrow: 1, p: '$3' }}>
    <Box
      css={{
        height: '250px',
        width: '250px',
        p: '$3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 'auto',
        backgroundColor: 'papayawhip'
      }}
    >
      Render whatever you like — even text in a box!!
    </Box>
  </Box>
)
const App = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
