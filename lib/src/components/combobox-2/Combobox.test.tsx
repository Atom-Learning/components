import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Combobox } from '.'

const SimpleExample = () => (
  <Combobox openOnFocus aria-label="Favourite fruit">
    <Combobox.Input id="fruit" />
    <Combobox.Popover>
      <Combobox.List>
        <Combobox.Option value="Apple" />
        <Combobox.Option value="Banana" />
        <Combobox.Option value="Cranberry" />
        <Combobox.Option value="Dragon fruit" />
      </Combobox.List>
    </Combobox.Popover>
  </Combobox>
)

describe('Combobox component', () => {
  it('renders', async () => {
    const { container } = render(<SimpleExample />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<SimpleExample />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('receives value from list on selection', async () => {
    render(<SimpleExample />)

    const combobox = screen.getByRole('combobox')

    fireEvent.focus(combobox)
    fireEvent.click(screen.getByText('Apple'))

    expect(combobox).toHaveValue('Apple')
  })

  it('renders with lg size', async () => {
    const { container } = render(
      <Combobox openOnFocus aria-label="Favourite fruit">
        <Combobox.Input id="fruit" size="lg" />
        <Combobox.Popover>
          <Combobox.List>
            <Combobox.Option value="Apple" />
          </Combobox.List>
        </Combobox.Popover>
      </Combobox>
    )

    expect(container).toMatchSnapshot()
  })
})
