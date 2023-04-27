import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { SectionMessage } from '.'

it('renders SectionMessage component and has no programmatically detectable a11y issues', async () => {
  const { container } = render(
    <SectionMessage theme="error">
      <SectionMessage.Icon />
      <SectionMessage.Content>
        <SectionMessage.Title>Title message</SectionMessage.Title>
        <SectionMessage.Description>
          This is the description
        </SectionMessage.Description>
      </SectionMessage.Content>
      <SectionMessage.Dismiss />
    </SectionMessage>
  )

  expect(container).toMatchSnapshot()
  expect(await axe(container)).toHaveNoViolations()
})
