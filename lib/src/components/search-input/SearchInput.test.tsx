import { act, fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { SearchInput } from '.'

describe('SearchInput component', () => {
  it('renders', async () => {
    const { container } = render(<SearchInput />)

    expect(container).toMatchSnapshot()
  })

  it('renders clear button when non-empty defaultValue', async () => {
    const { container } = render(
      <SearchInput
        defaultValue="testingWhenDefaultValue"
        clearText="clearWhenDefaultValue"
      />
    )
    expect(container).toMatchSnapshot()

    expect(
      await screen.queryByDisplayValue('testingWhenDefaultValue')
    ).toBeInTheDocument()
    expect(screen.getByLabelText('clearWhenDefaultValue')).toBeInTheDocument()
  })

  it('renders clear button when non-empty value', async () => {
    render(<SearchInput value="testingWhenValue" clearText="clearWhenValue" />)
    expect(
      await screen.queryByDisplayValue('testingWhenValue')
    ).toBeInTheDocument()
    expect(screen.getByLabelText('clearWhenValue')).toBeInTheDocument()
  })

  it('calls onChange with user input', async () => {
    const mockOnChange = jest.fn()
    const mockOnValueChange = jest.fn()

    render(
      <SearchInput
        placeholder="Search"
        onChange={mockOnChange}
        onValueChange={mockOnValueChange}
      />
    )

    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: 'newValue' } })

    expect(mockOnChange.mock.calls.length).toBe(1)
    expect(mockOnValueChange).toHaveBeenCalledWith('newValue')
  })

  it('clears text on button click', async () => {
    render(<SearchInput value="testing" />)

    act(() => {
      fireEvent.click(screen.getByRole('button'))
    })

    expect(await screen.queryByDisplayValue('testing')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<SearchInput aria-label="Search" />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
