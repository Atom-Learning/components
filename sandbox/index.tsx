import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss } from '../dist'
import { Video } from '../src/components/video/Video'

globalCss(reset)()

const App = () => {
  return (
    <Box
      css={{
        justifyContent: 'space-between',
        gap: 10,
        flexDirection: 'column',
        flexWrap: 'wrap'
      }}
    >
      <Video externalId="1084537" width="30%" height="30%" />
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
