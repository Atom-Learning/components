import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { axe } from 'jest-axe'

import { FilterTabs } from './'

const filters = ['tab1', 'tab2', 'tab3']

describe('FilterTabs component', () => {
  it('renders', async () => {
    const { container } = await render(
      <FilterTabs filters={filters} value="tab1" onValueChange={() => null} />
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <FilterTabs filters={filters} value="tab1" onValueChange={() => null} />
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('changes tab when items are clicked on', async () => {
    let currentTab = 'tab1'

    render(
      <FilterTabs
        filters={filters}
        value="tab1"
        onValueChange={(value) => (currentTab = value)}
      />
    )

    const tab2 = await screen.findByText('tab2')
    fireEvent.click(tab2)

    expect(currentTab).toBe('tab2')
  })

  it("doesn't allow clicking on disabled items", async () => {
    let currentTab = 'tab1'

    render(
      <FilterTabs
        filters={filters}
        value="tab1"
        onValueChange={(value) => (currentTab = value)}
        disabled
      />
    )

    const tab2 = await screen.findByText('tab2')
    fireEvent.click(tab2)

    expect(currentTab).toBe('tab1')
  })
})
