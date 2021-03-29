import * as React from 'react'

import { Flex } from '~/components/flex'
import { CSS } from '~/stitches'

// Grid implementation taken from  https://github.com/Heydon/fukol-grids

type GridProps = {
  basis: string
  css: CSS
  gap: string
} & React.ComponentProps<typeof Flex>

export const Grid: React.FC<GridProps> = ({
  basis,
  children,
  gap,
  css,
  ...remainingProps
}) => {
  return (
    <Flex
      css={
        {
          flexWrap: 'wrap',
          margin: `-${gap}`,
          '& > *': {
            flex: `1 0 ${basis}`,
            margin: gap
          },
          ...css
        } as CSS
      }
      {...remainingProps}
    >
      {children}
    </Flex>
  )
}

Grid.displayName = 'Grid'
