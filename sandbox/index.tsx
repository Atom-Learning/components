import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, Popover } from '../dist'

globalCss(reset)()

const App = () => {
  let show = false
  const showButton = () => {
    console.log(1, show)
    show = !show
    console.log(2, show)
    return show
  }
  return (
    <Box
      css={{
        m: '100 0',
        p: 20,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ height: '100px', padding: '20px' }}>
        <Popover
          visible={show}
          align="left"
          content="Hello Left with a trigger"
        >
          <button onClick={showButton}>open left</button>
        </Popover>
      </div>
      <div style={{ height: '100px', padding: '20px' }}>
        <Popover visible={show} content="Hello with a trigger">
          <button onClick={showButton}>open center</button>
        </Popover>
      </div>
      <div style={{ height: '100px', padding: '20px' }}>
        <Popover
          visible={show}
          align="right"
          content="Hello Right with a trigger"
        >
          <button onClick={showButton}>open right</button>
        </Popover>
      </div>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
