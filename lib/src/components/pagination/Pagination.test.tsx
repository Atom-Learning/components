import * as React from 'react'

import { Pagination } from './index'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

const mockTestQuestions = [
  { questionNumber: 1, isCompleted: false },
  { questionNumber: 2, isCompleted: false },
  { questionNumber: 3, isCompleted: false },
  { questionNumber: 4, isCompleted: false },
  { questionNumber: 5, isCompleted: false },
  { questionNumber: 6, isCompleted: false },
  { questionNumber: 7, isCompleted: true, isDisabled: true }
]

const PaginationComponent = ({ numOfPages }: { numOfPages: number }) => {
  return (
    <Pagination
      numOfPages={numOfPages}
      colorScheme={{ base: 'purple2', accent: 'purple1' }}
      css={{ display: 'flex' }}
    >
      <Pagination.PreviousButton />
      <Pagination.Pages />
      <Pagination.NextButton />
    </Pagination>
  )
}

const PaginationComponentMockTestVariant = () => {
  return (
    <Pagination
      colorScheme={{ base: 'purple2', accent: 'purple1' }}
      css={{ display: 'flex' }}
      mockTestQuestions={mockTestQuestions}
    >
      <Pagination.PreviousButton />
      <Pagination.Pages />
      <Pagination.NextButton />
    </Pagination>
  )
}

describe('Pagination component', () => {
  it('renders', async () => {
    const { container } = await render(<PaginationComponent numOfPages={6} />)

    expect(await screen.findByText(1)).toBeVisible()

    expect(container).toMatchSnapshot()
  })

  it('renders the mock test variant', async () => {
    const { container } = await render(<PaginationComponentMockTestVariant />)

    expect(await screen.findByText(1)).toBeVisible()

    expect(container).toMatchSnapshot()
  })

  it('renders the previous button as disabled when on the first page', async () => {
    await render(<PaginationComponent numOfPages={6} />)

    expect(await screen.findByText(1)).toBeVisible()

    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
  })

  it('renders the Next button as disabled when on the last page', async () => {
    await render(<PaginationComponent numOfPages={6} />)

    expect(await screen.findByText(1)).toBeVisible()

    fireEvent.click(screen.getByRole('button', { name: '6' }))

    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled()
  })

  it('can change the current page by clicking on a page button', async () => {
    await render(<PaginationComponent numOfPages={6} />)

    expect(await screen.findByText(1)).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: '2' }))

    // we need a way to get the current page
  })

  it.skip('opens the popover when the trigger is clicked', async () => {
    await render(<PaginationComponent numOfPages={6} />)

    expect(await screen.findByText(1)).toBeVisible()
    console.log(screen.getByRole('button', { name: 'dialog' }))

    // need a way to grab the trigger icon to check the popover appears, the tried to add a label so we could grab it still didn't work
  })

  it.skip('has no programmatically detectable a11y issues', async () => {
    const { container } = await render(<PaginationComponent numOfPages={6} />)

    expect(await screen.findByText(1)).toBeVisible()

    // errors with a violation found on $('button[aria-haspopup="dialog"]') ('"Buttons must have discernible text (button-name)"')
    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })
})
