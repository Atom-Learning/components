import {
  fireEvent,
  render,
  screen,
  waitFor,
  within
} from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Pagination } from './index'

const pageChangeSpy = jest.fn()

describe('Pagination component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', async () => {
    const { container } = await render(
      <Pagination
        colorScheme={{ base: 'purple2', accent: 'purple1' }}
        pagesCount={6}
        onSelectedPageChange={pageChangeSpy}
      />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(container).toMatchSnapshot()
  })

  it('renders the previous button as disabled when on the first page', async () => {
    await render(
      <Pagination pagesCount={6} onSelectedPageChange={pageChangeSpy} />
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
      <Pagination pagesCount={6} onSelectedPageChange={pageChangeSpy} />
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
    await render(
      <Pagination pagesCount={6} onSelectedPageChange={pageChangeSpy} />
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
      <Pagination pagesCount={6} onSelectedPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    fireEvent.click(screen.getByTestId('pagination_popover_trigger'))

    const dialog = await screen.findByRole('dialog')

    expect(within(dialog).getByText('3')).toBeVisible()
  })

  it('renders no popover trigger when we have 4 or less pages', async () => {
    await render(
      <Pagination
        pagesCount={4}
        onSelectedPageChange={pageChangeSpy}
        visibleElementsCount={6}
      />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(screen.queryByTestId('popover_trigger')).not.toBeInTheDocument()
  })

  it('can render a pagination item as disabled', async () => {
    await render(
      <Pagination
        pagesCount={10}
        disabledPages={[2]}
        onSelectedPageChange={pageChangeSpy}
      />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(screen.getByRole('button', { name: '2' })).toBeDisabled()
  })

  it('skips disabled pagination items as we navigate, and show 8 visible elements', async () => {
    await render(
      <Pagination
        pagesCount={10}
        disabledPages={[2, 4, 5]}
        onSelectedPageChange={pageChangeSpy}
        visibleElementsCount={8}
      />
    )

    expect(await screen.findByText(1)).toBeVisible()

    // By default the first page button is the active button
    expect(screen.getByRole('button', { name: '1' })).toHaveAttribute(
      'aria-current',
      'page'
    )

    fireEvent.click(screen.getByRole('button', { name: 'Next page' }))

    // As page 2 is disabled we should have been skipped and we should be on page 3
    expect(screen.getByRole('button', { name: '3' })).toHaveAttribute(
      'aria-current',
      'page'
    )
  })

  it('skips disabled pagination items as we navigate, and show 6 visible elements', async () => {
    await render(
      <Pagination
        pagesCount={10}
        disabledPages={[3, 5, 6]}
        onSelectedPageChange={pageChangeSpy}
      />
    )

    expect(await screen.findByText(1)).toBeVisible()

    // By default the first page button is the active button
    expect(screen.getByRole('button', { name: '1' })).toHaveAttribute(
      'aria-current',
      'page'
    )

    // Navigate to the second page
    const nextPageButton = screen.getByRole('button', { name: 'Next page' })
    fireEvent.click(nextPageButton)

    expect(screen.getByRole('button', { name: '2' })).toHaveAttribute(
      'aria-current',
      'page'
    )

    fireEvent.click(nextPageButton)

    // As page 3 is disabled we should have been skipped and we should be on page 4
    expect(screen.getByRole('button', { name: '4' })).toHaveAttribute(
      'aria-current',
      'page'
    )
  })

  it('renders the correct pagination items as we navigate when we show 8 visible elements', async () => {
    await render(
      <Pagination
        pagesCount={10}
        onSelectedPageChange={pageChangeSpy}
        visibleElementsCount={8}
      />
    )

    expect(await screen.findByText(1)).toBeVisible()

    // Click the Next Page button three times
    const nextPageButton = screen.getByRole('button', { name: 'Next page' })
    fireEvent.click(nextPageButton)
    fireEvent.click(nextPageButton)
    fireEvent.click(nextPageButton)

    // Check we are showing the correct page numbers
    expect(await screen.findByText(2)).toBeVisible()
    expect(await screen.findByText(3)).toBeVisible()
    expect(await screen.findByText(4)).toBeVisible()
    expect(await screen.findByText(5)).toBeVisible()

    // Click the Previous Page button
    const previousPageButton = screen.getByRole('button', {
      name: 'Previous page'
    })
    fireEvent.click(previousPageButton)
    fireEvent.click(previousPageButton)

    // Check we are showing the correct page numbers
    expect(await screen.findByText(1)).toBeVisible()
    expect(await screen.findByText(2)).toBeVisible()
    expect(await screen.findByText(3)).toBeVisible()
    expect(await screen.findByText(4)).toBeVisible()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = await render(
      <Pagination pagesCount={6} onSelectedPageChange={pageChangeSpy} />
    )

    expect(await screen.findByText(1)).toBeVisible()

    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })
})
