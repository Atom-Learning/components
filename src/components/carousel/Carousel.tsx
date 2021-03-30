import { CarouselProvider } from 'pure-react-carousel'
import * as React from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'

import { Arrows } from './Arrows'
import { Dots } from './Dots'
import { Slide } from './Slide'
import { Slider } from './Slider'

type CarouselProps = {
  name: string
  slideHeight: number
  slideWidth: number
  withArrows?: boolean
  withOverflow?: boolean
  type: 'arrows' | 'overflow'
  // children: Array<React.ReactElement>
  numSlides: number
}

export const Carousel: React.FC<
  CarouselProps & React.ComponentProps<typeof Box>
> & {
  Arrows: typeof Arrows
  Pagination: typeof Dots
  Slide: typeof Slide
  Slider: typeof Slider
} = ({
  children,
  name,
  slideHeight,
  slideWidth,
  type = 'arrows',
  numSlides,
  ...remainingProps
}) => {
  return (
    <Box {...remainingProps}>
      <CarouselProvider
        naturalSlideWidth={slideWidth}
        naturalSlideHeight={slideHeight}
        totalSlides={numSlides}
      >
        {/* <Flex css={{ flexDirection: 'column' }}>
          <Box css={{ position: 'relative' }}>
            {type === 'arrows' && <Arrows />}
            <Slider aria-label={name} trayTag="div">
              {children}
            </Slider>
          </Box>

          <Dots />
        </Flex> */}
        {children}
      </CarouselProvider>
    </Box>
  )
}

Carousel.Arrows = Arrows
Carousel.Pagination = Dots
Carousel.Slide = Slide
Carousel.Slider = Slider

Carousel.displayName = 'Carousel'
