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
  RadioField
} from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Form onSubmit={console.log}>
      <CheckboxField label="Yes?" name="yes" />
      <InputField
        label="Name"
        name="name"
        validation={{ required: 'This field is required' }}
      />
      <RadioButtonGroup css={{ mb: '$3' }}>
        <RadioField name="radio" value="0" label="0" css={{ mb: '$2' }} />
        <RadioField name="radio" value="1" label="1" />
      </RadioButtonGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
