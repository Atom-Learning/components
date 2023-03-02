import React from 'react'

import { CSS } from '~/stitches'

import { Box } from '../box'
import { useStickyColumnsCss } from './useStickyColumnsCss'
interface ITableStickyColumnsContainerProps {
  children: React.ReactNode
  numberOfStickyColumns?: number
  css?: CSS
}

export const TableStickyColumnsContainer: React.FC<
  ITableStickyColumnsContainerProps
> = ({ children, numberOfStickyColumns = 0, css, ...restProps }) => {
  const [hasScroll, setHasScroll] = React.useState<boolean>(false)
  const scrollContainerRef = React.useRef(null)
  const { columnsCss } = useStickyColumnsCss(
    numberOfStickyColumns,
    scrollContainerRef
  )

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const newHasScroll =
      event.currentTarget.scrollWidth > event.currentTarget.clientWidth
    if (newHasScroll !== hasScroll) {
      setHasScroll(newHasScroll)
    }
  }

  return (
    <Box
      onScroll={handleScroll}
      role="scrollbar"
      ref={scrollContainerRef}
      css={{
        overflow: 'auto',
        maxWidth: '100%',
        ...columnsCss,
        [`& td:nth-child(${numberOfStickyColumns}), th:nth-child(${numberOfStickyColumns})`]:
          {
            ...(hasScroll && {
              boxShadow: '$colors$alpha200 -2px -3px 9px 1px',
              clipPath: 'inset(0px -10px 0px 0px)'
            })
          },
        '& td': {
          bg: 'inherit'
        },
        ...css
      }}
      {...restProps}
    >
      {children}
    </Box>
  )
}
