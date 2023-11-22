import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { BannerSlim } from './'

const BannerSlimImplementation: React.FC<
  React.ComponentProps<typeof BannerSlim>
> = ({ children, ...props }) => (
  <BannerSlim value="" {...props}>
    <BannerSlim.Content>
      <BannerSlim.Image src="https://picsum.photos/400/400" alt="image" />
      <BannerSlim.Text>
        Link your Prime and Nucleus accounts to see all your information in one
        place.
      </BannerSlim.Text>
    </BannerSlim.Content>
    <BannerSlim.Actions>
      <BannerSlim.Button>Primary CTA</BannerSlim.Button>
      {children}
    </BannerSlim.Actions>
  </BannerSlim>
)

const BannerSlimDismissibleImplementation: React.FC<
  React.ComponentProps<typeof BannerSlim>
> = (props) => (
  <BannerSlimImplementation {...props}>
    <BannerSlim.Dismiss data-testid="dismiss" label="dismiss banner" />
  </BannerSlimImplementation>
)

describe(`BannerSlim component`, () => {
  it('renders', () => {
    const { container } = render(
      <BannerSlimImplementation
        colorScheme={{ base: 'purple1' }}
        emphasis="bold"
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders dismissible variant', () => {
    const onDismiss = jest.fn()
    const { container } = render(
      <BannerSlimDismissibleImplementation
        colorScheme={{ base: 'purple1' }}
        emphasis="bold"
        value="dismissible-sm-variant"
        onDismiss={onDismiss}
      />
    )
    expect(container).toMatchSnapshot()

    const dismissTrigger = screen.getByTestId('dismiss')
    if (dismissTrigger) userEvent.click(dismissTrigger)

    expect(onDismiss).toHaveBeenCalled()
  })

  it('renders sm variant', () => {
    const { container } = render(
      <BannerSlimImplementation
        colorScheme={{ base: 'purple1' }}
        size="sm"
        emphasis="bold"
        value="sm-variant"
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(
      <BannerSlimDismissibleImplementation
        colorScheme={{ base: 'purple1' }}
        emphasis="bold"
        size="sm"
        value="dismissible-sm-variant"
        onDismiss={jest.fn()}
      />
    )

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
