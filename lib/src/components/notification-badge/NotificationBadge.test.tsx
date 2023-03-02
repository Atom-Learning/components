import { Controls } from '@atom-learning/icons'
import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { Tooltip } from '../tooltip'
import { NotificationBadge } from '.'

const Wrapper = ({ children }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
)

describe('NotificationBadge component', () => {
  it('renders a NotificationBadge', async () => {
    const { container } = render(
      <Wrapper>
        <NotificationBadge value={3}>
          <ActionIcon appearance="outline" label="testing" size="lg" isRounded>
            <Icon is={Controls} />
          </ActionIcon>
        </NotificationBadge>
      </Wrapper>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <NotificationBadge value={3}>
          <ActionIcon appearance="outline" label="testing" size="lg" isRounded>
            <Icon is={Controls} />
          </ActionIcon>
        </NotificationBadge>
      </Wrapper>
    )

    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })

  it('value is rendered in component', async () => {
    render(
      <Wrapper>
        <NotificationBadge value={3}>
          <ActionIcon appearance="outline" label="testing" size="lg" isRounded>
            <Icon is={Controls} />
          </ActionIcon>
        </NotificationBadge>
      </Wrapper>
    )

    const badge = await screen.findByText('3')

    expect(badge).toBeVisible()
  })
})
