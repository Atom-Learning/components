import { fireEvent, render } from '@testing-library/react'
import { BatteryMedium } from '@atom-learning/icons'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Avatar } from '.'
import { Icon } from '../icon'

describe('Avatar component', () => {
  it('renders', async () => {
    const { container } = render(<Avatar name="a name" src="path-to-image" />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Avatar name="a name" src="path-to-image" />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders an xs size with a fallback instead of an image', async () => {
    const { container } = render(<Avatar size="xs" />)

    expect(container).toMatchSnapshot()
  })

  it('renders an icon instead of an image', () => {
    const { container } = render(
      <Avatar>
        <Icon is={BatteryMedium} css={{ color: '$tonal400' }} />
      </Avatar>
    )

    expect(container).toMatchSnapshot()
  })

  it('calls the onClick function passed when clicked', () => {
    const onClick = jest.fn()
    const { container } = render(<Avatar onClick={onClick} />)
    fireEvent.click(container.firstChild as ChildNode)

    expect(onClick).toHaveBeenCalled()
  })

  it('does not call the onClick function passed when click if disabled', () => {
    const onClick = jest.fn()
    const { container } = render(<Avatar disabled onClick={onClick} />)
    fireEvent.click(container.firstChild as ChildNode)

    expect(onClick).not.toHaveBeenCalled()
  })
})
