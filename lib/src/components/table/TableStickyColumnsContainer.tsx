import React from 'react'

import { CSS } from '~/stitches'

import { Box } from '../box'

interface ITableStickyColumnsContainerProps {
  children: React.ReactNode
  numberOfStickyColumns?: number
  css?: CSS
}

export const TableStickyColumnsContainer: React.FC<
  ITableStickyColumnsContainerProps
> = ({ children, numberOfStickyColumns = 0, css, ...restProps }) => {
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false)

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setIsScrolling(event.target.scrollLeft > 0)
  }

  return (
    <Box
      onScroll={handleScroll}
      role="scrollbar"
      css={{
        overflow: 'auto',
        ...(isScrolling && {
          [`& th,td:nth-of-type(${numberOfStickyColumns})`]: {
            boxShadow: '$colors$alpha200 -2px -3px 9px 1px',
            clipPath: 'inset(0px -10px 0px 0px)'
          }
        }),
        ...css
      }}
      {...restProps}
    >
      {children}
    </Box>
  )
}
