import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Button,Checkbox, CheckboxField, Form, globalCss } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Form css={{ p: '$2', mx: 'auto', width: '200px' }} onSubmit={console.log}>
      <CheckboxField label="Example" name="example" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
