import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { CheckboxGroup } from '.'

const CheckboxGroupImplementation = (props) => {
  return (
    <CheckboxGroup {...props}>
      <CheckboxGroup.AllItem title="top level all item" />
      <CheckboxGroup.Item value={1} />
      <CheckboxGroup.Item value={2} />

      <CheckboxGroup.Sub>
        <CheckboxGroup.AllItem title="all but nested" />
        <CheckboxGroup.Item value="1 nested" />
        <CheckboxGroup.Item value="2 nested" />
      </CheckboxGroup.Sub>
    </CheckboxGroup>
  )
}

const mockOnCheckedChange = jest.fn()

describe(`CheckboxGroup component`, () => {
  it('renders a checkbox', async () => {
    const { container } = render(<CheckboxGroupImplementation />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<CheckboxGroupImplementation />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('respects defaultChecked', async () => {
    render(<CheckboxGroupImplementation defaultChecked={[1, '2 nested']} />)
    const checkboxItem1 = screen.getByTitle('1')
    expect(checkboxItem1).toBeChecked()

    const checkboxItem2 = screen.getByTitle('2')
    expect(checkboxItem2).not.toBeChecked()

    const checkboxItem2Nested = screen.getByTitle('2 nested')
    expect(checkboxItem2Nested).toBeChecked()
  })

  it('respects checked', async () => {
    render(<CheckboxGroupImplementation checked={[2, '1 nested']} />)
    const checkboxItem1 = screen.getByTitle('1')
    expect(checkboxItem1).not.toBeChecked()

    const checkboxItem2 = screen.getByTitle('2')
    expect(checkboxItem2).toBeChecked()

    const checkboxItem1Nested = screen.getByTitle('1 nested')
    expect(checkboxItem1Nested).toBeChecked()
  })

  it('calls onCheckedChange correctly when used uncontrolled', async () => {
    render(
      <CheckboxGroupImplementation
        defaultChecked={[1, '2 nested']}
        onCheckedChange={mockOnCheckedChange}
      />
    )
    screen.getByTitle(1).click()

    expect(mockOnCheckedChange).toHaveBeenCalledWith(['2 nested'])
  })

  it('calls onCheckedChange correctly when used controlled', async () => {
    render(
      <CheckboxGroupImplementation
        checked={[2, '1 nested']}
        onCheckedChange={mockOnCheckedChange}
      />
    )
    screen.getByTitle('1').click()

    expect(mockOnCheckedChange).toHaveBeenCalledWith([2, '1 nested', 1])
  })

  it('.AllItem components work as expected', async () => {
    render(<CheckboxGroupImplementation />)

    const checkboxAllItemTopLevel = screen.getByTitle('top level all item')
    const checkboxItem1 = screen.getByTitle('1')
    const checkboxItem2 = screen.getByTitle('2')
    const checkboxAllItemNested = screen.getByTitle('all but nested')
    const checkboxItem1Nested = screen.getByTitle('1 nested')
    const checkboxItem2Nested = screen.getByTitle('2 nested')

    const topLevelCheckboxes = [checkboxItem1, checkboxItem2]
    const nestedCheckboxes = [checkboxItem1Nested, checkboxItem2Nested]
    const allCheckboxes = [
      checkboxAllItemTopLevel,
      ...topLevelCheckboxes,
      checkboxAllItemNested,
      ...nestedCheckboxes
    ]

    expect(checkboxAllItemTopLevel).not.toBeChecked()

    expect(checkboxAllItemNested).not.toBeChecked()

    nestedCheckboxes.forEach(async (checkbox) =>
      expect(checkbox).not.toBeChecked()
    )

    nestedCheckboxes.forEach(
      async (checkbox) => await userEvent.click(checkbox)
    )

    await waitFor(() => expect(checkboxAllItemNested).toBeChecked())
    await waitFor(() => expect(checkboxAllItemTopLevel).toBePartiallyChecked())

    await userEvent.click(checkboxAllItemTopLevel)

    allCheckboxes.forEach((element) => expect(element).toBeChecked())

    await userEvent.click(checkboxAllItemTopLevel)

    allCheckboxes.forEach((element) => expect(element).not.toBeChecked())
  })
})
