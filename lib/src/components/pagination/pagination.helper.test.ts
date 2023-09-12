import { VisibleElementsAmount } from './pagination.constants'
import {
  findNextAvailablePage,
  findPreviousAvailablePage,
  getPaginationItemsToRender
} from './pagination.helper'

describe('getPaginationItemsToRender', () => {
  it('should render the correct array if pagesCount is less than or equal to the truncated threshold', async () => {
    const array = getPaginationItemsToRender(1, 4)

    expect(array).toHaveLength(4)
    expect(array).toEqual([1, 2, 3, 4])
  })

  describe('should return the correct array, when not showing the maximum number of elements', () => {
    const expectedItems = [
      [1, 2],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [7, 8],
      [7, 8]
    ]

    it.each([1, 2, 3, 4, 5, 6, 7, 8])('on page %p of 8', async (page) => {
      expect(getPaginationItemsToRender(page, 8)).toEqual(
        expectedItems[page - 1]
      )
    })
  })
  describe('should return the correct array, when showing the maximum number of elements', () => {
    const expectedItems = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [5, 6, 7, 8],
      [5, 6, 7, 8],
      [5, 6, 7, 8],
      [5, 6, 7, 8]
    ]

    it.each([1, 2, 3, 4, 5, 6, 7, 8])('on page %p of 8', async (page) => {
      expect(
        getPaginationItemsToRender(page, 8, VisibleElementsAmount.MORE)
      ).toEqual(expectedItems[page - 1])
    })
  })
})

describe('findNextAvailablePage', () => {
  it('should return the next available page when there are disabled pages', async () => {
    const disabledPages = [1, 2, 3, 5]
    const startPage = 1
    const nextAvailablePage = findNextAvailablePage(startPage, disabledPages)

    expect(nextAvailablePage).toBe(4)
  })

  it('should return the start page when there are no disabled pages', () => {
    const disabledPages = []
    const startPage = 1
    const nextAvailablePage = findNextAvailablePage(startPage, disabledPages)

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
