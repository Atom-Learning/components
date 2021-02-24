import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

// import { ResizeObserver } from '../../mocks/ResizeOberserver'
import { Tooltip } from '.'

describe(`Tooltip component`, () => {
  it('renders a tooltip', async () => {
    const { container } = render(<Tooltip content="CONTENT">TOOLTIP</Tooltip>)

    fireEvent.mouseOver(screen.getByText('TOOLTIP'))

    expect(await screen.findByText('CONTENT')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
