import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { AlertProvider, Button, globalCss, useAlert } from '../dist'
globalCss(reset)()

const Component = () => {
  const { showAlert } = useAlert()

  return (
    <Button
      onClick={() => {
        showAlert({
          title: 'Are you sure you want to delete this school?',
          description:
            'Removing this last selected school will remove all restrictions on the exam and make it available to all schools.',
          cancelActionText: 'Cancel',
          confirmActionText: 'Delete school',
          onAction: (result) => {
            if (result) console.log('Confirmation')
          }
        })
      }}
    >
      Delete school
    </Button>
  )
}

const App = () => (
  <AlertProvider>
    <Component />
  </AlertProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
