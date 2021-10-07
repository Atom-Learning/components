import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, Button, DropdownMenu, Icon } from '../src'
import { Error, Exit, User } from '@atom-learning/icons'

globalCss(reset)()

const App = () => {
  return (
    <Box css={{ height: 200, width: '500px', mx: 'auto', p: '$4' }}>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button>click click</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sideOffset={20}>
          <DropdownMenu.Item active>
            <Icon is={User} css={{ mr: '$2' }} />
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Icon is={Error} css={{ mr: '$2' }} />
            Report a Problem
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Icon is={Exit} css={{ mr: '$2' }} />
            Log Out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
