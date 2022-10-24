import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import userEvent from '@testing-library/user-event'
import { CheckList, CalendarEvent } from '@atom-learning/icons'

import { SectionItem } from './'

describe(`SectionItem component`, () => {
  it('renders with icon, heading, subheading, status as a link', async () => {
    const { container } = render(
      <SectionItem
        iconBackground="$primaryDark"
        status={{ text: 'Today', theme: 'danger', icon: CalendarEvent }}
        to="/#/"
      >
        <SectionItem.Icon is={CheckList} size="md" css={{ color: 'white' }} />
        <SectionItem.Heading as="h4" css={{ fontFamily: '$body' }} size="sm">
          A small heading
        </SectionItem.Heading>
        <SectionItem.SubHeading css={{ color: '$tonal300' }} size="sm">
          A small subheading
        </SectionItem.SubHeading>
      </SectionItem>
    )
    expect(await axe(container)).toHaveNoViolations()
    expect(container).toMatchSnapshot()

    const link = await screen.findByRole('link')
    expect(link).toHaveAttribute('href', '/#/')
  })

  it('renders with icon, heading, subheading, status as a button', async () => {
    const onClick = jest.fn()
    const { container } = render(
      <SectionItem
        iconBackground="$primaryDark"
        status={{ text: 'Today', theme: 'danger', icon: CalendarEvent }}
        onClick={onClick}
      >
        <SectionItem.Icon is={CheckList} size="md" css={{ color: 'white' }} />
        <SectionItem.Heading as="h4" css={{ fontFamily: '$body' }} size="sm">
          A small heading
        </SectionItem.Heading>
        <SectionItem.SubHeading css={{ color: '$tonal300' }} size="sm">
          A small subheading
        </SectionItem.SubHeading>
      </SectionItem>
    )
    expect(await axe(container)).toHaveNoViolations()
    expect(container).toMatchSnapshot()

    const button = await screen.findByRole('button')
    userEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('renders with icon, heading, subheading, status but without a click handler', async () => {
    const { container } = render(
      <SectionItem
        iconBackground="$primaryDark"
        status={{ text: 'Today', theme: 'danger', icon: CalendarEvent }}
      >
        <SectionItem.Icon is={CheckList} size="md" css={{ color: 'white' }} />
        <SectionItem.Heading as="h4" css={{ fontFamily: '$body' }} size="sm">
          A small heading
        </SectionItem.Heading>
        <SectionItem.SubHeading css={{ color: '$tonal300' }} size="sm">
          A small subheading
        </SectionItem.SubHeading>
      </SectionItem>
    )
    expect(await axe(container)).toHaveNoViolations()
    expect(container).toMatchSnapshot()
  })

  it('renders without icon and status', async () => {
    const { container } = render(
      <SectionItem iconBackground="$primaryDark">
        <SectionItem.Heading as="h4" css={{ fontFamily: '$body' }} size="sm">
          A small heading
        </SectionItem.Heading>
        <SectionItem.SubHeading css={{ color: '$tonal300' }} size="sm">
          A small subheading
        </SectionItem.SubHeading>
      </SectionItem>
    )
    expect(await axe(container)).toHaveNoViolations()
    expect(container).toMatchSnapshot()
  })
})
