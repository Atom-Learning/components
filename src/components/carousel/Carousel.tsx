import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider
} from 'pure-react-carousel'
import * as React from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { styled } from '~/stitches'

import { Dots } from './Dots'
import { Slide } from './Slide'
import { Arrows } from './Arrows'

type CarouselProps = {
  name: string
  slideHeight: number
  slideWidth: number
  withArrows?: boolean
  withOverflow?: boolean
  type: 'arrows' | 'overflow'
  children: Array<React.ReactElement>
}

export const Carousel: React.FC<CarouselProps> & { Slide: typeof Slide } = ({
  children,
  name,
  slideHeight,
  slideWidth,
  type = 'arrows'
}) => {
  return (
    <CarouselProvider
      naturalSlideWidth={slideWidth}
      naturalSlideHeight={slideHeight}
      totalSlides={children.length}
    >
      <Flex css={{ flexDirection: 'column' }}>
        <Box css={{ position: 'relative' }}>
          {type === 'arrows' && <Arrows />}
          <Box
            as={Slider}
            css={{
              ml: '50%',
              cursor: 'grab',
              overflow: `${
                type === 'overflow' ? 'visible' : 'hidden'
              } !important`,
              transform: 'translateX(-50%)',
              '& div[class*="slide_"]': {
                float: 'left',
                pb: '0 !important'
              }
            }}
            aria-label={name}
            trayTag="div"
          >
            {children}
          </Box>
        </Box>

        <Dots />
      </Flex>
    </CarouselProvider>
  )
}

Carousel.Slide = Slide

Carousel.displayName = 'Carousel'
