import { render } from '@testing-library/react'
import * as React from 'react'

import { OptionalVisuallyHiddenWrapper } from '.'

const OptionalVisuallyHiddenWrapperImplementation = (props) => {
  return (
    <OptionalVisuallyHiddenWrapper {...props}>
      <p>hello</p>
    </OptionalVisuallyHiddenWrapper>
  )
}

describe('OptionalVisuallyHidden component', () => {
  it('renders hidden content', async () => {
    const { container } = render(
      <OptionalVisuallyHiddenWrapperImplementation hidden />
    )

    expect(container).toMatchSnapshot()
  })

  it('renders visible content', async () => {
    const { container } = render(
      <OptionalVisuallyHiddenWrapperImplementation />
    )

    expect(container).toMatchSnapshot()
  })
})
