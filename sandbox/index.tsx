import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Button, globalCss, Form, InputField } from '../dist'

globalCss(reset)()

const App = () => {
  return (
    <Form>
      <InputField name="email" label="Email address" />
      <Button>Submit</Button>
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
