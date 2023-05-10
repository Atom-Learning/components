import * as React from 'react'

import { useFieldWrapperContext, useFormFieldWrapperContext } from '~/components/field-wrapper'
import { styled } from '~/stitches'
import { focusVisibleStyleBlock } from '~/utilities'
import { Override } from '~/utilities/types'

const StyledInput = styled('input', {
  appearance: 'none',
  border: '1px solid $grey800',
  borderRadius: '$0',
  boxShadow: 'none', // prevent default iOS default styling
  boxSizing: 'border-box',
  cursor: 'text',
  display: 'block',
  fontFamily: '$body',
  px: '$3',
  transition: 'all 100ms ease-out',
  width: '100%',
  '&:not([disabled])': {
    '&:hover': {
      borderColor: '$blue900',
    },
    '&:focus-visible': focusVisibleStyleBlock(),
  },
  '&[disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed'
  },
  '&::placeholder': {
    color: '$grey700',
    opacity: 1
  },
  variants: {
    size: {
      sm: {
        height: '$3',
        fontSize: '$sm'
      },
      md: {
        height: '$4',
        fontSize: '$md'
      }
    },
    state: {
      error: {
        border: '1px solid $danger'
      }
    }
  }
})

// override default 'type' property to prevent Input from being used to render
// checkboxes, radios etc — we have dedicated components for them
export type InputProps = Override<
  React.ComponentProps<typeof StyledInput>,
  {
    as?: never
    type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'search'
    onValueChange?: (newValue: React.ReactText) => void
  }
>

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ type = 'text', size = 'md', onValueChange, ...rest }, ref) => {

    const { name, state } = useFieldWrapperContext()

    const { updateValue, fieldRef } = useFormFieldWrapperContext()

    React.useImperativeHandle(ref, () => { // Interesting that this... just works.
      return fieldRef?.current as HTMLInputElement
    }, [fieldRef]);


    let typeSpecificProps = {}
    if (type === 'number') {
      typeSpecificProps = {
        inputMode: "numeric",
        pattern: "[0-9]*"
      }
    }

    return (
      <StyledInput
        ref={fieldRef || ref}
        name={name}
        id={name}
        type={type}
        size={size}
        state={state === 'error' ? state : undefined}
        onChange={(e) => {
          const newValue = e.target.value
          updateValue?.(newValue)
          onValueChange?.(newValue)
        }}
        {...typeSpecificProps}
        {...rest}
      />)
  }
)

Input.displayName = 'Input'
