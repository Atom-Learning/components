import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, css } from '../dist'
import { Sandbox } from './Sandbox'

css.global(reset)()

const App = () => {
  return (
    <Sandbox>
      <Box
        css={{
          height: '100%',
          width: '100%',
          // p: '$3',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // margin: 'auto',
          backgroundColor: 'ebf5ff'
        }}
      >
        <Box
          as="section"
          css={{
            height: '295px',
            width: '355px',
            backgroundColor: 'white',
            padding: '$4',
            borderRadius: '$3',
            boxShadow:
              '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)'
          }}
        >
          Log in
        </Box>
      </Box>
    </Sandbox>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

const Input = ({ label, ...rest }) => {
  return (
    <label>
      {label}
      <input {...rest} />
    </label>
  )
}
