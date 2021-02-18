import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { globalCss } from '../dist'

globalCss(reset)()

const App = () => {
}

ReactDOM.render(<App />, document.getElementById('root'))
