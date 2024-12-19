import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { BannerRegular } from './'

const BannerRegularImplementation = ({
  children,
  ...props
}: React.ComponentProps<typeof BannerRegular>) => (
  <BannerRegular {...props}>
    <BannerRegular.Content>
      <BannerRegular.Heading>
        Get ready for entrance exams
      </BannerRegular.Heading>
      <BannerRegular.Text>
        Talk to our admissions experts on to learn how to support your child.
        This is an example lor!
      </BannerRegular.Text>
      <BannerRegular.Actions>
        <BannerRegular.Button>Contact an expert</BannerRegular.Button>
        <BannerRegular.Button>Secondary</BannerRegular.Button>
      </BannerRegular.Actions>
    </BannerRegular.Content>
    <BannerRegular.Image alt="kitten" src="http://placekitten.com/200/300" />
    {children}
  </BannerRegular>
)

const BannerRegularDismissibleImplementation = (
  props: React.ComponentProps<typeof BannerRegular>
) => (
  <BannerRegularImplementation {...props}>
    <BannerRegular.Dismiss data-testid="dismiss" label="dismiss banner" />
  </BannerRegularImplementation>
)

describe(`BannerRegular component`, () => {
  it('renders', () => {
    const { container } = render(
      <BannerRegularImplementation
        colorScheme={{ base: 'purple1' }}
        emphasis="bold"
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders dismissible variant', async () => {
    const onDismiss = jest.fn()
    const { container } = render(
      <BannerRegularDismissibleImplementation
        colorScheme={{ base: 'purple1' }}
        emphasis="bold"
        onDismiss={onDismiss}
      />
    )
    expect(container).toMatchSnapshot()

    const dismissTrigger = screen.getByTestId('dismiss')
    if (dismissTrigger) await userEvent.click(dismissTrigger)

    expect(onDismiss).toHaveBeenCalled()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(
      <BannerRegularDismissibleImplementation
        colorScheme={{ base: 'purple1' }}
        emphasis="bold"
        size="sm"
        onDismiss={jest.fn()}
      />
    )

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
