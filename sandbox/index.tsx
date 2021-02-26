import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Flex, globalCss, Loader, Button } from '../dist'

globalCss(reset)()

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  return (
    <Flex
      css={{
        color: 'black',
        flexDirection: 'column',
        width: '200px',
        alignItems: 'center'
      }}
    >
      <Button onClick={() => setIsLoading((curr) => !curr)}>Toggle</Button>
      {isLoading && <Loader />}
    </Flex>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
