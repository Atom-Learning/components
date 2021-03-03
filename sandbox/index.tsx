import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Button, Form, globalCss, InputField } from '../dist'
globalCss(reset)()

const App = () => {
  const defaultValues = { name: 'Gary', age: 26 }

  const handleSubmit = (data) => {
    console.log('data:', data)
    // data: Object { name: "Gary", age: "26" }
  }

  return (
    <Form
      onSubmit={handleSubmit}
      defaultValues={defaultValues}
      css={{ width: '300px', padding: '$2 $3' }}
    >
      <InputField
        name="name"
        label="Name"
        validation={{
          required: 'You must have a name'
        }}
      />

      <InputField
        name="age"
        label="Age"
        type="number"
        validation={{
          required: 'You must have an age',
          min: { value: 0, message: "Negative ages don't make sense!" }
        }}
      />
      <Button>Submit</Button>
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
