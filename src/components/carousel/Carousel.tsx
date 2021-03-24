import 'pure-react-carousel/dist/react-carousel.es.css'

import { CarouselProvider, Slider } from 'pure-react-carousel'
import * as React from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'

import { Dots } from './Dots'
import { Slide } from './Slide'

type CarouselProps = {
  name: string
  slideHeight: number
  slideWidth: number
  children: Array<React.ReactElement>
}

export const Carousel: React.FC<CarouselProps> & { Slide: typeof Slide } = ({
  children,
  name,
  slideHeight,
  slideWidth
}) => {
  return (
    <CarouselProvider
      naturalSlideWidth={slideWidth}
      naturalSlideHeight={slideHeight}
      totalSlides={children.length}
    >
      <Flex css={{ flexDirection: 'column' }}>
        <Box
          as={Slider}
          css={{
            ml: '50%',
            cursor: 'grab',
            // override default styling from the carousel library
            overflow: 'visible !important',
            transform: 'translateX(-50%)'
          }}
          aria-label={name}
          trayTag="div"
        >
          {children}
        </Box>
        <Dots />
      </Flex>
    </CarouselProvider>
  )
}

Carousel.Slide = Slide

Carousel.displayName = 'Carousel'
