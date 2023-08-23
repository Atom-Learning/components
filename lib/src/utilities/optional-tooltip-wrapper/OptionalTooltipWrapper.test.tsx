import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'

import { Tooltip } from '~/components/tooltip'

import { OptionalTooltipWrapper } from '.'

const OptionalTooltipWrapperImplementation = (props) => {
  return (
    <Tooltip.Provider>
      <OptionalTooltipWrapper
        label={<p>hello</p>}
        tooltipSide="right"
        {...props}
      >
        <p data-testid="tooltip-trigger">hello</p>
      </OptionalTooltipWrapper>
    </Tooltip.Provider>
  )
}

describe('OptionalTooltipWrapper component', () => {
  it('renders with tooltip', async () => {
    const { container } = render(
      <OptionalTooltipWrapperImplementation hasTooltip />
    )

    fireEvent.focus(screen.getByTestId('tooltip-trigger'))

    expect(container).toMatchSnapshot()
  })

  it('renders without tooltip', async () => {
    const { container } = render(<OptionalTooltipWrapperImplementation />)

    fireEvent.focus(screen.getByTestId('tooltip-trigger'))

    expect(container).toMatchSnapshot()
  })
})
