import theme from '@atom-learning/theme'
import * as React from 'react'

import { Flex } from '~/components/flex'
import { CSS, styled } from '~/stitches'

const GridContainer = styled(Flex, {
  flexWrap: 'wrap',
  variants: {
    gap: Object.keys(theme.space).reduce(
      // output:
      // { 0: { m: '-$space$0', '& > *': { m: '$space$0 } }, ... }
      (acc, key) => ({
        ...acc,
        [key]: {
          m: `-$space$${key}`,
          '& > *': {
            m: `$space$${key}`
          }
        }
      }),
      {}
    )
  }
})

type GridProps = {
  minItemSize: string
} & React.ComponentProps<typeof GridContainer>

export const Grid: React.FC<GridProps> = ({
  children,
  css,
  gap,
  minItemSize,
  ...remainingProps
}) => {
  return (
    <GridContainer
      gap={gap}
      css={
        {
          '& > *': {
            flex: `1 0 ${minItemSize}`
          },
          ...css
        } as CSS
      }
      {...remainingProps}
    >
      {children}
    </GridContainer>
  )
}

Grid.displayName = 'Grid'
