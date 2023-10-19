import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { NavigationMenuVertical } from './NavigationMenuVertical'

const NavigationMenuVerticalImplementation = ({
  children
}: {
  children?: React.ReactElement
}) => {
  return (
    <NavigationMenuVertical defaultValue="trigger">
      <NavigationMenuVertical.Link active>Button</NavigationMenuVertical.Link>
      <NavigationMenuVertical.Link href="/somewhere">
        Relative Link
      </NavigationMenuVertical.Link>
      <NavigationMenuVertical.Link href="http://google.com">
        External Link
      </NavigationMenuVertical.Link>
      {children}
    </NavigationMenuVertical>
  )
}

const mockOnOpenChange = jest.fn((_value) => null)

describe('NavigationMenuVertical', () => {
  it('renders', async () => {
    render(<NavigationMenuVerticalImplementation />)

    const navigation = await screen.findByRole('navigation')
    await screen.findByRole('link', { name: 'Relative Link' })
    await screen.findByRole('link', { name: 'External Link' })
    await screen.findByRole('button', { name: 'Button' })

    expect(navigation).toMatchSnapshot()
  })

  it('renders accordion and interacts correctly', async () => {
    const { container } = render(
      <NavigationMenuVerticalImplementation>
        <NavigationMenuVertical.Accordion
          onOpenChange={mockOnOpenChange}
          defaultOpen
        >
          <NavigationMenuVertical.AccordionTrigger data-testid="accordion-trigger">
            Accordion Trigger
          </NavigationMenuVertical.AccordionTrigger>
          <NavigationMenuVertical.AccordionContent data-testid="accordion-content">
            Accordion Content
          </NavigationMenuVertical.AccordionContent>
        </NavigationMenuVertical.Accordion>
      </NavigationMenuVerticalImplementation>
    )

    expect(container).toMatchSnapshot()

    const accordionTrigger = await screen.findByRole('button', {
      name: 'Accordion Trigger'
    })
    expect(accordionTrigger).toHaveAttribute('data-state', 'open')
    const accordionContent = screen.getByTestId('accordion-content')
    expect(accordionContent).toBeVisible()

    userEvent.click(accordionTrigger)

    expect(mockOnOpenChange).toBeCalledWith(false)
    expect(accordionTrigger).toHaveAttribute('data-state', 'closed')
    expect(accordionContent).not.toBeVisible()
  })
})
