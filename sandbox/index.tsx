import 'regenerator-runtime/runtime'
import 'pure-react-carousel/dist/react-carousel.es.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Carousel, globalCss, Image } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Box css={{ m: '0 auto', width: '250px', pt: '$4' }}>
      <Carousel slideWidth={200} slideHeight={300}>
        {[0, 1, 2, 3, 4].map((num) => (
          <Carousel.Slide key={num} index={num}>
            <Image src="https://placekitten.com/200/300" />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
