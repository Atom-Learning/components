import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Box, Flex, Image } from '../'
import { Carousel } from '.'

describe('Carousel component', () => {
  it('renders', async () => {
    const { container } = render(
      <Carousel
        slideWidth={200}
        slideHeight={300}
        type="overflow"
        numSlides={4}
      >
        <Flex css={{ flexDirection: 'column' }}>
          <Box css={{ position: 'relative' }}>
            <Carousel.Arrows />
            <Carousel.Slider aria-label="Example carousel" trayTag="div">
              {[0, 1, 2, 3].map((num) => (
                <Carousel.Slide
                  key={num}
                  index={num}
                  aria-label={`slide ${num}`}
                >
                  Slide {num}
                </Carousel.Slide>
              ))}
            </Carousel.Slider>
          </Box>

          <Carousel.Pagination />
        </Flex>
      </Carousel>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programatically detectable accesibility issues', async () => {
    const { container } = render(
      <Carousel
        slideWidth={200}
        slideHeight={300}
        type="overflow"
        numSlides={4}
      >
        <Flex css={{ flexDirection: 'column' }}>
          <Box css={{ position: 'relative' }}>
            <Carousel.Arrows />
            <Carousel.Slider aria-label="Example carousel" trayTag="div">
              {[0, 1, 2, 3].map((num) => (
                <Carousel.Slide
                  key={num}
                  index={num}
                  aria-label={`slide ${num}`}
                >
                  Slide {num}
                </Carousel.Slide>
              ))}
            </Carousel.Slider>
          </Box>

          <Carousel.Pagination />
        </Flex>
      </Carousel>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
