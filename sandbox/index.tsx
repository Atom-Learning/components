import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Form, globalCss, SelectField } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Form onSubmit={console.log} css={{ mx: 'auto', width: '500px', p: '$2' }}>
      <SelectField
        label="Favourite color"
        name="color"
        options={[
          { value: 1, label: 'papayawhip' },
          { value: 2, label: 'aliceblue' }
        ]}
      />
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
