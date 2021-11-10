import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import { IdProvider } from '@radix-ui/react-id'

import { Accordion } from '.'

describe('Accordion component', () => {
  it('renders an accordion', async () => {
    const { container } = render(
      <IdProvider>
        <Accordion defaultValue="1">
          <Accordion.Item value="1">
            <Accordion.Trigger>TRIGGER1</Accordion.Trigger>
            <Accordion.Content>CONTENT1</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Trigger>TRIGGER2</Accordion.Trigger>
            <Accordion.Content>CONTENT2</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </IdProvider>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <IdProvider>
        <Accordion defaultValue="1">
          <Accordion.Item value="1">
            <Accordion.Trigger>TRIGGER1</Accordion.Trigger>
            <Accordion.Content>CONTENT1</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Trigger>TRIGGER2</Accordion.Trigger>
            <Accordion.Content>CONTENT2</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </IdProvider>
    )

    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })

  it('clicking a closed item header makes that item open', async () => {
    render(
      <IdProvider>
        <Accordion defaultValue="2">
          <Accordion.Item value="1">
            <Accordion.Trigger>TRIGGER1</Accordion.Trigger>
            <Accordion.Content>CONTENT1</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Trigger>TRIGGER2</Accordion.Trigger>
            <Accordion.Content>CONTENT2</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </IdProvider>
    )

    const header1 = await screen.findByText('TRIGGER1')
    fireEvent.click(header1)
    expect(await screen.findByText('CONTENT1')).toBeVisible()
    expect(await screen.queryByText('CONTENT2')).not.toBeInTheDocument()
  })
})
