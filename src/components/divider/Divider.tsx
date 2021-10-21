import React from 'react'

import { CSS, styled } from '~/stitches'

interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  css?: CSS
}

const DEFAULT_ORIENTATION: DividerProps['orientation'] = 'horizontal'

const StyledDivider = styled('hr', {
  border: 0,
  bg: '$tonal200',
  variants: {
    orientation: {
      horizontal: { height: 1, width: '100%' },
      vertical: { height: '100%', width: 1, minHeight: '$3' }
    }
  }
})

export const Divider: React.FC<DividerProps> = ({
  orientation = DEFAULT_ORIENTATION,
  css,
  ...rest
}) => {
  return <StyledDivider orientation={orientation} css={css} {...rest} />
}
