import { Minus, Plus } from '@atom-learning/icons'
import * as React from 'react'

import { mergeRefs } from '~/utilities/mergeRefs'

import { Flex } from '../flex'
import { Input } from '../input'
import { NumberInputStepper } from './NumberInputStepper'

export interface NumberInputProps {
  name: string
  min?: number
  max?: number
  step?: number
  initialValue?: number
  isDisabled?: boolean
  isReadOnly?: boolean
  size?: 'sm' | 'md'
  onChange?: (value: number) => void
  disabledTooltipContent?: { increment?: string; decrement?: string }
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (props: NumberInputProps, forwardedRef): JSX.Element => {
    const {
      name,
      min = 0,
      max = Number.MAX_SAFE_INTEGER,
      step = 1,
      initialValue = 0,
      isDisabled = false,
      isReadOnly = false,
      size = 'md',
      onChange,
      disabledTooltipContent: disabledTooltipContentProp,
      ...rest
    } = props

    const [value, setValue] = React.useState<number | string>(initialValue)
    const [isInvalid, setIsInvalid] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement | null>(null)

    const disabledTooltipContent = {
      decrement: `Cannot enter values below ${min}`,
      increment: `Cannot enter values above ${max}`,
      ...disabledTooltipContentProp
    }

    const isAtMax = value === max
    const isAtMin = value === min

    const clamp = React.useCallback(
      (value: number) => Math.min(Math.max(value, min), max),
      [max, min]
    )

    const validateOnBlur = React.useCallback(() => {
      if (value < min || value > max) {
        setIsInvalid(true)
      } else {
        setIsInvalid(false)
      }
    }, [max, min, value])

    const updateValue = React.useCallback(
      (next: string | number) => {
        setValue(next)
        onChange?.(Number(next))
      },
      [onChange]
    )

    const onInputChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const parsedValue = event.target.value.replace(/\D/g, '')
        updateValue(parsedValue)
      },
      [updateValue]
    )

    const increment = React.useCallback(() => {
      if (isAtMax || isReadOnly) return
      inputRef?.current?.focus()
      let next: string | number

      if (value === '') {
        next = step
      } else {
        next = Number(value) + step
      }

      updateValue(clamp(next))
    }, [clamp, isAtMax, isReadOnly, step, updateValue, value])

    const decrement = React.useCallback(() => {
      if (isAtMin || isReadOnly) return
      inputRef?.current?.focus()
      let next: string | number

      if (value === '') {
        next = min
      } else {
        next = Number(value) - step
      }

      updateValue(clamp(next))
    }, [clamp, isAtMin, isReadOnly, min, step, updateValue, value])

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
          ArrowDown: decrement,
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
      name,
      type: 'number',
      value,
      ...rest,
      onChange: onInputChange,
      onBlur: validateOnBlur,
      onKeyDown,
      size,
      css: { borderRadius: '0px', width: '$6' },
      ref: mergeRefs(inputRef, forwardedRef),
      readOnly: isReadOnly,
      disabled: isDisabled,
      'aria-valuemin': min,
      'aria-valuemax': max,
      'aria-invalid': isInvalid,
      'aria-valuenow': Number(value),
      role: 'spinbutton',
      ...(isInvalid && { state: 'error' })
    }

    return (
      <Flex
        css={{
          width: '100%',
          justifyContent: 'center',
          opacity: isDisabled ? 0.3 : 1
        }}
      >
        <NumberInputStepper
          onClick={decrement}
          icon={Minus}
          css={{
            borderRight: 'none',
            borderRadius: '$0 0px 0px $0'
          }}
          size={size}
          isRootDisabled={isDisabled}
          disabled={isAtMin}
          disabledTooltipContent={disabledTooltipContent.decrement}
          data-testid="decrement-btn"
        />
        <Input {...inputProps} />
        <NumberInputStepper
          onClick={increment}
          icon={Plus}
          css={{ borderLeft: 'none', borderRadius: '0px $0 $0 0px' }}
          size={size}
          isRootDisabled={isDisabled}
          disabled={isAtMax}
          disabledTooltipContent={disabledTooltipContent.increment}
          data-testid="increment-btn"
        />
      </Flex>
    )
  }
)

NumberInput.displayName = 'NumberInput'
