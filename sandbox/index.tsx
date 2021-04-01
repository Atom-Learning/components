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
    <Form onSubmit={console.log} css={{ mx: 'auto', width: '500px', p: '$2' }}>
      <InputField
        label="Name"
        name="name"
        validation={{ required: 'This field is required' }}
        css={{ mb: '$4' }}
      />
      <InputField label="Age" name="age" type="number" css={{ mb: '$4' }} />
      <RadioGroupField
        defaultValue="0"
        css={{ mb: '$4' }}
        name="radio"
        label="What's your favourite CSS color name?"
        required
        validation={{
          validate: (value) => {
            console.log('value:', value)
            return value === '0' || 'Incorrect!'
          }
        }}
      >
        <RadioGroupField.Item value="0" label="papayawhip" css={{ mb: '$2' }} />
        <RadioGroupField.Item value="1" label="aliceblue" />
      </RadioGroupField>
      <CheckboxField
        label="I correctly chose papayawhip"
        name="yes"
        css={{ mb: '$4' }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
