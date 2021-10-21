import React from 'react'

import { CSS, styled } from '~/stitches'

interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  css?: CSS
}

const DEFAULT_ORIENTATION: DividerProps['orientation'] = 'horizontal'

const StyledDivider = styled('div', {
  bg: '$tonal200',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1, minHeight: '$3' }
})

export const Divider: React.FC<DividerProps> = ({
  orientation = DEFAULT_ORIENTATION,
  css
}) => {
  return (
    <StyledDivider
      data-orientation={orientation}
      aria-orientation={orientation}
      css={css}
    />
  )
}
