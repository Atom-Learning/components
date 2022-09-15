import * as React from 'react'
import { Flex } from '../../flex'
import { useDataTable } from '../context'
import { Button } from '../../button'
import { Text } from '../../text'
import { DirectionButton, GotoPageSelect } from './Buttons'
import { styled } from '~/stitches'
import { useReactTable } from '@tanstack/react-table'
import type { CSS } from '~/stitches'

const StyledNav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

type PaginationProps = React.ComponentProps<typeof StyledNav> & {
  pageSize?: number
}

/** Applies pagination to parent DataTableProvider and renders UI to switch pages etc */
export const Pagination: React.FC<PaginationProps> = ({
  css,
  pageSize: defaultPageSize = 10,
  ...props
}) => {
  const {
    applyPagination,
    getState,
    getRowModel,
    getPageCount,
    previousPage,
    nextPage,
    setPageIndex,
    setPageSize,
    getTotalRows
  } = useDataTable()

  React.useEffect(() => {
    applyPagination()
  }, [applyPagination])

  React.useEffect(() => {
    setPageSize(defaultPageSize)
  }, [setPageSize, defaultPageSize])

  const { pageIndex, pageSize } = getState().pagination
  const recordsCountFrom = pageIndex * pageSize + 1
  const recordsCountTo = recordsCountFrom + getRowModel().rows.length - 1

  return (
    <StyledNav {...props} css={{ mt: '$4', ...css } as CSS}>
      <Text size="sm" css={{ flexBasis: '25%' }}>
        {`${recordsCountFrom.toString()} - ${recordsCountTo.toString()} of ${getTotalRows()} items`}
      </Text>
      <Flex
        css={{
          alignItems: 'center',
          justifyContent: 'space-around',
          flexBasis: '50%'
        }}
      >
        <GotoPageSelect
          gotoPage={setPageIndex}
          pageCount={getPageCount()}
          pageIndex={pageIndex}
        />
      </Flex>
      <Flex css={{ flexBasis: '25%', justifyContent: 'flex-end' }}>
        <DirectionButton
          direction="previous"
          disabled={pageIndex === 0}
          onClick={previousPage}
          css={{ mr: '$4' }}
        />
        <DirectionButton
          direction="next"
          disabled={pageIndex === getPageCount() - 1}
          onClick={nextPage}
        />
      </Flex>
    </StyledNav>
  )
}
