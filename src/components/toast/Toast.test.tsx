import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Toast, toast } from '.'

describe('Toast component', () => {
  it.skip('renders', async () => {
    const message = 'Message'
    const { container } = render(<Toast />)

    expect(await screen.findByText(message)).not.toBeVisible()
    toast(message)

    expect(await screen.getByText(message)).toBeVisible()

    // expect(container).toMatchSnapshot()
  })

  it.skip('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Toast />)

    expect(await axe(container)).toHaveNoViolations()
  })
  it.todo('closes the toast when closebutton is clicked')
})
