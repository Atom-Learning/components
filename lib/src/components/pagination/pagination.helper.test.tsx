import { TRUNCATED_THRESHOLD } from './pagination.constants'
import { numOfPaginationItemsToRender } from './pagination.helper'

describe('numOfPaginationItemsToRender', () => {
  it('should render the correct array if pagesCount is less than or equal to the truncated threshold', async () => {
    const currentPage = 1
    const pagesCount = 4
    const isMaxVisibleElementCount = false
    const array = numOfPaginationItemsToRender(
      currentPage,
      pagesCount,
      TRUNCATED_THRESHOLD,
      isMaxVisibleElementCount
    )

    expect(array).toHaveLength(pagesCount - 1)
    expect(array).toEqual([1, 2, 3])
  })

  it('should return the correct array when on the first page out of eight pages and we are not showing the maximum number of elements', async () => {
    const currentPage = 1
    const pagesCount = 8
    const isMaxVisibleElementCount = false
    const array = numOfPaginationItemsToRender(
      currentPage,
      pagesCount,
      TRUNCATED_THRESHOLD,
      isMaxVisibleElementCount
    )
    expect(array).toEqual([1, 2])
  })

  it('should return the correct array when on the 4th page out of eight pages and we are not showing the maximum number of elements', async () => {
    const currentPage = 4
    const pagesCount = 8
    const isMaxVisibleElementCount = false
    const array = numOfPaginationItemsToRender(
      currentPage,
      pagesCount,
      TRUNCATED_THRESHOLD,
      isMaxVisibleElementCount
    )

    expect(array).toEqual([3, 4])
  })

  it('should return the correct array when on the last page out of eight pages and we are not showing the maximum number of elements', async () => {
    const currentPage = 8
    const pagesCount = 8
    const isMaxVisibleElementCount = false
    const array = numOfPaginationItemsToRender(
      currentPage,
      pagesCount,
      TRUNCATED_THRESHOLD,
      isMaxVisibleElementCount
    )

    expect(array).toEqual([6, 7])
  })

  it('should return the correct array when on the first page out of ten pages and we are showing the maximum number of elements', async () => {
    const currentPage = 1
    const pagesCount = 10
    const isMaxVisibleElementCount = true
    const array = numOfPaginationItemsToRender(
      currentPage,
      pagesCount,
      TRUNCATED_THRESHOLD,
      isMaxVisibleElementCount
    )

    expect(array).toEqual([1, 2, 3, 4])
  })

  it('should return the correct array when on the fifth page out of ten pages and we are showing the maximum number of elements', async () => {
    const currentPage = 5
    const pagesCount = 10
    const isMaxVisibleElementCount = true
    const array = numOfPaginationItemsToRender(
      currentPage,
      pagesCount,
      TRUNCATED_THRESHOLD,
      isMaxVisibleElementCount
    )

    expect(array).toEqual([3, 4, 5, 6])
  })

  it('should return the correct array when on the last page out of ten pages and we are showing the maximum number of elements', async () => {
    const currentPage = 10
    const pagesCount = 10
    const isMaxVisibleElementCount = true
    const array = numOfPaginationItemsToRender(
      currentPage,
      pagesCount,
      TRUNCATED_THRESHOLD,
      isMaxVisibleElementCount
    )

    expect(array).toEqual([6, 7, 8, 9])
  })
})
