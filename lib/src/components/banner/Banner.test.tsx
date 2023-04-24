import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { BannerRegular } from './'

const BannerRegularComponent: React.FC<
  React.ComponentProps<typeof BannerRegular>
> = (props) => (
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
    <BannerRegular.Image src="http://placekitten.com/200/300" />
  </BannerRegular>
)

const BannerRegularDismissibleComponent: React.FC<
  React.ComponentProps<typeof BannerRegular>
> = (props) => (
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
    <BannerRegular.Image src="http://placekitten.com/200/300" />
    <BannerRegular.Dismiss />
  </BannerRegular>
)

describe(`BannerRegular component`, () => {
  it('renders sm variant', () => {
    const { container } = render(
      <BannerRegularComponent
        colorScheme={{ base: 'purple1' }}
        emphasis="highContrast"
        size="sm"
      />
    )
    expect(container).toMatchSnapshot()

    const image = screen.queryByRole('img')
    expect(image).not.toBeInTheDocument()
  })

  it('renders dismissible sm variant', () => {
    const onDismiss = jest.fn()
    const { container } = render(
      <BannerRegularDismissibleComponent
        colorScheme={{ base: 'purple1' }}
        emphasis="highContrast"
        size="sm"
        dismissibleValue="dismissible-sm-variant"
        onDismiss={onDismiss}
      />
    )
    expect(container).toMatchSnapshot()

    const dismissButton = screen.getAllByRole('button')[0]
    userEvent.click(dismissButton)

    expect(onDismiss).toHaveBeenCalled()
  })

  it('renders md variant', () => {
    const { container } = render(
      <BannerRegularComponent
        colorScheme={{ base: 'blue1' }}
        emphasis="lowContrast"
        size="md"
      />
    )
    expect(container).toMatchSnapshot()

    const image = screen.queryByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('renders dismissible md variant', () => {
    const onDismiss = jest.fn()
    const { container } = render(
      <BannerRegularDismissibleComponent
        colorScheme={{ base: 'purple1' }}
        emphasis="highContrast"
        size="md"
        dismissibleValue="dismissible-sm-variant"
        onDismiss={onDismiss}
      />
    )
    expect(container).toMatchSnapshot()

    const dismissButton = screen.getAllByRole('button')[0]
    userEvent.click(dismissButton)

    expect(onDismiss).toHaveBeenCalled()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(
      <BannerRegularDismissibleComponent
        colorScheme={{ base: 'purple1' }}
        emphasis="highContrast"
        size="sm"
        dismissibleValue="dismissible-sm-variant"
        onDismiss={jest.fn()}
      />
    )

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
