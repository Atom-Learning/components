import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Carousel, globalCss, Image } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Box>
      <Carousel slideWidth={200} showDots overflow equalHeights showArrows>
        {[1, 2, 3, 4, 5].map((num) => (
          <Image
            src="http://placekitten.com/200/300"
            key={num}
            alt=""
            // css={{
            //   size: '100%',
            //   opactiy: '0.7',
            //   transition: 'all 0.25s ease-in',
            //   '[aria-selected="true"] &': { dropShadow: '$2', opactiy: 1 }
            // }}
          />
        ))}
      </Carousel>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
