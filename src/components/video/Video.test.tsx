import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Video } from '.'

describe(`Video component`, () => {
  it('renders a video with default ratio', async () => {
    const { container } = render(<Video externalId="1084537" />)

    await screen.getByRole('figure')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
  it('renders a video with custom ratio (4:3)', async () => {
    const { container } = render(<Video externalId="1084537" ratio={3 / 4} />)

    await screen.getByRole('figure')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
