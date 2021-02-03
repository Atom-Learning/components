import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import {
  Box,
  Button,
  css,
  Flex,
  Form,
  Image,
  InputField,
  Link,
  PasswordField,
  Text
} from '../src'

css.global(reset)()

const Panel = (props) => (
  <Box
    {...props}
    css={{
      backgroundColor: 'white',
      borderRadius: '$2',
      p: '$5',
      boxShadow: '$2',
      width: 475
    }}
  />
)

const App = () => {
  return (
    <Flex
      css={{
        height: '100%',
        width: '100%',
        backgroundColor: '$primary100',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <Image
        src="https://app.atomlearning.co.uk/img/public_facing/logo-blue-2.png"
        alt=""
        css={{ width: 370, mb: '$5', p: '$3' }}
      />
      <Panel>
        <Form css={{ mb: '$4' }}>
          <InputField
            label="Email or username"
            name="email"
            css={{ mb: '$3' }}
          />
          <PasswordField name="pass" css={{ mb: '$3' }} />
          <Button css={{ width: '100%' }}>Log in</Button>
        </Form>
        <Text size="sm" css={{ color: '$tonal600', textAlign: 'center' }}>
          Dont have an account yet?{' '}
          <Link href="https://app.atomlearning.co.uk/register">Sign up!</Link>
        </Text>
      </Panel>
    </Flex>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
