import * as React from 'react'

import { styled } from '~/stitches'

import { Pagination as PaginationComponent } from '../../pagination'
import { Text } from '../../text'
import { AsyncDataState } from '../DataTable.types'
import { useDataTable } from '../DataTableContext'

const StyledNav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontVariantNumeric: 'tabular-nums',
  flexWrap: 'wrap',
  width: '100%',
  gap: '$4',
  mt: '$4',
  '@md': {
    flexDirection: 'row'
  }
})

type PaginationProps = React.ComponentProps<typeof StyledNav>

/** Applies pagination to parent DataTableProvider and renders UI to switch pages etc */
export const Pagination = (props: PaginationProps) => {
  const {
    applyPagination,
    getState,
    getRowModel,
    getPageCount,
    setPageIndex,
    getTotalRows,
    asyncDataState
  } = useDataTable()

  React.useEffect(() => {
    applyPagination()
  }, [applyPagination])

  const { pagination: paginationState } = getState()
  const isPending = asyncDataState === AsyncDataState.PENDING
  const isEmpty = !isPending && getTotalRows() === 0

  if (isEmpty) return null

  const recordsCountFrom =
    paginationState.pageIndex * paginationState.pageSize + 1
  const recordsCountTo = recordsCountFrom + getRowModel().rows.length - 1

  //indexing for the pagination component is 1 based
  const setPage = (index: number) => {
    setPageIndex(index - 1)
  }

  return (
    <StyledNav {...props}>
      <Text size="sm">
        {`${recordsCountFrom.toString()} - ${recordsCountTo.toString()} of ${getTotalRows()} items`}
      </Text>
      <PaginationComponent
        selectedPage={paginationState.pageIndex + 1}
        pagesCount={getPageCount()}
        onSelectedPageChange={setPage}
      />
    </StyledNav>
  )
}
