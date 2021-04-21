import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Button, Form, globalCss, Input, InputField } from '../dist'

globalCss(reset)()

const FormContent = ({ formState }) => (
  <>
    <InputField
      name="name"
      label="Name"
      validation={{
        required: 'Name is required!',
        minLength: { value: 3, message: 'longer!' }
      }}
    />
    <Button type="submit" disabled={!formState.isValid}>
      Submit
    </Button>
  </>
)

const App = () => {
  return (
    <Box>
      <Form
        onSubmit={console.log}
        // defaultValues={{ name: 'gary' }}
        render={FormContent}
      />
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
