import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { ProgressBar } from '.'

describe(`ProgressBar component`, () => {
  it('renders a progress bar using default props', async () => {
    const { container } = render(<ProgressBar value={50} aria-label="label" />)

    await screen.getByRole('progressbar')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a secondary progress bar', async () => {
    const { container } = render(
      <ProgressBar value={50} theme="secondary" aria-label="label" />
    )

    await screen.getByRole('progressbar')

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a solid progress bar', async () => {
    const { container } = render(
      <ProgressBar value={50} appearance="solid" aria-label="label" />
    )

    await screen.getByRole('progressbar')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
