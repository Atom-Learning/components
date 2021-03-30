import { CarouselProvider } from 'pure-react-carousel'
import * as React from 'react'

import { CSSWrapper } from '~/utilities'

import { Arrows } from './Arrows'
import { Dots } from './Dots'
import { Slide } from './Slide'
import { Slider } from './Slider'

type CarouselProps = {
  slideHeight: number
  slideWidth: number
  numSlides: number
}

export const Carousel: React.FC<
  CarouselProps & React.ComponentProps<typeof CSSWrapper>
> & {
  Arrows: typeof Arrows
  Pagination: typeof Dots
  Slide: typeof Slide
  Slider: typeof Slider
} = ({ children, css, slideHeight, slideWidth, numSlides }) => {
  return (
    <CSSWrapper css={css}>
      <CarouselProvider
        naturalSlideWidth={slideWidth}
        naturalSlideHeight={slideHeight}
        totalSlides={numSlides}
      >
        {children}
      </CarouselProvider>
    </CSSWrapper>
  )
}

Carousel.Arrows = Arrows
Carousel.Pagination = Dots
Carousel.Slide = Slide
Carousel.Slider = Slider

Carousel.displayName = 'Carousel'
