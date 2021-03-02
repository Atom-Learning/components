import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'
import { reset } from 'stitches-reset'

import { Button, globalCss, Input, InputField, Label, getForm } from '../dist'
globalCss(reset)()

const App = () => {
  type Person = { name: string }
  const Form = getForm<Person>()

  const handleSubmit = (data: Person) => {
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
