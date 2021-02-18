import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Check, globalCss, Home, Icon } from '../dist'

globalCss(reset)()

const App = () => {
  console.log('home:', Home)
  return (
    <Box>
      <Icon is={Check} size="sm" />
      <Icon is={Check} size="md" />
      <Icon is={Check} size="lg" />
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
