import * as React from 'react'

import { styled } from '~/stitches'
import { useCallbackRef } from '~/utilities/hooks/useCallbackRef'

import { Input } from '../input'
import { ComboboxContext } from './Combobox.context'


export const StyledComboboxInput = styled(Input, {

})

export type ComboboxInputProps = React.ComponentProps<
  typeof StyledComboboxInput
>

export const ComboboxInput = React.forwardRef(({ size = 'md', onChange, onClick, onFocus, ...rest }: ComboboxInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { setSearchTerm, openOnFocus, setIsDropdownMenuOpen } = React.useContext(ComboboxContext)

  const [inputElRef, setinputElRef] = useCallbackRef()
  React.useImperativeHandle(ref, () => inputElRef as HTMLInputElement)

  const handleOnChange = (e) => {
    setSearchTerm?.(inputElRef.current?.value)
    onChange?.(e)
  }

  const handleOnClick = (e) => {
    console.log(1)
    setIsDropdownMenuOpen(true)
    onClick?.(e)
  }

  const handleOnFocus = (e) => {
    if (openOnFocus) setIsDropdownMenuOpen(true)
    onFocus?.(e)
  }

  return <StyledComboboxInput size={size} {...rest} ref={setinputElRef} onChange={handleOnChange}
    onClick={handleOnClick}
    onFocus={handleOnFocus} />
}
)
