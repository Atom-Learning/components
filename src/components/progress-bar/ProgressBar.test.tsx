import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { ProgressBar } from '.'

describe.skip(`ProgressBar component`, () => {
  it('renders a progress bar', async () => {
    const { container } = render(<ProgressBar percentage={50} />)

    await screen.getByRole('progressbar')
    // TODO: assess width

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
