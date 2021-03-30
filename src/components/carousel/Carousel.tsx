import { CarouselProvider } from 'pure-react-carousel'
import * as React from 'react'

import { CSSWrapper } from '~/utilities'

import { ArrowNext, ArrowPrevious } from './Arrows'
import { Dots } from './Dots'
import { Slide } from './Slide'
import { Slider } from './Slider'

type CarouselProps = {
  slideHeight: number
  slideWidth: number
  numSlides: number
}

type CarouselSubComponents = {
  ArrowNext: typeof ArrowNext
  ArrowPrevious: typeof ArrowPrevious
  Pagination: typeof Dots
  Slide: typeof Slide
  Slider: typeof Slider
}

export const Carousel: React.FC<
  CarouselProps & React.ComponentProps<typeof CSSWrapper>
> &
  CarouselSubComponents = ({
  children,
  css,
  slideHeight,
  slideWidth,
  numSlides
}) => {
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

Carousel.ArrowPrevious = ArrowPrevious
Carousel.ArrowNext = ArrowNext
Carousel.Pagination = Dots
Carousel.Slide = Slide
Carousel.Slider = Slider

Carousel.displayName = 'Carousel'
