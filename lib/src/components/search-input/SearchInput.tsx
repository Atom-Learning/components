import { Close, Search } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '~/components/action-icon'
import { Box } from '~/components/box/'
import { Icon } from '~/components/icon/'
import { Input } from '~/components/input/'
import { CSS, styled } from '~/stitches'
import { useCallbackRef } from '~/utilities/hooks/useCallbackRef'

export type SearchInputProps = React.ComponentProps<typeof Input> & {
  size: 'sm' | 'md'
  css?: CSS
  value?: string
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
        top: '$2',
        right: '$2',
        size: '$1'
      },
      md: {
        top: 10,
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
      clearText = 'Clear',
      onChange,
      ...remainingProps
    },
    ref: (instance: HTMLInputElement | null) => void
  ) => {
    const [inputElRef] = useCallbackRef()
    const [inputValue, setInputValue] = React.useState<string | number>(
      value || ''
    )
    const [activeIcon, setActiveIcon] = React.useState<INPUT_ICON>(
      value ? INPUT_ICON.CLEAR : INPUT_ICON.SEARCH
    )

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
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
      setActiveIcon(event.target.value ? INPUT_ICON.CLEAR : INPUT_ICON.SEARCH)
      onChange?.(event)
    }

    const getIcon = () => {
      if (activeIcon === INPUT_ICON.SEARCH)
        return (
          <StyledIcon
            is={Search}
            size={size}
            css={{ size: size == 'sm' ? '$1' : 20 }}
          />
        )

      return (
        <ActionIcon
          label={clearText}
          theme="neutral"
          size={size}
          css={{ position: 'absolute', top: '0', right: '$1' }}
          onClick={handleClear}
        >
          <Icon is={Close} />
        </ActionIcon>
      )
    }

    return (
      <Box css={{ position: 'relative', ...css }}>
        <StyledSearchInput
          ref={(e) => {
            ref?.(e)
            inputElRef.current = e
          }}
          size={size}
          type="search"
          {...remainingProps}
          value={inputValue}
          onChange={handleOnChange}
          css={{ pr: size === 'sm' ? '$5' : '$6' }}
        />
        {getIcon()}
      </Box>
    )
  }
)

SearchInput.displayName = 'SearchInput'
