import { act, fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tooltip } from '../tooltip'
import { SearchInput } from '.'

const Wrapper = ({ children }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
)

describe('SearchInput component', () => {
  it('renders', async () => {
    const { container } = render(
      <Wrapper>
        <SearchInput />
      </Wrapper>
    )

    expect(container).toMatchSnapshot()
  })

  it('renders clear button when non-empty defaultValue', async () => {
    const { container } = render(
      <Wrapper>
        <SearchInput
          defaultValue="testingWhenDefaultValue"
          clearText="clearWhenDefaultValue"
        />
      </Wrapper>
    )
    expect(container).toMatchSnapshot()

    expect(
      await screen.queryByDisplayValue('testingWhenDefaultValue')
    ).toBeInTheDocument()
    expect(screen.getByLabelText('clearWhenDefaultValue')).toBeInTheDocument()
  })

  it('renders clear button when non-empty value', async () => {
    render(
      <Wrapper>
        <SearchInput value="testingWhenValue" clearText="clearWhenValue" />
      </Wrapper>
    )
    expect(
      await screen.queryByDisplayValue('testingWhenValue')
    ).toBeInTheDocument()
    expect(screen.getByLabelText('clearWhenValue')).toBeInTheDocument()
  })

  it('calls onChange with user input', async () => {
    const mockOnChange = jest.fn()
    const mockOnValueChange = jest.fn()

    render(
      <Wrapper>
        <SearchInput
          placeholder="Search"
          onChange={mockOnChange}
          onValueChange={mockOnValueChange}
        />
      </Wrapper>
    )

    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: 'newValue' } })

    expect(mockOnChange.mock.calls.length).toBe(1)
    expect(mockOnValueChange).toHaveBeenCalledWith('newValue')
  })

  it('clears text on button click', async () => {
    render(
      <Wrapper>
        <SearchInput value="testing" />
      </Wrapper>
    )

    act(() => {
      fireEvent.click(screen.getByRole('button'))
    })

    expect(await screen.queryByDisplayValue('testing')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <SearchInput aria-label="Search" />
      </Wrapper>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
