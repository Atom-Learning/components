import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, css, Flex } from '../src'

css.global(reset)()

const App = () => {
  return (
    <Flex
      css={{
        color: 'white',
        backgroundColor: '$primary400',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Hello
    </Flex>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
