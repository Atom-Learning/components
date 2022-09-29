import * as React from 'react'

import { styled } from '~/stitches'

import { useDataTable } from '../DataTableContext'
import { DirectionButton, GotoPageSelect } from './PaginationButtons'
import { Flex } from '../../flex'
import { Text } from '../../text'

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
  pageSize = 10,
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
    setPageSize(pageSize)
  }, [setPageSize, pageSize])

  const { pagination: paginationState } = getState()

  const recordsCountFrom =
    paginationState.pageIndex * paginationState.pageSize + 1
  const recordsCountTo = recordsCountFrom + getRowModel().rows.length - 1

  return (
    <StyledNav {...props}>
      <Text size="sm">
        {`${recordsCountFrom.toString()} - ${recordsCountTo.toString()} of ${getTotalRows()} items`}
      </Text>

      <GotoPageSelect
        gotoPage={setPageIndex}
        pageCount={getPageCount()}
        pageIndex={paginationState.pageIndex}
      />

      <Flex css={{ justifyContent: 'flex-end' }}>
        <DirectionButton
          direction="previous"
          disabled={paginationState.pageIndex === 0}
          onClick={previousPage}
          css={{ mr: '$4' }}
        />
        <DirectionButton
          direction="next"
          disabled={paginationState.pageIndex === getPageCount() - 1}
          onClick={nextPage}
        />
      </Flex>
    </StyledNav>
  )
}
