import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, Carousel, Image } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Carousel
      slideWidth={200}
      slideHeight={300}
      numSlides={4}
      css={{
        display: 'flex',
        flexDirection: 'column',
        mx: 'auto',
        position: 'relative',
        width: '500px'
      }}
    >
      <Carousel.ArrowBack
        css={{
          position: 'absolute',
          left: '$2',
          '@md': {
            left: '$3'
          },
          '@lg': {
            left: '$4'
          }
        }}
      />
      <Carousel.ArrowNext
        css={{
          position: 'absolute',
          right: '$2',
          '@md': {
            right: '$3'
          },
          '@lg': {
            right: '$4'
          }
        }}
      />
      <Carousel.Slider aria-label="Example carousel" trayTag="div">
        {[0, 1, 2, 3].map((num) => (
          <Carousel.Slide
            key={num}
            index={num}
            aria-label={`slide ${num}`}
            css={{
              opacity: '0.7',
              transition: 'all 0.25s ease-in',
              '&[aria-selected="true"]': {
                opacity: 1,
                // apply box shadow to the Slide content directly,
                // not the wrappers added internally
                '& > div > div > *': {
                  boxShadow: '$1'
                }
              }
            }}
          >
            <Image alt="" src="https://placekitten.com/200/300" />
          </Carousel.Slide>
        ))}
      </Carousel.Slider>
      <Carousel.Pagination />
    </Carousel>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
