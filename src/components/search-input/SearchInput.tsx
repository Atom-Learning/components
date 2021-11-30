import { Close, Search } from '@atom-learning/icons'
import * as React from 'react'

import { CSS, styled } from '~/stitches'

import { Box } from '../box/Box'
import { Icon } from '../icon/Icon'
import { Input } from '../input/Input'

type SearchInputProps = React.ComponentProps<typeof Input> & {
  size: 'sm' | 'md'
  css?: CSS
  value?: string | number
}

const StyledButton = styled('button', {
  alignItems: 'center',
  appearance: 'none',
  bg: 'white',
  border: 'unset',
  borderRadius: '$0',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  p: 'unset',
  transition: 'all 100ms ease-out'
})

export const SearchInput: React.FC<SearchInputProps> = ({
  size,
  css,
  value,
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
    const css = {
      color: '$tonal300',
      position: 'absolute',
      size: size === 'sm' ? '$1' : 20,
      top: size === 'sm' ? '$2' : 10,
      right: size === 'sm' ? '$2' : 10
    }

    if (!isClearVisible)
      return (
        <Icon
          is={Search}
          css={{
            ...css,
            pointerEvents: 'none'
          }}
        />
      )

    return (
      <StyledButton onClick={handleClear} css={css}>
        <Icon is={Close} />
      </StyledButton>
    )
  }

  return (
    <Box css={{ position: 'relative', ...(css as CSS) }}>
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
