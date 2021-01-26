import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import {
  Box,
  css,
  Image,
  InputField,
  Link,
  Panel,
  PasswordField,
  styled,
  Text
} from '../dist'
import logo from './atom-logo.png'
import { Sandbox } from './Sandbox'

css.global(reset)()

const StyledButton = styled('button', {
  padding: 'unset',
  border: 'none',
  background: 'unset',
  cursor: 'pointer',
  transition: 'all 125ms ease-out'
})

const PrimaryButton = ({ css, ...rest }) => (
  <StyledButton
    css={{
      backgroundColor: '$primary',
      ':hover': {
        backgroundColor: '$primary900'
      },
      ...css
    }}
    {...rest}
  />
)

const LogInButton = () => (
  <PrimaryButton
    css={{
      borderRadius: '$1',
      padding: '$2 $4',
      backgroundColor: '$primary500',
      width: '100%',
      color: 'white',
      fontSize: 'md',
      height: '40px'
    }}
  >
    Log in
  </PrimaryButton>
)

const App = () => {
  return (
    <Sandbox>
      <Box
        css={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'ebf5ff'
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
            <LogInButton />
          </form>
          <Text size="sm" css={{ color: '$tonal500', textAlign: 'center' }}>
            Don't have an account yet?{' '}
            <Link href="https://app.atomlearning.co.uk/register">Sign up!</Link>
          </Text>
        </Panel>
      </Box>
    </Sandbox>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
