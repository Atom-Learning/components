import { Search } from '@atom-learning/icons'
import * as React from 'react'

import { CSS } from '~/stitches'

import { Box } from '../box/Box'
import { Icon } from '../icon/Icon'
import { Input } from '../input/Input'

type SearchInputProps = React.ComponentProps<typeof Input> & {
  css?: CSS
}

export const SearchInput: React.FC<SearchInputProps> = ({
  css,
  ...remainingProps
}) => (
  <Box css={{ position: 'relative', ...css }}>
    <>
      <Icon
        is={Search}
        css={{
          color: '$tonal500',
          pointerEvents: 'none',
          position: 'absolute',
          size: 20,
          top: 10,
          left: 10
        }}
      />
      <Input css={{ pl: '$6' }} {...remainingProps} type="search" />
    </>
  </Box>
)

SearchInput.displayName = 'SearchInput'
