import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, Popover } from '../dist'

globalCss(reset)()

const App = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  const toggleVisibility = () => setIsVisible((currentState) => !currentState)
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
          visible={isVisible}
          align="left"
          content="Hello Left with a trigger"
        >
          <button onClick={toggleVisibility}>open left</button>
        </Popover>
      </div>
      <div style={{ height: '100px', padding: '20px' }}>
        <Popover visible={isVisible} content="Hello with a trigger">
          <button onClick={toggleVisibility}>open center</button>
        </Popover>
      </div>
      <div style={{ height: '100px', padding: '20px' }}>
        <Popover
          visible={isVisible}
          align="right"
          content="Hello Right with a trigger"
        >
          <button onClick={toggleVisibility}>open right</button>
        </Popover>
      </div>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
