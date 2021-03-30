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
  children: Array<React.ReactElement>
}

export const Carousel: React.FC<
  CarouselProps & React.ComponentProps<typeof Box>
> & { Slide: typeof Slide } = ({
  children,
  name,
  slideHeight,
  slideWidth,
  type = 'arrows',
  ...remainingProps
}) => {
  return (
    <Box {...remainingProps}>
      <CarouselProvider
        naturalSlideWidth={slideWidth}
        naturalSlideHeight={slideHeight}
        totalSlides={children.length}
      >
        <Flex css={{ flexDirection: 'column' }}>
          <Box css={{ position: 'relative' }}>
            {type === 'arrows' && <Arrows />}
            <Slider aria-label={name} trayTag="div">
              {children}
            </Slider>
          </Box>

          <Dots />
        </Flex>
      </CarouselProvider>
    </Box>
  )
}

Carousel.Slide = Slide

Carousel.displayName = 'Carousel'
