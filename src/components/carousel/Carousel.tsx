import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider as BaseSlider
} from 'pure-react-carousel'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { throttle } from 'throttle-debounce'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { ChevronLeft, ChevronRight, Icon } from '~/components/icon'
import { styled } from '~/stitches'

const CarouselContainer = styled('div', { position: 'relative' })

type CarouselProps = {
  slideWidth: number
  showArrows: boolean
  showDots: boolean
  overflow: boolean
  equalHeights: boolean
  children: Array<React.ReactElement>
}

const throttleAmount = 500

export const Carousel: React.FC<CarouselProps> = ({
  slideWidth,
  showArrows,
  showDots,
  overflow,
  equalHeights,
  children
}) => {
  const [carouselHeight, setCarouselHeight] = useState<number>(0)
  const [carouselWidth, setCarouselWidth] = useState(slideWidth)
  const carouselContainer = useRef<HTMLDivElement>(null)
  const slides = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const setHeight = throttle(throttleAmount, () => {
      const numbers = slides.current.reduce((accumulator, currentSlide) => {
        return currentSlide === null
          ? accumulator
          : [...accumulator, currentSlide?.getBoundingClientRect()?.height]
      }, [])

      const highestSlideHeight = Math.max(...numbers)
      setCarouselHeight(highestSlideHeight)
    })

    const setWidth = throttle(throttleAmount, () => {
      const width = carouselContainer?.current?.getBoundingClientRect().width
      if (width) setCarouselWidth(width)
    })

    if (!slideWidth) {
      window.addEventListener('resize', setWidth)
      setWidth()
    }

    if (slides.current.length) {
      window.addEventListener('resize', setHeight)
      setHeight()
    }

    return () => {
      window.removeEventListener('resize', setHeight)
      window.removeEventListener('resize', setWidth)
    }
  }, [slideWidth])

  return (
    <CarouselContainer
      ref={carouselContainer}
      // className={styles.carouselContainer}
    >
      <CarouselProvider
        naturalSlideWidth={carouselWidth}
        naturalSlideHeight={carouselHeight}
        totalSlides={children.length}
      >
        <Box
          as={BaseSlider}
          css={{
            // height: '100%',
            width: carouselWidth,
            height: carouselHeight,
            cursor: 'grab',
            mt: '$4',
            ml: '50%',
            transform: 'translateX(-50%)',
            ...(overflow && { overflow: 'visible' })
          }}
          // className={clsx(
          //   styles.slider,
          //   overflow && styles.sliderOverflow,
          //   sliderClassName
          // )}
          // style={{ width: carouselWidth, height: carouselHeight }}
        >
          {React.Children.map(children, (child, index) =>
            child ? (
              <Slide key={child.props.key} index={index}>
                <Box
                  ref={(ref) => (slides.current[index] = ref)}
                  // className={clsx(styles.slide, slideClassName)}
                  {...(equalHeights && { css: { height: carouselHeight } })}
                >
                  {child}
                </Box>
              </Slide>
            ) : null
          )}
        </Box>
        {showDots && (
          <Box
            as={DotGroup}
            css={{
              justifyContent: 'center',
              margin: '$4 0',
              fontSize: '0',
              lineHeight: '12px',
              textAlign: 'center',
              '& > button': {
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '$tonal300',
                margin: '0 6px',
                border: 'none',
                "&[class*='selected']": {
                  backgroundColor: '$primary900'
                }
              }
            }}
            // className={clsx(styles.dots, dotsClassName)}
          />
        )}
        {showArrows && (
          <>
            <Flex
              as={ButtonBack}
              css={{
                position: 'absolute',
                top: '50%',
                left: '$2',
                transform: 'translateY(-50%)',
                size: '44px',
                alignItems: 'center',
                color: '$primary900',
                background: 'none',
                border: 'none',
                transition: 'color 0.15s ease-in-out',
                '&:hover': {
                  color: '$primary500'
                },
                '&:disabled': { color: '$tonal300' },
                when: { sm: { right: '$3' }, md: { right: '$4' } }
              }}
              // className={clsx(
              //   styles.arrow,
              //   styles.arrowBack,
              //   arrowBackClassName
              // )}
            >
              <Icon is={ChevronLeft} />
            </Flex>
            <Flex
              as={ButtonNext}
              css={{
                position: 'absolute',
                top: '50%',
                left: '$2',
                transform: 'translateY(-50%)',
                size: '44px',
                alignItems: 'center',
                color: '$primary900',
                background: 'none',
                border: 'none',
                transition: 'color 0.15s ease-in-out',
                '&:hover': {
                  color: '$primary500'
                },
                '&:disabled': { color: '$tonal300' },
                when: { sm: { right: '$3' }, md: { right: '$4' } }
              }}
              // className={clsx(
              //   styles.arrow,
              //   styles.arrowNext,
              //   arrowNextClassName
              // )}
            >
              <Icon is={ChevronRight} />
            </Flex>
          </>
        )}
      </CarouselProvider>
    </CarouselContainer>
  )
}

Carousel.displayName = 'Carousel'
