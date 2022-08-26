import * as React from 'react'
import { Flex } from '../flex'
import { useDataTable } from './context'
import { Button } from '../button'

/** Applies pagination to parent DataTableProvider and renders UI to switch pages etc */
export const Pagination = () => {
  const {
    applyPagination,
    setPageIndex,
    getPageCount,
    nextPage,
    previousPage,
    getCanNextPage,
    getCanPreviousPage
  } = useDataTable()

  React.useEffect(() => {
    applyPagination()
  }, [applyPagination])

  return (
    <Flex>
      <Button
        onClick={() => setPageIndex(0)}
        disabled={!getCanPreviousPage()}
        size="sm"
      >
        First
      </Button>
      <Button
        onClick={() => previousPage()}
        disabled={!getCanPreviousPage()}
        size="sm"
      >
        Previous
      </Button>
      <Button onClick={() => nextPage()} disabled={!getCanNextPage()} size="sm">
        Next
      </Button>
      <Button
        onClick={() => setPageIndex(getPageCount() - 1)}
        disabled={!getCanNextPage()}
        size="sm"
      >
        Last
      </Button>
    </Flex>
  )
}
