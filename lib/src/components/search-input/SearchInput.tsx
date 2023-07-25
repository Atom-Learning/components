import { Close, Search } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '~/components/action-icon'
import { Box } from '~/components/box/'
import { Icon } from '~/components/icon/'
import { Input } from '~/components/input/'
import { CSS, styled } from '~/stitches'
import { useCallbackRef } from '~/utilities/hooks/useCallbackRef'
import { getFieldIconSize } from '~/utilities'

export type SearchInputProps = React.ComponentProps<typeof Input> & {
  size?: 'sm' | 'md' | 'lg'
  css?: CSS
  value?: string
  defaultValue?: string
  onValueChange?: (newValue: string) => void
  clearText?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

enum INPUT_ICON {
  SEARCH = 'SEARCH',
  CLEAR = 'CLEAR'
}

const StyledIcon = styled(Icon, {
  color: '$tonal300',
  position: 'absolute',
  pointerEvents: 'none',
  variants: {
    size: {
      sm: {
        right: '$2',
        size: '$1'
      },
      md: {
        right: 10,
        size: 20
      },
      lg: {
        right: 10,
        size: 20
      }
    }
  }
})

const StyledSearchInput = styled(Input, {
  '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, & input[type="search"]::-webkit-search-results-decoration':
    {
      display: 'none'
    }
})

export const SearchInput: React.FC<SearchInputProps> = React.forwardRef(
  (
    {
      size = 'md',
      css,
      value,
      defaultValue = '',
      onValueChange,
      clearText = 'Clear',
      onChange,
      ...remainingProps
    },
    ref
  ) => {
    const [inputElRef, setInputElRef] = useCallbackRef()
    const [innerValue, setInnerValue] = React.useState(defaultValue)
    const [activeIcon, setActiveIcon] = React.useState<INPUT_ICON>(
      defaultValue ? INPUT_ICON.CLEAR : INPUT_ICON.SEARCH
    )
    React.useEffect(() => {
      if (typeof value === 'undefined') return
      setInnerValue(value)
      setActiveIcon(value ? INPUT_ICON.CLEAR : INPUT_ICON.SEARCH)
    }, [value])

    const iconSize = React.useMemo(() => getFieldIconSize(size), [size])

    React.useImperativeHandle(ref, () => inputElRef.current as HTMLInputElement)

    const handleClear = () => {
      const inputEl = inputElRef.current
      if (!inputEl) return

      // https://stackoverflow.com/a/46012210
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )?.set
      nativeInputValueSetter?.call?.(inputEl, '')
      const ev2 = new Event('input', {
        bubbles: true
      })
      inputEl.dispatchEvent(ev2)
      inputEl.focus()
      onValueChange?.('')
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event)

      const newValue = event.target.value
      setInnerValue(newValue)
      onValueChange?.(newValue)
      setActiveIcon(newValue ? INPUT_ICON.CLEAR : INPUT_ICON.SEARCH)
    }

    const getIcon = () => {
      if (activeIcon === INPUT_ICON.SEARCH)
        return (
          <StyledIcon
            is={Search}
            size={size}
            css={{
              size: size == 'sm' ? '$1' : 20,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
        )

      return (
        <ActionIcon
          label={clearText}
          theme="neutral"
          size={iconSize}
          css={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '$1'
          }}
          onClick={handleClear}
        >
          <Icon is={Close} />
        </ActionIcon>
      )
    }

    return (
      <Box css={{ position: 'relative', height: 'max-content', ...css }}>
        <StyledSearchInput
          ref={setInputElRef}
          size={size}
          type="search"
          {...remainingProps}
          value={innerValue}
          onChange={handleOnChange}
          css={{ pr: size === 'sm' ? '$5' : '$6' }}
        />
        {getIcon()}
      </Box>
    )
  }
)

SearchInput.displayName = 'SearchInput'
