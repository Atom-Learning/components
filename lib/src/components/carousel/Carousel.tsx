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

export const CarouselComponent = ({
  children,
  css,
  slideHeight,
  slideWidth,
  numSlides,
  ...props
}: CarouselProps &
  Omit<
    React.ComponentProps<typeof CarouselProvider>,
    'naturalSlideWidth' | 'naturalSlideHeight' | 'totalSlides'
  > &
  React.ComponentProps<typeof CSSWrapper>) => (
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

/**
 * Documentation about the hook usage
 * https://github.com/express-labs/pure-react-carousel#hooks-and-usecontext
 */
export const useCarousel = () => React.useContext(CarouselContext)

export const Carousel = Object.assign(CarouselComponent, {
  ArrowNext: CarouselArrowNext,
  ArrowPrevious: CarouselArrowPrevious,
  Pagination: CarouselPagination,
  Slide: CarouselSlide,
  Slider: CarouselSlider
})

CarouselComponent.displayName = 'Carousel'
