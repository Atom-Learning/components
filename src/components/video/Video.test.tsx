import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Video } from '.'

describe(`Video component`, () => {
  it('renders a video with default props', async () => {
    const { container } = render(<Video externalId="123123" />)

    await screen.getByRole('figure')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a video with light option enabled', async () => {
    const props = {
      externalId: '123432',
      lightPlayer: true,
      width: '50px',
      height: '50px'
    }
    const { container } = render(<Video {...props} />)

    await screen.getByRole('figure')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
