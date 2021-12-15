import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { axe } from 'jest-axe'

import { FilterTabs } from './'

const props = {
  filters: ['tab1', 'tab2', 'tab3'],
  value: 'tab1',
  onValueChange: jest.fn()
}

describe('FilterTabs component', () => {
  it('renders', async () => {
    const { container } = await render(<FilterTabs {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<FilterTabs {...props} />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('changes tab when items are clicked on', async () => {
    let currentTab = 'tab1'

    render(
      <FilterTabs {...props} onValueChange={(value) => (currentTab = value)} />
    )

    const tab2 = await screen.findByText('tab2')
    fireEvent.click(tab2)

    expect(currentTab).toBe('tab2')
  })

  it("doesn't allow clicking on disabled items", async () => {
    let currentTab = 'tab1'

    render(
      <FilterTabs
        {...props}
        onValueChange={(value) => (currentTab = value)}
        disabled
      />
    )

    const tab2 = await screen.findByText('tab2')
    fireEvent.click(tab2)

    expect(currentTab).toBe('tab1')
  })
})
