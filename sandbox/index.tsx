import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { List, globalCss } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <List>
      <List.Item>1</List.Item>
      <List.Item>2</List.Item>
      <List.Item>3</List.Item>
    </List>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
