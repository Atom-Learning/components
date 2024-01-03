import {
  GO_TO_NEXT_PAGE,
  GO_TO_PREVIOUS_PAGE,
  VIEW_ALL_POPOVER,
  VisibleElementsAmount
} from './pagination.constants'
import {
  findNextAvailablePage,
  findPreviousAvailablePage,
  getPaginationElementsToRender
} from './pagination.helper'

describe('getPaginationElementsToRender', () => {
  it('should render the correct array if pagesCount is less than or equal to the truncated threshold', async () => {
    const array = getPaginationElementsToRender(
      1,
      4,
      VisibleElementsAmount.LESS
    )

    expect(array).toHaveLength(6)
    expect(array).toEqual([GO_TO_PREVIOUS_PAGE, 1, 2, 3, 4, GO_TO_NEXT_PAGE])
  })

  describe('should return the correct array, when not showing the maximum number of elements', () => {
    const expectedItems = [
      [GO_TO_PREVIOUS_PAGE, 1, 2, VIEW_ALL_POPOVER, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 1, 2, VIEW_ALL_POPOVER, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 2, 3, VIEW_ALL_POPOVER, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 3, 4, VIEW_ALL_POPOVER, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 4, 5, VIEW_ALL_POPOVER, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 5, 6, VIEW_ALL_POPOVER, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 1, VIEW_ALL_POPOVER, 7, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 1, VIEW_ALL_POPOVER, 7, 8, GO_TO_NEXT_PAGE]
    ]

    it.each([1, 2, 3, 4, 5, 6, 7, 8])('on page %p of 8', async (page) => {
      expect(
        getPaginationElementsToRender(page, 8, VisibleElementsAmount.LESS)
      ).toEqual(expectedItems[page - 1])
    })
  })
  describe('should return the correct array, when showing the maximum number of elements', () => {
    const expectedItems = [
      [GO_TO_PREVIOUS_PAGE, 1, 2, 3, 4, VIEW_ALL_POPOVER, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 1, 2, 3, 4, VIEW_ALL_POPOVER, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 1, 2, 3, 4, VIEW_ALL_POPOVER, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 2, 3, 4, 5, VIEW_ALL_POPOVER, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 1, VIEW_ALL_POPOVER, 5, 6, 7, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 1, VIEW_ALL_POPOVER, 5, 6, 7, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 1, VIEW_ALL_POPOVER, 5, 6, 7, 8, GO_TO_NEXT_PAGE],
      [GO_TO_PREVIOUS_PAGE, 1, VIEW_ALL_POPOVER, 5, 6, 7, 8, GO_TO_NEXT_PAGE]
    ]

    it.each([1, 2, 3, 4, 5, 6, 7, 8])('on page %p of 8', async (page) => {
      expect(
        getPaginationElementsToRender(page, 8, VisibleElementsAmount.MORE)
      ).toEqual(expectedItems[page - 1])
    })
  })
})

describe('findNextAvailablePage', () => {
  it('should return the next available page when there are disabled pages', async () => {
    const disabledPages = [1, 2, 3, 5]
    const startPage = 1
    const nextAvailablePage = findNextAvailablePage(
      startPage,
      disabledPages,
      VisibleElementsAmount.LESS
    )

    expect(nextAvailablePage).toBe(4)
  })

  it('should return the start page when there are no disabled pages', () => {
    const disabledPages = []
    const startPage = 1
    const nextAvailablePage = findNextAvailablePage(
      startPage,
      disabledPages,
      VisibleElementsAmount.LESS
    )

    expect(nextAvailablePage).toBe(startPage)
  })
})

describe('findPreviousAvailablePage', () => {
  it('should return the previous available page when there are disabled pages', () => {
    const disabledPages = [2, 3, 5, 6]
    const startPage = 6
    const previousAvailablePage = findPreviousAvailablePage(
      startPage,
      disabledPages
    )

    expect(previousAvailablePage).toBe(4)
  })

  it('should return the start page when there are no disabled pages', () => {
    const disabledPages = []
    const startPage = 1
    const previousAvailablePage = findPreviousAvailablePage(
      startPage,
      disabledPages
    )

    expect(previousAvailablePage).toBe(startPage)
  })
})
