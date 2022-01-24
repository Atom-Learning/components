import { act, fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { SearchInput } from '.'

describe('SearchInput component', () => {
  it('renders', async () => {
    const { container } = render(<SearchInput />)

    expect(container).toMatchSnapshot()
  })

  it('renders clear button', async () => {
    const { container } = render(<SearchInput value="testing" />)

    expect(container).toMatchSnapshot()
  })

  it('clears text on button click', async () => {
    const mockOnChange = jest.fn()

    render(<SearchInput placeholder="Search" onChange={mockOnChange} />)

    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: '1' } })

    expect(mockOnChange.mock.calls.length).toBe(1)
  })

  it('clears text on button click', async () => {
    render(<SearchInput value="testing" />)

    act(() => {
      fireEvent.click(screen.getByRole('button'))
    })

    expect(await screen.queryByText('testing')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<SearchInput aria-label="Search" />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
