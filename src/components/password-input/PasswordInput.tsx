import { Eye, EyeClosed } from '@atom-learning/icons'
import * as React from 'react'
import { useState } from 'react'

import { ActionIcon } from '~/components/action-icon'
import { Box } from '~/components/box'
import { Icon } from '~/components/icon'
import type { InputProps } from '~/components/input'
import { Input } from '~/components/input'
import type { CSS } from '~/stitches'

type PasswordInputProps = Omit<InputProps, 'type'> & {
  hidePasswordText?: string
  showPasswordText?: string
}

export const PasswordInput: React.FC<PasswordInputProps> = React.forwardRef(
  (
    {
      css,
      hidePasswordText = 'Hide password',
      showPasswordText = 'Show password',
      ...restProps
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    const togglePasswordVisibility = () =>
      setIsPasswordVisible((currentState) => !currentState)

    return (
      <Box css={{ position: 'relative', ...css } as CSS}>
        <Input
          {...restProps}
          type={isPasswordVisible ? 'text' : 'password'}
          ref={ref}
        />
        <ActionIcon
          appearance="simple"
          css={{ bottom: 0, position: 'absolute', right: 0 }}
          label={isPasswordVisible ? hidePasswordText : showPasswordText}
          onClick={togglePasswordVisibility}
          onMouseDown={(e) => e.preventDefault()} // prevent focus being lost from password input
          size="lg"
        >
          <Icon is={isPasswordVisible ? Eye : EyeClosed} />
        </ActionIcon>
      </Box>
    )
  }
)

PasswordInput.displayName = 'PasswordInput'
