import * as React from 'react'

import { Input, Label } from '../../primitives'
import { CSSBlob } from '../../stitches'
import { CSSWrapper } from '../../utilities/CSSWrapper'

type InputType = 'email' | 'number' | 'password' | 'tel' | 'text' | 'url'

type InputFieldProps = {
  label: string
  name: string
  type: InputType
  css?: CSSBlob
}

export const InputField = ({
  label,
  css,
  name,
  ...props
}: InputFieldProps): React.ReactElement => {
  return (
    <CSSWrapper css={css}>
      <Label htmlFor={name} css={{ mb: '$2' }}>
        {label}
      </Label>
      <Input name={name} id={name} {...props} />
    </CSSWrapper>
  )
}

InputField.defaultProps = {
  type: 'text'
}
