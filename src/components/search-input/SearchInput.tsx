import { Close, Search } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '~/components/action-icon'
import { Box } from '~/components/box/'
import { Icon } from '~/components/icon/'
import { Input } from '~/components/input/'
import { CSS } from '~/stitches'

type SearchInputProps = React.ComponentProps<typeof Input> & {
  size: 'sm' | 'md'
  css?: CSS
  value?: string | number
  clearText?: string
}

export const SearchInput: React.FC<SearchInputProps> = ({
  size,
  css,
  value,
  clearText = 'Clear',
  ...remainingProps
}) => {
  const [inputValue, setInputValue] = React.useState<string | number>(
    value || ''
  )
  const [isClearVisible, setIsClearVisible] = React.useState<boolean>(
    (value && value?.toString().length > 0) || false
  )

  const handleClear = () => {
    setInputValue('')
    setIsClearVisible(false)
  }

  const handleOnChange = (event) => {
    setInputValue(event.target.value)
    setIsClearVisible(event.target.value.toString().length > 0)
  }

  const getIcon = () => {
    if (!isClearVisible)
      return (
        <Icon
          is={Search}
          css={{
            color: '$tonal300',
            position: 'absolute',
            size: size === 'sm' ? '$1' : 20,
            top: size === 'sm' ? '$2' : 10,
            right: size === 'sm' ? '$2' : 10,
            pointerEvents: 'none'
          }}
        />
      )

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
        css={{ pr: size === 'sm' ? '$5' : '$6' }}
        {...remainingProps}
        value={inputValue}
        onChange={handleOnChange}
      />
      {getIcon()}
    </Box>
  )
}

SearchInput.displayName = 'SearchInput'
