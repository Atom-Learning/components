import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'
import { IdProvider } from '@radix-ui/react-id'

import { Tabs } from '.'

const TabsTest = ({ defaultValue = 'tab1' }) => (
  <IdProvider>
    <Tabs defaultValue={defaultValue}>
      <Tabs.TriggerList>
        <Tabs.Trigger value="tab1">Trigger 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Trigger 2</Tabs.Trigger>
      </Tabs.TriggerList>
      <Tabs.Content value="tab1">Important content for tab 1</Tabs.Content>
      <Tabs.Content value="tab2">Important content for tab 2</Tabs.Content>
    </Tabs>
  </IdProvider>
)

describe('Tabs component', () => {
  /*
  Commenting out the following test because Tabs uses @radix-ui/react-id 0.0.6, while every other component uses 0.0.5.
  Updating the other @radix-ui components to their latests versions in order to fix this issue raises a different problem,
  where 3 other components throw type errors when trying to implement <Trigger as={Slot}/>, due to a regression
  on @radix-ui's side.

  TODO: After https://github.com/radix-ui/primitives/issues/736 is fixed, uncomment the snapshot test
  */

  // it('renders', async () => {
  //   const { container } = render(<TabsTest />)

  //   expect(container).toMatchSnapshot()
  // })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<TabsTest />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('it makes the correct tab content visible, based on the `defaultValue` prop', async () => {
    render(<TabsTest defaultValue="tab2" />)
    const tab1content = await screen.findByText('Important content for tab 1')
    const tab2content = await screen.findByText('Important content for tab 2')

    expect(tab1content).not.toBeVisible()
    expect(tab2content).toBeVisible()
  })

  it('allows the user to switch tabs', async () => {
    render(<TabsTest />)

    const tab1content = await screen.findByText('Important content for tab 1')
    const tab2content = await screen.findByText('Important content for tab 2')

    expect(tab1content).toBeVisible()
    expect(tab2content).not.toBeVisible()

    userEvent.click(screen.getByText('Trigger 2'))

    expect(tab2content).toBeVisible()
    expect(tab1content).not.toBeVisible()
  })

  it("doesn't allow clicking disabled tabs", async () => {
    render(
      <IdProvider>
        <Tabs defaultValue={'tab1'}>
          <Tabs.TriggerList>
            <Tabs.Trigger value="tab1">Trigger 1</Tabs.Trigger>
            <Tabs.Trigger disabled value="tab2">
              Trigger 2
            </Tabs.Trigger>
          </Tabs.TriggerList>
          <Tabs.Content value="tab1">Important content for tab 1</Tabs.Content>
          <Tabs.Content value="tab2">Important content for tab 2</Tabs.Content>
        </Tabs>
      </IdProvider>
    )

    const tab1content = await screen.findByText('Important content for tab 1')
    const tab2content = await screen.findByText('Important content for tab 2')

    expect(tab1content).toBeVisible()

    userEvent.click(screen.getByText('Trigger 2'))

    expect(tab1content).toBeVisible()
    expect(tab2content).not.toBeVisible()
  })
})
