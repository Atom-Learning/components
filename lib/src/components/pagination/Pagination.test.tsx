import * as React from 'react'

import { Pagination } from './index'
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within
} from '@testing-library/react'
import { axe } from 'jest-axe'

const arrayOfPages = [
  { pageNumber: 1, isCompleted: false },
  { pageNumber: 2, isCompleted: false },
  { pageNumber: 3, isCompleted: false },
  { pageNumber: 4, isCompleted: false },
  { pageNumber: 5, isCompleted: false },
  { pageNumber: 6, isCompleted: true },
  { pageNumber: 7, isCompleted: false, isDisabled: true }
]

const PaginationComponent = ({
  pages,
  onSelectedPageChange
}: {
  pages: number
  onSelectedPageChange: (pageNumber: number) => void
}) => {
  return (
    <Pagination
      pages={pages}
      colorScheme={{ base: 'purple2', accent: 'purple1' }}
      css={{ display: 'flex' }}
      onSelectedPageChange={onSelectedPageChange}
    >
      <Pagination.PreviousButton />
      <Pagination.Pages />
      <Pagination.NextButton />
    </Pagination>
  )
}

const PaginationComponentWithEnrichedPages = ({
  onSelectedPageChange
}: {
  onSelectedPageChange: (pageNumber: number) => void
}) => {
  return (
    <Pagination
      colorScheme={{ base: 'purple2', accent: 'purple1' }}
      css={{ display: 'flex' }}
      pages={arrayOfPages}
      onSelectedPageChange={onSelectedPageChange}
    >
      <Pagination.PreviousButton />
      <Pagination.Pages />
      <Pagination.NextButton />
    </Pagination>
  )
}
const pageChangeSpy = jest.fn()

describe('Pagination component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', async () => {
    const { container } = await render(
      <PaginationComponent pages={6} onSelectedPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(container).toMatchSnapshot()
  })

  it('renders when an array of pages is passed in as a prop', async () => {
    const { container } = await render(
      <PaginationComponentWithEnrichedPages
        onSelectedPageChange={pageChangeSpy}
      />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(container).toMatchSnapshot()
  })

  it('renders the previous button as disabled when on the first page', async () => {
    await render(
      <PaginationComponent pages={6} onSelectedPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(screen.getByRole('button', { name: '1' })).toHaveAttribute(
      'aria-current',
      'page'
    )

    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
  })

  it('renders the Next button as disabled when on the last page', async () => {
    await render(
      <PaginationComponent pages={6} onSelectedPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    fireEvent.click(screen.getByRole('button', { name: '6' }))

    expect(screen.getByRole('button', { name: '6' })).toHaveAttribute(
      'aria-current',
      'page'
    )

    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled()
  })

  it('can change the current page by clicking on a page button', async () => {
    const pageChangeSpy = jest.fn()
    await render(
      <PaginationComponent pages={6} onSelectedPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    // By default the first page button is the active button
    expect(screen.getByRole('button', { name: '1' })).toHaveAttribute(
      'aria-current',
      'page'
    )
    // Click to change page
    fireEvent.click(screen.getByRole('button', { name: '2' }))

    expect(pageChangeSpy).toHaveBeenCalledWith(2)
    // Now the second page button should be the active button
    expect(screen.getByRole('button', { name: '2' })).toHaveAttribute(
      'aria-current',
      'page'
    )
  })

  it('opens the popover when the trigger is clicked', async () => {
    await render(
      <PaginationComponent pages={6} onSelectedPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    fireEvent.click(screen.getByTestId('popover_trigger'))

    const dialog = await screen.findByRole('dialog')

    expect(within(dialog).getByText('3')).toBeVisible()
  })

  it('renders no popover trigger when we have 4 or less pages', async () => {
    await render(
      <PaginationComponent pages={4} onSelectedPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(screen.queryByTestId('popover_trigger')).not.toBeInTheDocument()
  })

  it('can render a page button as disabled', async () => {
    await render(
      <PaginationComponentWithEnrichedPages
        onSelectedPageChange={pageChangeSpy}
      />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(screen.getByRole('button', { name: '7' })).toBeDisabled()
  })

  it("throws an error when 0 is passed in as 'pages' prop", async () => {
    const pageChangeSpy = jest.fn()
    expect(() =>
      render(
        <Pagination
          colorScheme={{ base: 'purple2', accent: 'purple1' }}
          css={{ display: 'flex' }}
          onSelectedPageChange={pageChangeSpy}
          pages={0}
        >
          <Pagination.PreviousButton />
          <Pagination.Pages />
          <Pagination.NextButton />
        </Pagination>
      )
    ).toThrow(
      "The Pagination Component requires the 'page' prop it can be a numerical value above 0 or an array of objects with a 'pageNumber' property"
    )
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = await render(
      <PaginationComponent pages={6} onSelectedPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })
})
