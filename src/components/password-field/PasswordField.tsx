import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { useState } from 'react'

import { Box, Flex, Input, Label, Link, Tooltip } from '../../primitives'
import { CSSBlob } from '../../stitches'

type PasswordFieldProps = {
  css?: CSSBlob
  name: string
}

export const PasswordField = ({
  css,
  name
}: PasswordFieldProps): React.ReactElement => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const togglePasswordVisibility = () =>
    setIsPasswordVisible((currentState) => !currentState)

  return (
    <Box css={{ position: 'relative', ...css }}>
      <Flex
        css={{
          justifyContent: 'space-between',
          alignItems: 'end',
          mb: '$2'
        }}
      >
        <Label htmlFor={name}>Password</Label>
        <Link
          href="https://app.atomlearning.co.uk/forgotten"
          css={{ fontSize: '$sm' }}
        >
          Forgot your password?
        </Link>
      </Flex>
      <Input
        type={isPasswordVisible ? 'text' : 'password'}
        name={name}
        id={name}
        autoComplete="current-password"
        css={{ mb: '$1' }}
      />
      <Box
        css={{
          position: 'absolute',
          bottom: 8,
          right: 8
        }}
      >
        <Tooltip
          text={isPasswordVisible ? 'Hide password' : 'Show password'}
          onClick={togglePasswordVisibility}
          css={{
            background: 'unset',
            border: 0,
            height: 32,
            width: 32,
            color: '$tonal500'
          }}
        >
          <FontAwesomeIcon
            size="lg"
            icon={!isPasswordVisible ? faEyeSlash : faEye}
          />
        </Tooltip>
      </Box>
    </Box>
  )
}
