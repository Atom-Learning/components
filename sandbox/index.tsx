import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import {
  Button,
  CheckboxField,
  Form,
  globalCss,
  InputField,
  RadioButton,
  RadioButtonGroup,
  RadioGroupField
} from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Form>
      <InputField
        label="INPUT FIELD"
        name="INPUT FIELD"
        validation={{ required: 'This field is required' }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
