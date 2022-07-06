import { IdProvider } from '@radix-ui/react-id'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

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

const MobileTabsTest = ({ defaultValue = 'tab1' }) => (
  <IdProvider>
    <Tabs defaultValue={defaultValue}>
      <Tabs.TriggerList enableTabScrolling>
        <Tabs.Trigger value="tab1">
          Trigger 1 which is going to be long
        </Tabs.Trigger>
        <Tabs.Trigger value="tab2">
          Trigger 2 which is going to be even longer
        </Tabs.Trigger>
      </Tabs.TriggerList>
      <Tabs.Content value="tab1">Important content for tab 1</Tabs.Content>
      <Tabs.Content value="tab2">Important content for tab 2</Tabs.Content>
    </Tabs>
  </IdProvider>
)

describe('Tabs component', () => {
  it('renders', async () => {
    const { container } = render(<TabsTest />)

    expect(container).toMatchSnapshot()
  })

  it('renders mobile view', async () => {
    const { container } = render(<MobileTabsTest />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<TabsTest />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('it makes the correct tab content visible, based on the `defaultValue` prop', async () => {
    render(<TabsTest defaultValue="tab2" />)
    const tab1content = await screen.queryByText('Important content for tab 1')
    const tab2content = await screen.queryByText('Important content for tab 2')

    expect(tab1content).not.toBeInTheDocument()
    expect(tab2content).toBeVisible()
  })

  it('allows the user to switch tabs', async () => {
    render(<TabsTest />)

    let tab1content = await screen.queryByText('Important content for tab 1')
    let tab2content = await screen.queryByText('Important content for tab 2')

    expect(tab1content).toBeVisible()
    expect(tab2content).not.toBeInTheDocument()

    await userEvent.click(screen.getByText('Trigger 2'))

    tab1content = await screen.queryByText('Important content for tab 1')
    tab2content = await screen.findByText('Important content for tab 2')

    expect(tab2content).toBeVisible()
    expect(tab1content).not.toBeInTheDocument()
  })

  it("doesn't allow clicking disabled tabs", async () => {
    render(
      <IdProvider>
        <Tabs defaultValue="tab1">
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

    const tab1content = await screen.queryByText('Important content for tab 1')
    const tab2content = await screen.queryByText('Important content for tab 2')

    expect(tab1content).toBeVisible()

    await userEvent.click(screen.queryByText('Trigger 2'))

    expect(tab1content).toBeVisible()
    expect(tab2content).not.toBeInTheDocument()
  })
})
