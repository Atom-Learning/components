import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

import { Stack } from '~/components/stack'
import { useFormFieldWrapperContext, useFieldWrapperContext } from '~/components/field-wrapper'

import { RadioButtonGroupItem } from './RadioButtonGroupItem'
import { styled } from '~/stitches'

export const StyledRoot = styled(RadioGroup.Root)

type TRadioButtonGroupProps = React.ComponentProps<typeof StyledRoot> & React.ComponentProps<typeof Stack>

export const RadioButtonGroup: React.ForwardRefExoticComponent<TRadioButtonGroupProps> & {
  Item: typeof RadioButtonGroupItem
} = React.forwardRef(
  (
    {
      direction = 'column',
      children,
      onValueChange,
      ...rest
    },
    ref
  ) => {
    const { name } = useFieldWrapperContext()
    const { updateValue, fieldRef } = useFormFieldWrapperContext()

    React.useImperativeHandle(ref, () => { // Interesting that this... just works.
      return fieldRef?.current as HTMLElement
    }, [fieldRef]);

    return (
      <StyledRoot
        id={name}
        name={name}
        ref={fieldRef || ref}
        onValueChange={(newValue) => {
          updateValue?.(newValue)
          onValueChange?.(newValue)
        }}
        {...rest}
      >
        <Stack
          direction={direction}
          gap={direction === 'column' ? 1 : 3}
          align={false}
        >
          {children}
        </Stack>
      </StyledRoot>
    )
  }
)

RadioButtonGroup.Item = RadioButtonGroupItem

RadioButtonGroup.displayName = 'RadioButtonGroup'
