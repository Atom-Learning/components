import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Button, Form, globalCss, InputField } from '../dist'
globalCss(reset)()

const App = () => {
  const data = { name: 'Gary' }

  const handleSubmit = (data) => {
    console.log('data:', data)
  }

  return (
    <Form onSubmit={handleSubmit} css={{ width: '300px', padding: '$2 $3' }}>
      <InputField name="name" label="Name" />
      <Button>Submit</Button>
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
