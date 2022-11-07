import { fireEvent, render } from '@testing-library/react'
import { BatteryMedium } from '@atom-learning/icons'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Avatar } from '.'
import { Icon } from '../icon'

describe('Avatar component', () => {
  it('renders an image avatar', async () => {
    const { container } = render(
      <Avatar name="a name">
        <Avatar.Image src="path-to-image" />
      </Avatar>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    let view = render(
      <Avatar name="a name">
        <Avatar.Image src="path-to-image" />
      </Avatar>
    )
    expect(await axe(view.container)).toHaveNoViolations()

    view = render(
      <Avatar name="a name">
        <Avatar.Initial />
      </Avatar>
    )
    expect(await axe(view.container)).toHaveNoViolations()

    view = render(
      <Avatar name="a name">
        <Avatar.Placeholder />
      </Avatar>
    )
    expect(await axe(view.container)).toHaveNoViolations()

    view = render(
      <Avatar name="a name">
        <Avatar.Icon is={BatteryMedium} />
      </Avatar>
    )
    expect(await axe(view.container)).toHaveNoViolations()
  })

  it('renders the initial of the name when the src of the image is not available and a name was provided', async () => {
    const { container } = render(
      <Avatar name="Bob">
        <Avatar.Image src="" />
      </Avatar>
    )

    expect(container).toMatchSnapshot()
  })

  it('renders an xs size with the fallback icon when src and name are missing', async () => {
    const { container } = render(
      <Avatar size="xs">
        <Avatar.Image src="" />
      </Avatar>
    )

    expect(container).toMatchSnapshot()
  })

  it('renders an inital avatar', async () => {
    const { container } = render(
      <Avatar size="xs" name="Alice">
        <Avatar.Initial />
      </Avatar>
    )

    expect(container).toMatchSnapshot()
  })

  it('renders a fallback icon instead of an initial if name is missing', () => {
    const { container } = render(
      <Avatar name="">
        <Avatar.Initial />
      </Avatar>
    )

    expect(container).toMatchSnapshot()
  })

  it('renders an icon avatar', () => {
    const { container } = render(
      <Avatar>
        <Avatar.Icon is={BatteryMedium} />
      </Avatar>
    )

    expect(container).toMatchSnapshot()
  })

  it('calls the onClick function passed when clicked', () => {
    const onClick = jest.fn()
    const { container } = render(
      <Avatar onClick={onClick}>
        <Avatar.Icon is={BatteryMedium} />
      </Avatar>
    )
    fireEvent.click(container.firstChild as ChildNode)

    expect(onClick).toHaveBeenCalled()
  })

  it('does not call the onClick function passed when click if disabled', () => {
    const onClick = jest.fn()
    const { container } = render(
      <Avatar disabled onClick={onClick}>
        <Avatar.Icon is={BatteryMedium} />
      </Avatar>
    )
    fireEvent.click(container.firstChild as ChildNode)

    expect(onClick).not.toHaveBeenCalled()
  })
})
