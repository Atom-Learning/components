import { CarouselProvider, Slider } from 'pure-react-carousel'
import * as React from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'

import { Arrows } from './Arrows'
import { Dots } from './Dots'
import { Slide } from './Slide'

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
                  transition: 'transform .5s cubic-bezier(.645,.045,.355,1)'
                },
                '& div[class*="slide_"]': {
                  float: 'left',
                  pb: '0 !important'
                },
                '& div[class*="slideInner"]': {
                  display: 'flex',
                  justifyContent: 'center'
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
    </Box>
  )
}

Carousel.Slide = Slide

Carousel.displayName = 'Carousel'
