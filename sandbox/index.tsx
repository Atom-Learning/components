import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { EditorSlate, globalCss } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const App = () => {
  // console.log(window.MathJax);
  // const bob = window.MathJax.tex2svg(
  //   "Here is math: $x+1$ and a display $$x+1\\over x-1$$"
  // );
  // console.log({ bob })

  return (
    <>
      <EditorSlate />
      {/* {"\\(x^n + y^n = z^n\\)"} <br />
      {"$$x^n + y^n = z^n$$"}
      <div dangerouslySetInnerHTML={{__html: bob.innerHTML}} /> */}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
