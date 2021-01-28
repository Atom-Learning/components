import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import {
  Box,
  Button,
  css,
  Image,
  InputField,
  Link,
  Panel,
  PasswordField,
  Text
} from '../dist'
import logo from './atom-logo.png'

/**
 * Component library sandbox
 *
 * Useful documentation:
 * - https://stitches.dev
 * - https://github.com/typescript-cheatsheets/react/blob/main/README.md#basic-cheatsheet-table-of-contents
 *
 * Use this app to quickly render components in an environment where you have more control than in Storybook. But don't * commit changes to this app into the main branch!
 */

css.global(reset)()

const App = () => {
  return (
    <Box
      css={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'ebf5ff',
        padding: '$2'
      }}
    >
      <Image src={logo} alt="" css={{ width: '400px', mb: '$5' }} />
      <Panel css={{ width: '355px' }}>
        <form className={css({ mb: '$5' })}>
          <InputField
            label="Email or username"
            name="user"
            css={{ mb: '$3' }}
          />
          <PasswordField name="pass" css={{ mb: '$4' }} />
          <Button css={{ width: '100%' }}>Log in</Button>
        </form>
        <Text size="sm" css={{ color: '$tonal500', textAlign: 'center' }}>
          Don't have an account yet?{' '}
          <Link href="https://app.atomlearning.co.uk/register">Sign up!</Link>
        </Text>
      </Panel>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
