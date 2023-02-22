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
  const [hasScroll, setHasScroll] = React.useState<boolean>(false)

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
      css={{
        overflow: 'auto',
        maxWidth: '100%',
        [`& td:nth-of-type(${numberOfStickyColumns}), th:nth-of-type(${numberOfStickyColumns})`]:
          {
            ...(hasScroll && {
              boxShadow: '$colors$alpha200 -2px -3px 9px 1px',
              clipPath: 'inset(0px -10px 0px 0px)'
            }),
            ...(numberOfStickyColumns === 1 && {
              position: 'sticky',
              left: '0',
              zIndex: '2'
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
