import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { useState } from 'react'

import { Flex, Input, Label } from '../../primitives'
import { css as generateCss, CSSBlob, styled } from '../../stitches'
import { CSSWrapper } from '../../utilities/CSSWrapper'

type PasswordFieldProps = {
  css?: CSSBlob
  name: 'string'
}

const StyledIcon = styled(FontAwesomeIcon, {})

export const PasswordField = ({
  css,
  name
}: PasswordFieldProps): React.ReactElement => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const togglePasswordVisibility = () =>
    setIsPasswordVisible((currentState) => !currentState)

  return (
    <CSSWrapper css={css}>
      <Flex
        css={{
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '$2'
        }}
      >
        <Label htmlFor={name}>Password</Label>
        <a href="https://atomlearning.co.uk/forgotten">Forgot your password?</a>
      </Flex>
      <Input
        type={isPasswordVisible ? 'text' : 'password'}
        name={name}
        id={name}
        autoComplete="current-password"
        css={{ mb: '$1' }}
      />
      <button
        onClick={togglePasswordVisibility}
        type="button"
        className={generateCss({
          border: 'none',
          background: 'unset',
          cursor: 'pointer',
          padding: 'unset',
          fontFamily: 'sans',
          color: '$secondary500'
        })}
      >
        <StyledIcon
          icon={isPasswordVisible ? faEyeSlash : faEye}
          css={generateCss({ mr: '$2' })}
        />
        {`${isPasswordVisible ? 'Hide' : 'Show'} password`}{' '}
      </button>
    </CSSWrapper>
  )
}
