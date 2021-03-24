import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Text } from '../'
import { Carousel } from '.'

describe('Carousel component', () => {
  it('renders', async () => {
    const { container } = render(
      <Carousel name="Example carousel" slideHeight={100} slideWidth={100}>
        {[0, 1, 2].map((num) => (
          <Carousel.Slide index={num} key={num}>
            <Text>Slide {num}</Text>
          </Carousel.Slide>
        ))}
      </Carousel>
    )

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
