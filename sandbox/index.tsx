import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Carousel, globalCss, Image, Flex } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Box css={{ width: '500px', p: '$3', m: '0 auto' }}>
      <Carousel slideWidth={200} slideHeight={300} numSlides={4}>
        <Flex css={{ flexDirection: 'column' }}>
          <Box css={{ position: 'relative' }}>
            <Carousel.Arrows />
            <Carousel.Slider aria-label={'Example carousel'} trayTag="div">
              {[0, 1, 2, 3].map((num) => (
                <Carousel.Slide
                  key={num}
                  index={num}
                  css={{
                    opacity: '0.7',
                    transition: 'all 0.25s ease-in',
                    '&[aria-selected="true"]': {
                      opacity: 1,
                      '& > div > div > *': {
                        boxShadow: '$1'
                      }
                    }
                  }}
                >
                  <Image src="https://placekitten.com/200/300" alt="" />
                </Carousel.Slide>
              ))}
            </Carousel.Slider>
          </Box>

          <Carousel.Pagination />
        </Flex>
      </Carousel>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
