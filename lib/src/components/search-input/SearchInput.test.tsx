import { act, fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tooltip } from '../tooltip'
import { SearchInput } from '.'

/** Uses the `ActionIcon` that renders a tooltip so it needs a `Tooltip.Provider`.
 * In practice, `Tooltip.Provider` is rendered once at the root of an app,
 * but this wrapper provides it for these tests.
 */
const Wrapper: React.FC = ({ children }) => (
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

  it('renders clear button', async () => {
    const { container } = render(
      <Wrapper>
        <SearchInput value="testing" />
      </Wrapper>
    )

    expect(container).toMatchSnapshot()
  })

  it('calls onChange with user input', async () => {
    const mockOnChange = jest.fn()

    render(
      <Wrapper>
        <SearchInput placeholder="Search" onChange={mockOnChange} />
      </Wrapper>
    )

    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: '1' } })

    expect(mockOnChange.mock.calls.length).toBe(1)
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

    expect(await screen.queryByText('testing')).not.toBeInTheDocument()
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
