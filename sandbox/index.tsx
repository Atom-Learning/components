import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, css, styled } from '../dist'
import { Sandbox } from './Sandbox'

css.global(reset)()

const StyledInput = styled('input', {
  p: '$3',
  appearance: 'none',
  width: '100%',
  height: '50px',
  borderRadius: '$1',
  border: '1px solid $tonal500',
  boxShadow: 'none', // necessary to remove default iOS default styling
  fontSize: 'md',
  color: '$tonal100',
  transition: 'all 75ms ease-out',
  ':focus': {
    boxShadow: 'inset 0 0 0 1px $primary900',
    borderColor: '$primary900',
    outline: 'none'
  }
})

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />
}

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
            boxShadow: '$2',
            borderRadius: '$4'
          }}
        >
          Log in
          <Input name="user" />
        </Box>
      </Box>
    </Sandbox>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
