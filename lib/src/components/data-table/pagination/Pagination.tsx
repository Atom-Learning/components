import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../../flex'
import { Text } from '../../text'
import { ApiQueryStatus } from '../DataTable.types'
import { useDataTable } from '../DataTableContext'
import { DirectionButton, GotoPageSelect } from './PaginationButtons'

const StyledNav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

type PaginationProps = React.ComponentProps<typeof StyledNav>

/** Applies pagination to parent DataTableProvider and renders UI to switch pages etc */
export const Pagination: React.FC<PaginationProps> = ({ ...props }) => {
  const {
    applyPagination,
    getState,
    getRowModel,
    getPageCount,
    previousPage,
    nextPage,
    setPageIndex,
    getTotalRows,
    apiQueryStatus
  } = useDataTable()

  React.useEffect(() => {
    applyPagination()
  }, [applyPagination])

  const { pagination: paginationState } = getState()

  const recordsCountFrom =
    paginationState.pageIndex * paginationState.pageSize + 1
  const recordsCountTo = recordsCountFrom + getRowModel().rows.length - 1
  const isLoading = apiQueryStatus === ApiQueryStatus.PENDING

  if (apiQueryStatus === ApiQueryStatus.FAILED) return null

  return (
    <StyledNav {...props}>
      <Text size="sm">
        {`${recordsCountFrom.toString()} - ${recordsCountTo.toString()} of ${getTotalRows()} items`}
      </Text>

      <GotoPageSelect
        gotoPage={setPageIndex}
        pageCount={getPageCount()}
        pageIndex={paginationState.pageIndex}
        disabled={isLoading}
      />

      <Flex css={{ justifyContent: 'flex-end' }}>
        <DirectionButton
          direction="previous"
          disabled={paginationState.pageIndex === 0 || isLoading}
          onClick={previousPage}
          css={{ mr: '$4' }}
        />
        <DirectionButton
          direction="next"
          disabled={
            paginationState.pageIndex === getPageCount() - 1 || isLoading
          }
          onClick={nextPage}
        />
      </Flex>
    </StyledNav>
  )
}
