import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import { CheckList, CalendarEvent } from '@atom-learning/icons'

import { Text } from '../text'
import { Section, SectionItem } from './'

const Component = () => (
  <Section heading="Section Heading">
    <Section.Content>
      <Text>Section Content</Text>
    </Section.Content>
  </Section>
)

describe(`Section component`, () => {
  it('renders', async () => {
    const { container } = render(<Component />)
    await screen.findByText('Section Heading')
    await screen.findByText('Section Content')
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Component />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with SectionItem', async () => {
    const { container } = render(
      <Section heading="Section Heading">
        <Section.Content>
          <SectionItem
            iconBackground="$primaryDark"
            status={{ text: 'Today', theme: 'danger', icon: CalendarEvent }}
            onClick={() => console.log('click')}
          >
            <SectionItem.Icon
              is={CheckList}
              size="md"
              css={{ color: 'white' }}
            />
            <SectionItem.Heading
              as="h4"
              css={{ fontFamily: '$body' }}
              size="sm"
            >
              A small heading
            </SectionItem.Heading>
            <SectionItem.SubHeading css={{ color: '$tonal300' }} size="sm">
              A small subheading
            </SectionItem.SubHeading>
          </SectionItem>
          <SectionItem
            iconBackground="$primaryDark"
            status={{ text: 'Today', theme: 'danger', icon: CalendarEvent }}
            to="/#/"
          >
            <SectionItem.Icon
              is={CheckList}
              size="md"
              css={{ color: 'white' }}
            />
            <SectionItem.Heading
              as="h4"
              css={{ fontFamily: '$body' }}
              size="sm"
            >
              A small heading
            </SectionItem.Heading>
            <SectionItem.SubHeading css={{ color: '$tonal300' }} size="sm">
              A small subheading
            </SectionItem.SubHeading>
          </SectionItem>
          <SectionItem iconBackground="$primaryDark">
            <SectionItem.Heading
              as="h4"
              css={{ fontFamily: '$body' }}
              size="sm"
            >
              A small heading
            </SectionItem.Heading>
            <SectionItem.SubHeading css={{ color: '$tonal300' }} size="sm">
              A small subheading
            </SectionItem.SubHeading>
          </SectionItem>
        </Section.Content>
      </Section>
    )

    expect(await axe(container)).toHaveNoViolations()
    expect(container).toMatchSnapshot()
  })
})
