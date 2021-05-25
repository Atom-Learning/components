import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Button, Form, globalCss, InputField,PasswordField } from '../src'

globalCss(reset)()

const App = () => {
  return (
    <Form onSubmit={console.log} css={{ width: 500 }}>
      <InputField
        name="name"
        label="Name"
        validation={{ required: 'Name is required' }}
      />
      <PasswordField
        name="password"
        validation={{ required: 'Password is required' }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
