import { Minus, Plus } from '@atom-learning/icons'
import * as React from 'react'

import type { CSS } from '~/stitches'

import { Flex } from '../flex'
import { Input } from '../input'
import { NumberInputStepper } from './NumberInputStepper'

export interface NumberInputProps {
  name: string
  min?: number
  max?: number
  step?: number
  value?: number
  defaultValue?: number
  disabled?: boolean
  readonly?: boolean
  size?: 'sm' | 'md'
  onValueChange?: (value: number) => void
  stepperButtonLabels?: { increment?: string; decrement?: string }
  disabledTooltipContent?: { increment?: string; decrement?: string }
  css?: CSS
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value,
      defaultValue = 0,
      onValueChange,
      min = 0,
      max = Number.MAX_SAFE_INTEGER,
      step = 1,
      disabled: isDisabled = false,
      readonly: isReadOnly = false,
      size = 'md',
      stepperButtonLabels: stepperButtonLabelsProp,
      disabledTooltipContent: disabledTooltipContentProp,
      css,
      ...rest
    },
    ref
  ): JSX.Element => {
    const [internalValue, setInternalValue] = React.useState<number>(
      value || defaultValue
    )
    const inputRef = React.useRef<HTMLInputElement | null>(null)

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const stepperButtonLabels = {
      increment: 'increment',
      decrement: 'decrement',
      ...stepperButtonLabelsProp
    }

    const disabledTooltipContent = {
      decrement: `Cannot enter values below ${min}`,
      increment: `Cannot enter values above ${max}`,
      ...disabledTooltipContentProp
    }

    const isAtMax = internalValue >= max
    const isAtMin = internalValue <= min

    const clamp = React.useCallback(
      (internalValue: number) => Math.min(Math.max(internalValue, min), max),
      [max, min]
    )

    const updateValue = React.useCallback(
      (newValue: number) => {
        onValueChange?.(newValue)
        setInternalValue(newValue)
      },
      [onValueChange]
    )

    const onInputChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const parsedValue = Number(event.target.value.replace(/\D/g, ''))
        updateValue(parsedValue)
      },
      [updateValue]
    )

    const increment = React.useCallback(() => {
      if (isAtMax || isReadOnly) return
      inputRef?.current?.focus()
      const newValue = Number(internalValue) + step
      updateValue(clamp(newValue))
    }, [clamp, isAtMax, isReadOnly, step, updateValue, internalValue])

    const decrement = React.useCallback(() => {
      if (isAtMin || isReadOnly) return
      inputRef?.current?.focus()
      const newValue = Number(internalValue) - step
      updateValue(clamp(newValue))
    }, [clamp, isAtMin, isReadOnly, min, step, updateValue, internalValue])

    const onKeyDown = React.useCallback(
      (event: React.KeyboardEvent) => {
        if (event.nativeEvent.isComposing) return

        /**
         * Keyboard Accessibility
         *
         * We want to increase or decrease the input's value
         * based on if the user the arrow keys.
         *
         * @see https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-17
         */
        const eventKey = event.key

        const keyMap: Record<string, React.KeyboardEventHandler> = {
          ArrowUp: increment,
          ArrowRight: increment,
          ArrowDown: decrement,
          ArrowLeft: decrement,
          Home: () => updateValue(min),
          End: () => updateValue(max)
        }

        const action = keyMap[eventKey]

        if (action) {
          event.preventDefault()
          action(event)
        }
      },
      [increment, decrement, updateValue, min, max]
    )

    const inputProps: React.ComponentProps<typeof Input> = {
      type: 'number',
      value: internalValue,
      ...rest,
      onChange: onInputChange,
      onKeyDown,
      size,
      css: {
        borderRadius: '0px',
        width: '$6',
        '&:disabled': { opacity: 0.3, pointerEvents: 'none' }
      },
      ref: inputRef,
      readOnly: isReadOnly,
      disabled: isDisabled,
      'aria-valuemin': min,
      'aria-valuemax': max,
      'aria-valuenow': internalValue,
      role: 'spinbutton'
    }

    return (
      <Flex css={css}>
        <NumberInputStepper
          onClick={decrement}
          icon={Minus}
          css={{
            borderRight: 'none',
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px'
          }}
          size={size}
          disabled={isAtMin || isDisabled}
          showTooltip={isAtMin && !isDisabled}
          disabledTooltipContent={disabledTooltipContent.decrement}
          label={stepperButtonLabels.decrement}
        />
        <Input {...inputProps} />
        <NumberInputStepper
          onClick={increment}
          icon={Plus}
          css={{
            borderLeft: 'none',
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px'
          }}
          size={size}
          disabled={isAtMax || isDisabled}
          showTooltip={isAtMax && !isDisabled}
          disabledTooltipContent={disabledTooltipContent.increment}
          label={stepperButtonLabels.increment}
        />
      </Flex>
    )
  }
)

NumberInput.displayName = 'NumberInput'
