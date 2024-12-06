import * as React from 'react'
import { SegmentedControl } from './SegmentedControl'
import { Alarm, Anchor } from '@atom-learning/icons'
import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'

const SegmentedControlComponent = ({
  children,
  ...props
}: React.PropsWithChildren<
  React.ComponentProps<typeof SegmentedControl.Root>
>) => {
  return (
    <SegmentedControl.Root
      size="sm"
      defaultValue="one"
      theme="marsh"
      {...props}
    >
      <SegmentedControl.Item value="one">
        <SegmentedControl.Icon is={Alarm} />
        <SegmentedControl.Heading>Heading One</SegmentedControl.Heading>
        <SegmentedControl.Description>
          Description One
        </SegmentedControl.Description>
        <SegmentedControl.Badge>Status One</SegmentedControl.Badge>
      </SegmentedControl.Item>
      <SegmentedControl.Item value="two">
        <SegmentedControl.Icon is={Anchor} />
        <SegmentedControl.Heading>Heading Two</SegmentedControl.Heading>
        <SegmentedControl.Description>
          Description Two
        </SegmentedControl.Description>
        <SegmentedControl.Badge>Status Two</SegmentedControl.Badge>
      </SegmentedControl.Item>
      <SegmentedControl.Content value="one">
        Content One
      </SegmentedControl.Content>
      <SegmentedControl.Content value="two">
        Content One
      </SegmentedControl.Content>
    </SegmentedControl.Root>
  )
}

describe('SegmentedControl component', () => {
  it('renders', async () => {
    const { container } = render(<SegmentedControlComponent />)

    expect(screen.getByRole('heading', { name: 'Heading One' })).toBeVisible()
    expect(screen.getByText('Description One')).toBeVisible()
    expect(screen.getByText('Status One')).toBeVisible()

    expect(screen.getByRole('heading', { name: 'Heading Two' })).toBeVisible()
    expect(screen.getByText('Description Two')).toBeVisible()
    expect(screen.getByText('Status Two')).toBeVisible()

    expect(screen.getByText('Content One')).toBeVisible()
    await expect(
      waitFor(() => screen.getByText('Content Two'))
    ).rejects.toThrow()

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<SegmentedControlComponent />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders md variant with primary theme', () => {
    const { container } = render(
      <SegmentedControlComponent size="md" theme="primary" />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders lg variant with marsh theme', () => {
    const { container } = render(
      <SegmentedControlComponent size="lg" theme="marsh" />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders with a default tab selected', () => {
    render(<SegmentedControlComponent defaultValue="two" />)

    const tabOne = screen.getByRole('tab', { name: /Heading One/ })
    const tabTwo = screen.getByRole('tab', { name: /Heading Two/ })

    expect(tabOne).toHaveAttribute('aria-selected', 'false')
    expect(tabTwo).toHaveAttribute('aria-selected', 'true')
  })

  it('allows switching between tabs', async () => {
    render(<SegmentedControlComponent />)

    const tabOne = screen.getByRole('tab', { name: /Heading One/ })
    const tabTwo = screen.getByRole('tab', { name: /Heading Two/ })

    expect(tabOne).toHaveAttribute('aria-selected', 'true')
    expect(tabTwo).toHaveAttribute('aria-selected', 'false')

    await userEvent.click(tabTwo)

    expect(tabOne).toHaveAttribute('aria-selected', 'false')
    expect(tabTwo).toHaveAttribute('aria-selected', 'true')

    await userEvent.click(tabOne)

    expect(tabOne).toHaveAttribute('aria-selected', 'true')
    expect(tabTwo).toHaveAttribute('aria-selected', 'false')
  })

  it('does not allow clicking on disabled tab', async () => {
    render(
      <SegmentedControl.Root size="sm" defaultValue="one" theme="marsh">
        <SegmentedControl.Item value="one">
          <SegmentedControl.Heading>Heading One</SegmentedControl.Heading>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="two" disabled>
          <SegmentedControl.Heading>Heading Two</SegmentedControl.Heading>
        </SegmentedControl.Item>
        <SegmentedControl.Content value="one">
          Content One
        </SegmentedControl.Content>
        <SegmentedControl.Content value="two">
          Content One
        </SegmentedControl.Content>
      </SegmentedControl.Root>
    )

    const tabOne = screen.getByRole('tab', { name: 'Heading One' })
    const tabTwo = screen.getByRole('tab', { name: 'Heading Two' })

    expect(tabOne).toBeEnabled()
    expect(tabTwo).toBeDisabled()

    expect(tabOne).toHaveAttribute('aria-selected', 'true')
    expect(tabTwo).toHaveAttribute('aria-selected', 'false')

    await userEvent.click(tabTwo)

    expect(tabOne).toHaveAttribute('aria-selected', 'true')
    expect(tabTwo).toHaveAttribute('aria-selected', 'false')
  })
})
