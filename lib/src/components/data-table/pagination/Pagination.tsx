import * as React from 'react'
import { Flex } from '../../flex'
import { useDataTable } from '../context'
import { Button } from '../../button'
import { Text } from '../../text'
import { DirectionButton, GotoPageSelect } from './Buttons'
import { styled } from '~/stitches'
import { useReactTable } from '@tanstack/react-table'
import { CSS } from '~/stitches'

/** Applies pagination to parent DataTableProvider and renders UI to switch pages etc */

const StyledPagination = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const Pagination: React.FC<
  React.ComponentProps<typeof StyledPagination>
> = ({ css, ...props }) => {
  const {
    applyPagination,
    getState,
    getRowModel,
    getPageCount,
    previousPage,
    nextPage,
    setPageIndex,
    getTotalRows
  } = useDataTable()

  React.useEffect(() => {
    applyPagination()
  }, [applyPagination])

  const { pageIndex, pageSize } = getState().pagination
  const recordsCountFrom = pageIndex * pageSize + 1
  const recordsCountTo = recordsCountFrom + getRowModel().rows.length - 1

  return (
    <StyledPagination {...props} css={{ mt: '$4', ...css } as CSS}>
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
    </StyledPagination>
  )
}
