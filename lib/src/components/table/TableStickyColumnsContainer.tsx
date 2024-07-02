import React from 'react'

import { CSS } from '~/stitches'

import { Box } from '../box'
import { useStickyColumnsCss } from './useStickyColumnsCss'

export const TableStickyColumnsContainer = ({
  children,
  numberOfStickyColumns = 0,
  controlColumnCount,
  maxRowDepth,
  css,
  ...restProps
}: React.PropsWithChildren<{
  numberOfStickyColumns?: number
  css?: CSS
  controlColumnCount?: number
  maxRowDepth?: number
}>) => {
  const [hasScroll, setHasScroll] = React.useState<boolean>(false)
  const wrapperRef = React.useRef(null)
  const { columnsCss } = useStickyColumnsCss({
    numberOfStickyColumns,
    wrapperRef,
    controlColumnCount,
    maxRowDepth
  })

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
      ref={wrapperRef}
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
