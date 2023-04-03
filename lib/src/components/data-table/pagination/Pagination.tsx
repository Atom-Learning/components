import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../../flex'
import { Text } from '../../text'
import { AsyncDataState } from '../DataTable.types'
import { useDataTable } from '../DataTableContext'
import { DirectionButton, GotoPageSelect } from './PaginationButtons'

const StyledNav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontVariantNumeric: 'tabular-nums'
})

type PaginationProps = React.ComponentProps<typeof StyledNav>

/** Applies pagination to parent DataTableProvider and renders UI to switch pages etc */
export const Pagination: React.FC<PaginationProps> = (props) => {
  // TODO: MS fix `React does not recognize the `pageSize` prop on a DOM element.`
  const {
    applyPagination,
    getState,
    getRowModel,
    getPageCount,
    previousPage,
    nextPage,
    setPageIndex,
    getTotalRows,
    asyncDataState
  } = useDataTable()

  React.useEffect(() => {
    applyPagination()
  }, [applyPagination])

  const { pagination: paginationState } = getState()
  console.log('pagination', asyncDataState)

  if (asyncDataState !== AsyncDataState.PENDING && getTotalRows() === 0)
    return null

  const recordsCountFrom =
    paginationState.pageIndex * paginationState.pageSize + 1
  const recordsCountTo = recordsCountFrom + getRowModel().rows.length - 1
  const isPaginationDisabled =
    asyncDataState === AsyncDataState.PENDING ||
    asyncDataState === AsyncDataState.REJECTED

  return (
    <StyledNav {...props}>
      <Text size="sm">
        {`${recordsCountFrom.toString()} - ${recordsCountTo.toString()} of ${getTotalRows()} items`}
      </Text>

      <GotoPageSelect
        gotoPage={setPageIndex}
        pageCount={getPageCount()}
        pageIndex={paginationState.pageIndex}
        disabled={isPaginationDisabled}
      />

      <Flex css={{ justifyContent: 'flex-end' }}>
        <DirectionButton
          direction="previous"
          disabled={paginationState.pageIndex === 0 || isPaginationDisabled}
          onClick={previousPage}
          css={{ mr: '$4' }}
        />
        <DirectionButton
          direction="next"
          disabled={
            paginationState.pageIndex === getPageCount() - 1 ||
            isPaginationDisabled
          }
          onClick={nextPage}
        />
      </Flex>
    </StyledNav>
  )
}
