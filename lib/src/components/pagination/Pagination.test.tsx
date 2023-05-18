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

const enrichedPages = [
  { pageNumber: 1, isCompleted: false },
  { pageNumber: 2, isCompleted: false },
  { pageNumber: 3, isCompleted: false },
  { pageNumber: 4, isCompleted: false },
  { pageNumber: 5, isCompleted: false },
  { pageNumber: 6, isCompleted: false },
  { pageNumber: 7, isCompleted: true, isDisabled: true }
]

const PaginationComponent = ({
  numOfPages,
  onPageChange
}: {
  numOfPages: number
  onPageChange: (pageNumber: number) => void
}) => {
  return (
    <Pagination
      numOfPages={numOfPages}
      colorScheme={{ base: 'purple2', accent: 'purple1' }}
      css={{ display: 'flex' }}
      onPageChange={onPageChange}
    >
      <Pagination.PreviousButton />
      <Pagination.Pages />
      <Pagination.NextButton />
    </Pagination>
  )
}

const PaginationComponentWithEnrichedPages = ({
  onPageChange
}: {
  onPageChange: (pageNumber: number) => void
}) => {
  return (
    <Pagination
      colorScheme={{ base: 'purple2', accent: 'purple1' }}
      css={{ display: 'flex' }}
      pages={enrichedPages}
      onPageChange={onPageChange}
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
      <PaginationComponent numOfPages={6} onPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(container).toMatchSnapshot()
  })

  it('renders the enriched pages variant', async () => {
    const { container } = await render(
      <PaginationComponentWithEnrichedPages onPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(container).toMatchSnapshot()
  })

  it('renders the previous button as disabled when on the first page', async () => {
    await render(
      <PaginationComponent numOfPages={6} onPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
  })

  it('renders the Next button as disabled when on the last page', async () => {
    await render(
      <PaginationComponent numOfPages={6} onPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    fireEvent.click(screen.getByRole('button', { name: '6' }))

    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled()
  })

  it('can change the current page by clicking on a page button', async () => {
    const pageChangeSpy = jest.fn()
    await render(
      <PaginationComponent numOfPages={6} onPageChange={pageChangeSpy} />
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
      <PaginationComponent numOfPages={6} onPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    fireEvent.click(screen.getByTestId('popover_trigger'))

    const dialog = await screen.findByRole('dialog')

    expect(within(dialog).getByText('3')).toBeVisible()
  })

  it('renders no popover trigger when we have 4 or less numOfPages', async () => {
    await render(
      <PaginationComponent numOfPages={4} onPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(screen.queryByTestId('popover_trigger')).not.toBeInTheDocument()
  })

  it('can render a page button as disabled', async () => {
    await render(
      <PaginationComponentWithEnrichedPages onPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(screen.getByRole('button', { name: '7' })).toBeDisabled()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = await render(
      <PaginationComponent numOfPages={6} onPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })
})
