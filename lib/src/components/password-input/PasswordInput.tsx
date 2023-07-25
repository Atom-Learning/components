import { Eye, EyeCrossed } from '@atom-learning/icons'
import * as React from 'react'
import { useState } from 'react'

import { ActionIcon } from '~/components/action-icon'
import { Box } from '~/components/box'
import { Icon } from '~/components/icon'
import type { InputProps } from '~/components/input'
import { Input } from '~/components/input'
import type { CSS } from '~/stitches'
import { getFieldIconSize } from '~/utilities'

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
      size = 'md',
      ...restProps
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    const togglePasswordVisibility = () =>
      setIsPasswordVisible((currentState) => !currentState)

    const iconSize = React.useMemo(() => getFieldIconSize(size), [size])

    return (
      <Box css={{ position: 'relative', ...css } as CSS}>
        <Input
          {...restProps}
          size={size}
          type={isPasswordVisible ? 'text' : 'password'}
          ref={ref}
          css={{ pr: '$sizes$2' }}
        />
        <ActionIcon
          appearance="simple"
          theme="neutral"
          css={{
            bottom: size === 'lg' ? '4px' : 0,
            position: 'absolute',
            right: 0
          }}
          label={isPasswordVisible ? hidePasswordText : showPasswordText}
          onClick={togglePasswordVisibility}
          onMouseDown={(e) => e.preventDefault()} // prevent focus being lost from password input
          size={iconSize}
        >
          <Icon is={isPasswordVisible ? Eye : EyeCrossed} />
        </ActionIcon>
      </Box>
    )
  }
)

PasswordInput.displayName = 'PasswordInput'
