import { StitchesProps } from '@stitches/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, css, Panel, styled, PasswordField, TextField } from '../dist'
import logo from './atom-logo.png'
import { Sandbox } from './Sandbox'

css.global(reset)()

const StyledAnchor = styled('a', {
  textDecoration: 'none',
  color: '$primary500',
  ':visited': { color: '$primary500' },
  ':hover': { color: '$primary900' },
  ':active': { color: '$primary900' },
  cursor: 'pointer'
})

const ForgotPasswordLink = () => (
  <StyledAnchor href="https://app.atomlearning.co.uk/forgotten">
    Forgot your password?
  </StyledAnchor>
)

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
        <img src={logo} alt="" className={css({ width: '400px', mb: '$5' })} />
        <Panel css={{ width: '355px' }}>
          <form className={css({ mb: '$5' })}>
            <TextField
              label="Email or username"
              name="user"
              css={{ mb: '$3' }}
            />
            <PasswordField name="pass" css={{ mb: '$4' }} />
            <LogInButton />
          </form>
          <p
            className={css({
              fontFamily: 'sans',
              fontSize: 'sm',
              color: '$tonal500',
              textAlign: 'center'
            })}
          >
            Don't have an account yet? <StyledAnchor>Sign up!</StyledAnchor>{' '}
          </p>
        </Panel>
      </Box>
    </Sandbox>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
