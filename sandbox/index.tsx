import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Button, Form, globalCss, RadioGroupField } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Form onSubmit={console.log} css={{ mx: 'auto', width: '500px', p: '$2' }}>
      <RadioGroupField name="option" label="Options" defaultValue={'1'}>
        <RadioGroupField.Item value="1" label="1" />
        <RadioGroupField.Item value="2" label="2" />
      </RadioGroupField>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
