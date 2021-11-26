import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { NotificationBadge } from '.'
import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { Controls } from '@atom-learning/icons'

describe('NotificationIcon component', () => {
  it('renders an accordion', async () => {
    const { container } = render(
      <NotificationBadge value={3}>
        <ActionIcon appearance="outline" label="testing" size="lg" isRounded>
          <Icon is={Controls} />
        </ActionIcon>
      </NotificationBadge>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <NotificationBadge value={3}>
        <ActionIcon appearance="outline" label="testing" size="lg" isRounded>
          <Icon is={Controls} />
        </ActionIcon>
      </NotificationBadge>
    )

    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })

  it('value is rendered in component', async () => {
    render(
      <NotificationBadge value={3}>
        <ActionIcon appearance="outline" label="testing" size="lg" isRounded>
          <Icon is={Controls} />
        </ActionIcon>
      </NotificationBadge>
    )

    const badge = await screen.findByText('3')

    expect(badge).toBeVisible()
  })
})
