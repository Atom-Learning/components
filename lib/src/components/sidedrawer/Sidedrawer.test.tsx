import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import { Button } from '../button/Button'
import { TopBar } from '../top-bar/TopBar'
import { Sidedrawer } from './Sidedrawer'

interface TestingComponentProps {
  initialOpen?: boolean
  initialCount?: number
}

const TestingComponent: React.FC<TestingComponentProps> = ({
  initialCount = 0,
  initialOpen = true
}) => {
  const [isOpen, setIsOpen] = React.useState(initialOpen)
  const [count, setCount] = React.useState(initialCount)

  const increase = () => setCount(count + 1)
  const close = () => setIsOpen(false)

  return (
    <>
      <TopBar>
        <Button onClick={() => setIsOpen(true)}>Open Sidedrawer</Button>
      </TopBar>
      <Sidedrawer isOpen={isOpen} onClose={close}>
        <Sidedrawer.Header>
          Count is: {count}
          <Sidedrawer.Close onClose={close} />
        </Sidedrawer.Header>
        <Sidedrawer.Content>
          <Sidedrawer.Item href="/" active>
            Dashboard
          </Sidedrawer.Item>
          <Sidedrawer.Item onClick={increase}>Button Count</Sidedrawer.Item>
          <Sidedrawer.Item value="1">
            <Sidedrawer.AccordionTrigger>Set Work</Sidedrawer.AccordionTrigger>
            <Sidedrawer.AccordionContent>
              <Sidedrawer.Item href="/practice">Set Practice</Sidedrawer.Item>
              <Sidedrawer.Item href="/mock-tests">Mock Tests</Sidedrawer.Item>
              <Sidedrawer.Item onClick={increase}>
                Accordion Count
              </Sidedrawer.Item>
            </Sidedrawer.AccordionContent>
          </Sidedrawer.Item>
        </Sidedrawer.Content>
        <Sidedrawer.Footer>
          <Button
            fullWidth
            theme="danger"
            onClick={() => console.log('Legged out!')}
          >
            Log out
          </Button>
        </Sidedrawer.Footer>
        <Sidedrawer.Overlay />
      </Sidedrawer>
    </>
  )
}

describe('Sidedrawer', () => {
  it('renders', async () => {
    const { container } = render(<TestingComponent />)

    expect(container).toMatchSnapshot()
  })

  it('should render link item', async () => {
    const { findByRole } = render(<TestingComponent />)

    const dashboardLink = await findByRole('link', { name: 'Dashboard' })
    expect(dashboardLink).toHaveAttribute('href', '/')
  })

  it('should render button item', async () => {
    const { findByRole, findByText } = render(<TestingComponent />)

    const countButton = await findByRole('button', { name: 'Button Count' })
    expect(await findByText('Count is: 0'))

    fireEvent.click(countButton)

    expect(await findByText('Count is: 1'))
  })

  it('should render closed accordion item', async () => {
    const { findByRole } = render(<TestingComponent />)

    const accordtionTrigger = await findByRole('button', { name: 'Set Work' })
    expect(accordtionTrigger).toHaveAttribute('data-state', 'closed')
  })

  it('should expand an accordion by clicking on trigger and display proper accordion children', async () => {
    const { container, findByRole, queryByRole } = render(<TestingComponent />)

    expect(queryByRole('link', { name: 'Set Practice' })).toBeNull()
    const accordtionTrigger = await findByRole('button', { name: 'Set Work' })

    fireEvent.click(accordtionTrigger)

    const setPracticeLink = await findByRole('link', { name: 'Set Practice' })
    const increaseButton = await findByRole('button', {
      name: 'Accordion Count'
    })

    expect(setPracticeLink).toHaveAttribute('href', '/practice')
    expect(accordtionTrigger).toHaveAttribute('data-state', 'open')
    expect(container).toMatchSnapshot()
  })

  it('should close Sidedrawer by clicking "Close" icon', async () => {
    const { findByRole, findByLabelText, findByTestId, queryByTestId } = render(
      <TestingComponent />
    )
    const sidedrawer = await findByRole('navigation')
    const overlay = await findByTestId('sidedrawer_overlay')
    const closeIcon = await findByLabelText('close')

    expect(sidedrawer).toHaveAttribute('data-state', 'open')
    expect(overlay).toBeVisible()

    fireEvent.click(closeIcon)

    expect(sidedrawer).toHaveAttribute('data-state', 'closed')
    expect(queryByTestId('sidedrawer_overlay')).toBeNull()
  })

  it('should open Sidedrawer', async () => {
    const { findByRole, findByTestId, queryByTestId } = render(
      <TestingComponent initialOpen={false} />
    )
    const sidedrawer = await findByRole('navigation')
    const sidedrawerOpenBtn = await findByRole('button', {
      name: 'Open Sidedrawer'
    })

    expect(queryByTestId('sidedrawer_overlay')).toBeNull()
    expect(sidedrawer).toHaveAttribute('data-state', 'closed')

    fireEvent.click(sidedrawerOpenBtn)

    expect(sidedrawer).toHaveAttribute('data-state', 'open')
    const overlay = await findByTestId('sidedrawer_overlay')
    expect(overlay).toBeVisible()
  })
})
