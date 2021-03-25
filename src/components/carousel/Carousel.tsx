import 'pure-react-carousel/dist/react-carousel.es.css'

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider
} from 'pure-react-carousel'
import * as React from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { ChevronLeft, ChevronRight, Icon } from '~/components/icon'
import { styled } from '~/stitches'

import { Dots } from './Dots'
import { Slide } from './Slide'

const StyledButtonBack = styled(ButtonBack, {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  size: '44px',
  display: 'flex',
  alignItems: 'center',
  color: '$primary900',
  bg: 'none',
  border: 'none',
  transition: 'color 0.15s ease-in-out',
  left: '$2',
  '@md': {
    left: '$3'
  },
  '@lg': {
    left: '$4'
  },
  '&:hover': {
    color: '$primary500'
  },
  '&:disabled': {
    color: '$tonal300'
  }
})

const StyledButtonNext = styled(ButtonNext, {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  size: '44px',
  display: 'flex',
  alignItems: 'center',
  color: '$primary900',
  bg: 'none',
  border: 'none',
  transition: 'color 0.15s ease-in-out',
  right: '$2',
  '@md': {
    right: '$3'
  },
  '@lg': {
    right: '$4'
  },
  '&:hover': {
    color: '$primary500'
  },
  '&:disabled': {
    color: '$tonal300'
  }
})

type CarouselProps = {
  name: string
  slideHeight: number
  slideWidth: number
  withArrows?: boolean
  children: Array<React.ReactElement>
}

export const Carousel: React.FC<CarouselProps> & { Slide: typeof Slide } = ({
  children,
  name,
  slideHeight,
  slideWidth,
  withArrows = false
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
            height: '100%',
            // override default styling from the carousel library
            overflow: 'visible !important',
            transform: 'translateX(-50%)'
          }}
          aria-label={name}
          // trayTag="div"
        >
          {children}
        </Box>
        {/* {withArrows && (
          <>
            <StyledButtonBack>
              <Icon is={ChevronLeft} />
            </StyledButtonBack>
            <StyledButtonNext>
              <Icon is={ChevronRight} />
            </StyledButtonNext>
          </>
        )} */}
        <Dots />
      </Flex>
    </CarouselProvider>
  )
}

Carousel.Slide = Slide

Carousel.displayName = 'Carousel'
