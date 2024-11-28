import * as React from 'react'

import { Box } from '~/components/box'
import { Input } from '~/components/input'
import { styled } from '~/stitches'
import { useCallbackRefState } from '~/utilities/hooks/useCallbackRef'
import { useResizeObserver } from '~/utilities/hooks/useResizeObserver'

import { AnswerToggleGroupContext } from './AnswerToggleGroup.context'
import { AnswerToggleGroupItem } from './AnswerToggleGroupItem'

type AnswerToggleGroupItemInputProps = React.ComponentProps<typeof AnswerToggleGroupItem> & { label: string }

const StyledContainer = styled(Box, {
  position: 'relative'
})

const StyledInput = styled(Input, {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
})

const StyledAnswerToggleGroupItem = styled(AnswerToggleGroupItem, {
  py: '$0'
})

const stopPropagation = (e) => {
  e.stopPropagation()
  e.nativeEvent.stopPropagation()
  e.nativeEvent.stopImmediatePropagation()
}

export const AnswerToggleGroupItemInput = ({
  className,
  children,
  value: defaultValue,
  disabled,
  label,
  ...rest
}: AnswerToggleGroupItemInputProps) => {

  // Placement: Place Input element over the Input placeholder
  const [inputElRef, setInputElRef] = useCallbackRefState()
  const [inputPlaceholderElRef, setInputPlaceholderElRef] = useCallbackRefState()
  const [inputCSS, setInputCSS] = React.useState<Partial<CSSRuleList>>()
  useResizeObserver({
    delay: 100,
    elements: [inputPlaceholderElRef],
    onResize: () => {
      setInputCSS((currInputCSS) => {
        const newInputCSS = {
          top: inputPlaceholderElRef?.offsetTop,
          left: inputPlaceholderElRef?.offsetLeft,
          width: inputPlaceholderElRef?.clientWidth
        }
        if (JSON.stringify(currInputCSS) === JSON.stringify(newInputCSS)) return currInputCSS // Not changed.
        return newInputCSS
      })
    }
  })

  // Value: Update value of Toggle item on Input blur
  const [value, setValue] = React.useState(defaultValue)
  const { value: toggleGroupValue, setValue: setToggleGroupValue, type } = React.useContext(AnswerToggleGroupContext)
  const handleUpdateValue: React.FocusEventHandler<HTMLInputElement> = (e) => {
    stopPropagation(e)
    const newValue = e.target.value || defaultValue
    setValue((currValue) => {

      if (type === 'multiple') {
        const newToggleGroupValue = [...toggleGroupValue as string[]]

        const currValueToggleGroupIndex = newToggleGroupValue?.indexOf(currValue)
        if (currValueToggleGroupIndex === -1) {
          // Just append
          newToggleGroupValue.push(newValue)
          setToggleGroupValue(newToggleGroupValue)
        } else {
          // Replace
          newToggleGroupValue[currValueToggleGroupIndex] = newValue
          setToggleGroupValue(newToggleGroupValue)
        }
      }

      if (type === 'single') {
        setToggleGroupValue(newValue)
      }

      return newValue
    })
  }

  // Focus management: Focus Input on Toggle select
  const isSelectedRef = React.useRef(false)
  const isSelected = !!toggleGroupValue?.includes(value)
  if (!isSelectedRef.current && isSelected) {
    inputElRef?.focus()
  }
  isSelectedRef.current = isSelected

  // Focus management: Focus Toggle on Input ESC
  const [toggleGroupItemElRef, setToggleGroupItemElRef] = useCallbackRefState()
  const handleInputKeydown = React.useCallback((e) => {
    stopPropagation(e)
    if (e.key === 'Escape') toggleGroupItemElRef?.focus()
  }, [toggleGroupItemElRef])

  return (
    <StyledContainer className={className}>
      <StyledAnswerToggleGroupItem {...rest} ref={setToggleGroupItemElRef} value={value} disabled={disabled}>
        {children}
        <Box // Input placeholder
          ref={setInputPlaceholderElRef}
          css={{
            width: '300px',
            maxWidth: '100%',
            height: inputElRef?.clientHeight
          }}
        />
      </StyledAnswerToggleGroupItem>
      <StyledInput
        onBlur={handleUpdateValue}
        onKeyDown={handleInputKeydown}
        onKeyUp={stopPropagation}
        ref={setInputElRef}
        css={inputCSS}
        disabled={disabled}
        aria-label={label}
        size="sm"
        tabIndex={-1}
      />
    </StyledContainer>
  )
}
