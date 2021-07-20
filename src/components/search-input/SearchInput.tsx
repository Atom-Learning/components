import { Search } from '@atom-learning/icons'
import * as React from 'react'

import { CSS } from '~/stitches'

import { Box } from '../box/Box'
import { Icon } from '../icon/Icon'
import { Input } from '../input/Input'

type SearchInputProps = React.ComponentProps<typeof Input> & {
  size: 'sm' | 'md'
  css?: CSS
}

export const SearchInput: React.FC<SearchInputProps> = ({
  size,
  css,
  ...remainingProps
}) => (
  <Box css={{ position: 'relative', ...(css as any) }}>
    <>
      <Icon
        is={Search}
        css={{
          color: '$tonal500',
          pointerEvents: 'none',
          position: 'absolute',
          size: size === 'sm' ? '$1' : 20,
          top: size === 'sm' ? '$2' : 10,
          left: size === 'sm' ? '$2' : 10
        }}
      />
      <Input
        size={size}
        css={{ pl: size === 'sm' ? '$5' : '$6' }}
        {...remainingProps}
        type="search"
      />
    </>
  </Box>
)

SearchInput.displayName = 'SearchInput'
