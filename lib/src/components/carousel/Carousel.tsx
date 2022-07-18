import { CarouselContext, CarouselProvider } from 'pure-react-carousel'
import * as React from 'react'

import { CSSWrapper } from '~/utilities'

import { CarouselArrowNext, CarouselArrowPrevious } from './CarouselArrows'
import { CarouselPagination } from './CarouselPagination'
import { CarouselSlide } from './CarouselSlide'
import { CarouselSlider } from './CarouselSlider'

type CarouselProps = {
  slideHeight: number
  slideWidth: number
  numSlides: number
}

type CarouselSubComponents = {
  ArrowNext: typeof CarouselArrowNext
  ArrowPrevious: typeof CarouselArrowPrevious
  Pagination: typeof CarouselPagination
  Slide: typeof CarouselSlide
  Slider: typeof CarouselSlider
}

export const Carousel: React.FC<
  CarouselProps &
    Omit<
      React.ComponentProps<typeof CarouselProvider>,
      'naturalSlideWidth' | 'naturalSlideHeight' | 'totalSlides'
    > &
    React.ComponentProps<typeof CSSWrapper>
> &
  CarouselSubComponents = ({
  children,
  css,
  slideHeight,
  slideWidth,
  numSlides,
  ...props
}) => {
  return (
    <CSSWrapper css={css}>
      <CarouselProvider
        naturalSlideWidth={slideWidth}
        naturalSlideHeight={slideHeight}
        totalSlides={numSlides}
        {...props}
      >
        {children}
      </CarouselProvider>
    </CSSWrapper>
  )
}

/**
 * Documentation about the hook usage
 * https://github.com/express-labs/pure-react-carousel#hooks-and-usecontext
 */
export const useCarousel = () => React.useContext(CarouselContext)

Carousel.ArrowNext = CarouselArrowNext
Carousel.ArrowPrevious = CarouselArrowPrevious
Carousel.Pagination = CarouselPagination
Carousel.Slide = CarouselSlide
Carousel.Slider = CarouselSlider

Carousel.displayName = 'Carousel'
