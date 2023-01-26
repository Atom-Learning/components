import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tooltip } from '../tooltip'
import { DateInput } from '.'

/** `DateInput` uses `ActionIcon`s that renders a tooltip so it needs a `Tooltip.Provider`.
 * In practice, `Tooltip.Provider` is rendered once at the root of an app,
 * but this wrapper provides it for these tests.
 */
const Wrapper: React.FC = ({ children }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
)

describe('DateInput component', () => {
  it('renders', async () => {
    const { container } = render(
      <Wrapper>
        <DateInput aria-label="test" />
      </Wrapper>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <DateInput aria-label="test" />
      </Wrapper>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('opens date picker when clicked', async () => {
    render(
      <Wrapper>
        <DateInput aria-label="test" />
      </Wrapper>
    )

    const button = await screen.findByRole('button')
    fireEvent.click(button)

    expect(await screen.findByRole('dialog')).toBeVisible()
  })

  it('allows an external change handler to be passed to the component', async () => {
    const changeSpy = jest.fn()
    render(
      <Wrapper>
        <DateInput aria-label="test" onChange={changeSpy} />
      </Wrapper>
    )

    const button = await screen.findByRole('button')
    fireEvent.click(button)

    expect(await screen.findByRole('dialog')).toBeVisible()
    fireEvent.click(screen.getByText('15'))
    await waitFor(() => expect(changeSpy).toHaveBeenCalled())
  })
})
