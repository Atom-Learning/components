import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Flex, globalCss, InputField } from '../dist'

globalCss(reset)()

const App = () => {
  return (
    <Box css={{ p: '$3', width: '500px' }}>
      <Flex>
        <InputField
          label="Name"
          error="Name is a required field"
          name="name"
          placeholder="Your Name"
          css={{ mb: '$3', mr: '$3' }}
          required
        />
        <InputField
          label="Email address"
          name="email"
          defaultValue="gary@atomlearning.co.uk"
        />
      </Flex>
      <InputField
        type="tel"
        name="tel"
        label="Phone number"
        css={{ width: '30ch' }}
        placeholder="0800 00 1066"
      />
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
