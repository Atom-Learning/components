import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Carousel, globalCss, Image, Text } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Box css={{ width: '500px', mx: 'auto', py: '$3' }}>
      <Carousel
        slideWidth={200}
        slideHeight={300}
        name="Example carousel"
        type="arrows"
      >
        {[0, 1, 2].map((num) => (
          <Carousel.Slide key={num} index={num}>
            <Image src="https://placekitten.com/200/300" alt="" />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
