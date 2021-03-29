import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, Grid, Image } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Box>
      <Grid basis="0.5em" gap={1}>
        {[0, 1, 2, 3].map((num) => (
          <Image key={num} src="https://placekitten.com/200/300" alt="" />
        ))}
      </Grid>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
