import { fireEvent, render } from '@testing-library/react'
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
      <NavigationMenuVertical.Link href="google.com">
        Link
      </NavigationMenuVertical.Link>
      {children}
    </NavigationMenuVertical>
  )
}

const mockOnOpenChange = jest.fn((_value) => null)

describe('NavigationMenuVertical', () => {
  it('renders', async () => {
    const { findByRole } = render(<NavigationMenuVerticalImplementation />)

    const navigation = await findByRole('navigation')
    await findByRole('link', { name: 'Link' })
    await findByRole('button', { name: 'Button' })

    expect(navigation).toMatchSnapshot()
  })

  it('renders accordion and interacts correctly', async () => {
    const { findByRole, container, getByTestId } = render(
      <NavigationMenuVerticalImplementation>
        <NavigationMenuVertical.Accordion
          onOpenChange={mockOnOpenChange}
          defaultOpen={true}
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

    const accordionTrigger = await findByRole('button', {
      name: 'Accordion Trigger'
    })
    expect(accordionTrigger).toHaveAttribute('data-state', 'open')
    const accordionContent = getByTestId('accordion-content')
    expect(accordionContent).toBeVisible()

    fireEvent.click(accordionTrigger)

    expect(mockOnOpenChange).toBeCalledWith(false)
    expect(accordionTrigger).toHaveAttribute('data-state', 'closed')
    expect(accordionContent).not.toBeVisible()
  })
})
