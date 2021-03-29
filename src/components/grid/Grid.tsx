import theme from '@atom-learning/theme'
import * as React from 'react'

import { Flex } from '~/components/flex'
import { CSS, styled } from '~/stitches'

const GridContainer = styled(Flex, {
  flexWrap: 'wrap',
  variants: {
    // { 0: { m: '-$space$0', '& > *': { m: '$space$0 } }, ... }
    gap: Object.keys(theme.space).reduce(
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
  children: React.ReactNode
  gap: string
} & React.ComponentProps<typeof GridContainer>

export const Grid: React.FC<GridProps> = ({
  minItemSize,
  children,
  gap,
  css,
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
