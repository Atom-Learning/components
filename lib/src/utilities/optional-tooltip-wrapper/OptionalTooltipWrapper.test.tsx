import { render } from '@testing-library/react'
import * as React from 'react'

import { OptionalTooltipWrapper } from '.'
import { Tooltip } from '~/components/tooltip'

const OptionalTooltipWrapperImplementation = (props) => {
  return (
    <Tooltip.Provider>
      <OptionalTooltipWrapper
        label={<p>hello</p>}
        tooltipSide="right"
        {...props}
      >
        <p>hello</p>
      </OptionalTooltipWrapper>
    </Tooltip.Provider>
  )
}

describe('OptionalTooltipWrapper component', () => {
  it('renders with tooltip', async () => {
    const { container } = render(
      <OptionalTooltipWrapperImplementation hasTooltip />
    )

    expect(container).toMatchSnapshot()
  })

  it('renders without tooltip', async () => {
    const { container } = render(<OptionalTooltipWrapperImplementation />)

    expect(container).toMatchSnapshot()
  })
})
