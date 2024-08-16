import { Trigger } from '@radix-ui/react-dropdown-menu'
import * as React from 'react'

import { styled } from '~/stitches'
import { useCallbackRef } from '~/utilities/hooks/useCallbackRef'

import { Box } from '../box'
import { Input } from '../input'
import { ComboboxContext } from './Combobox.context'


export const StyledComboboxInputContainer = styled(Box, {
  position: 'relative'
})

export const StyledComboboxTrigger = styled(Trigger, {
  zIndex: '-1',
  position: 'absolute',
  size: '100%'
})

export const StyledComboboxInput = styled(Input, {
  bg: 'white'
})

export type ComboboxInputProps = React.ComponentProps<
  typeof StyledComboboxInput
>

export const ComboboxInput = React.forwardRef(({ size = 'md', onChange, onClick, onFocus, ...rest }: ComboboxInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { setSearchTerm, openOnFocus, setIsDropdownMenuOpen, selectedValue } = React.useContext(ComboboxContext)

  const [inputElRef, setinputElRef] = useCallbackRef()
  React.useImperativeHandle(ref, () => inputElRef as unknown as HTMLInputElement)

  const handleOnChange = (e) => {
    setSearchTerm?.(inputElRef.current?.value)
    onChange?.(e)
  }

  const handleOnFocus = (e) => {
    if (openOnFocus) setIsDropdownMenuOpen(true)
    onFocus?.(e)
  }

  return (
    <StyledComboboxInputContainer css={rest.css}>
      <StyledComboboxTrigger />
      <StyledComboboxInput
        size={size}
        defaultValue={selectedValue}
        {...rest}
        ref={setinputElRef}
        onChange={handleOnChange}
        onKeydown={() => null}
        onFocus={handleOnFocus}
      />
    </StyledComboboxInputContainer>
  )
}
)
