import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Select, Box } from '../dist'

const App = () => {
  return (
    <Box css={{ backgroundColor: '$primary', p: '$4' }}>
      <Select name="Hello" options={[{ label: 'hello', value: 'hello' }]} />
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
