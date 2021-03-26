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
              cursor: 'grab',
              ml: '50%',
              overflow: `${
                type === 'overflow' ? 'visible' : 'hidden'
              } !important`,
              transform: 'translateX(-50%)',
              '& div[class*="sliderTray_"]': {
                transition: 'transform .5s',
                transitionTimingFunction: 'cubic-bezier(.645,.045,.355,1)',
                willCchange: 'transform'
              },
              '& div[class*="slide_"]': {
                float: 'left',
                pb: '0 !important',
                '& div[class*="slideInner"]': {
                  display: 'flex',
                  justifyContent: 'center'
                }
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
