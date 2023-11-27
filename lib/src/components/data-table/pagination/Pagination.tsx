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
  fontVariantNumeric: 'tabular-nums',
  flexWrap: 'wrap',
  rowGap: '$4'
})

type PaginationProps = React.ComponentProps<typeof StyledNav>

/** Applies pagination to parent DataTableProvider and renders UI to switch pages etc */
export const Pagination: React.FC<PaginationProps> = (props) => {
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
  const isPending = asyncDataState === AsyncDataState.PENDING
  const isEmpty = !isPending && getTotalRows() === 0

  if (isEmpty) return null

  const recordsCountFrom =
    paginationState.pageIndex * paginationState.pageSize + 1
  const recordsCountTo = recordsCountFrom + getRowModel().rows.length - 1
  const isPaginationDisabled =
    asyncDataState === AsyncDataState.PENDING ||
    asyncDataState === AsyncDataState.REJECTED

  return (
    <StyledNav {...props}>
      <Text
        size="sm"
        css={{
          pr: '$4',
          '@sm': { flexBasis: '50%' }
        }}
      >
        {`${recordsCountFrom.toString()} - ${recordsCountTo.toString()} of ${getTotalRows()} items`}
      </Text>

      <Flex
        justify="space-between"
        css={{ width: '100%', '@sm': { flexBasis: '50%' } }}
      >
        <GotoPageSelect
          gotoPage={setPageIndex}
          pageCount={getPageCount()}
          pageIndex={paginationState.pageIndex}
          disabled={isPaginationDisabled}
        />

        <Flex gap="4">
          <DirectionButton
            direction="previous"
            disabled={paginationState.pageIndex === 0 || isPaginationDisabled}
            onClick={previousPage}
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
      </Flex>
    </StyledNav>
  )
}
