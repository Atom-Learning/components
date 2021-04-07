import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import {
  Button,
  CheckboxField,
  Form,
  globalCss,
  RadioGroupField
} from '../dist'
import { Checkbox } from '@radix-ui/react-checkbox'
globalCss(reset)()

const App = () => {
  return (
    <Form onSubmit={console.log} css={{ mx: 'auto', width: '500px', p: '$2' }}>
      <RadioGroupField name="option" label="Options" defaultValue={'1'}>
        <RadioGroupField.Item value="1" label="1" />
        <RadioGroupField.Item value="2" label="2" />
      </RadioGroupField>
      <CheckboxField name="yes?" label="Yes?" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
