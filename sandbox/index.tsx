import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { reset } from 'stitches-reset'

import { Select, Box, css } from '../dist'

console.log({ css })

css.global({
  body: {
    margin: '0'
  }
})

const App = () => {
  return (
    <Box css={{ backgroundColor: '$primary', p: '$4' }}>
      <Select
        css={{ width: '400px' }}
        name="Hello"
        options={[{ label: 'hello', value: 'hello' }]}
      />
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
