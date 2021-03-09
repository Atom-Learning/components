import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { globalCss, List } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <List size="lg">
      <List.Item>first thing</List.Item>
      <List.Item>second thing</List.Item>
    </List>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
