import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import { IdProvider } from '@radix-ui/react-id'

import { Tabs } from '.'
import { TabContent } from './TabContent'
import { TabTrigger } from './TabTrigger'
import { TabTriggerList } from './TabTriggerList'

const TabsTest = ({ defaultValue = 'tab1' }) => (
  <IdProvider>
    <Tabs defaultValue={defaultValue}>
      <TabTriggerList>
        <TabTrigger value="tab1">Trigger 1</TabTrigger>
        <TabTrigger value="tab2">Trigger 2</TabTrigger>
      </TabTriggerList>
      <TabContent value="tab1">Important content for tab 1</TabContent>
      <TabContent value="tab2">Important content for tab 2</TabContent>
    </Tabs>
  </IdProvider>
)

describe('Tabs component', () => {
  it('renders', async () => {
    const { container } = render(<TabsTest />)

    expect(container).toMatchSnapshot()
  })

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

  it.only('allows the user to switch tabs', async () => {
    render(<TabsTest />)

    const tab1content = await screen.findByText('Important content for tab 1')
    const tab2content = await screen.findByText('Important content for tab 2')
    expect(tab1content).toBeVisible()
    fireEvent.click(screen.queryByText('Trigger 2'))
    screen.debug
    await waitFor(() =>
      expect(screen.queryByText('Important content for tab 2')).toBeVisible()
    )
  })
})
