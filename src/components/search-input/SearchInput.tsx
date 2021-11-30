import { Close, Search } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '~/components/action-icon'
import { Box } from '~/components/box/'
import { Icon } from '~/components/icon/'
import { Input } from '~/components/input/'
import { CSS, styled } from '~/stitches'

type SearchInputProps = React.ComponentProps<typeof Input> & {
  size: 'sm' | 'md'
  css?: CSS
  value?: string | number
  clearText?: string
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
        size: '$1',
        ml: '$5'
      },
      md: {
        top: 10,
        right: 10,
        size: 20,
        ml: '$6'
      }
    }
  }
})

export const SearchInput: React.FC<SearchInputProps> = ({
  size = 'md',
  css,
  value,
  clearText = 'Clear',
  ...remainingProps
}) => {
  const [inputValue, setInputValue] = React.useState<string | number>(
    value || ''
  )
  const [isClearVisible, setIsClearVisible] = React.useState<INPUT_ICON>(
    value && value?.toString().length > 0 ? INPUT_ICON.CLEAR : INPUT_ICON.SEARCH
  )

  const handleClear = () => {
    setInputValue('')
    setIsClearVisible(INPUT_ICON.SEARCH)
  }

  const handleOnChange = (event) => {
    setInputValue(event.target.value)
    setIsClearVisible(
      event.target.value.toString().length > 0
        ? INPUT_ICON.CLEAR
        : INPUT_ICON.SEARCH
    )
  }

  const getIcon = () => {
    if (isClearVisible === INPUT_ICON.SEARCH)
      return <StyledIcon is={Search} size={size} />

    return (
      <ActionIcon
        label={clearText}
        appearance="simple"
        theme="neutral"
        css={{ bottom: 4, position: 'absolute', right: 0 }}
        onClick={handleClear}
      >
        <Icon is={Close} />
      </ActionIcon>
    )
  }

  return (
    <Box css={{ position: 'relative', ...css }}>
      <Input
        size={size}
        {...remainingProps}
        value={inputValue}
        onChange={handleOnChange}
      />
      {getIcon()}
    </Box>
  )
}

SearchInput.displayName = 'SearchInput'
