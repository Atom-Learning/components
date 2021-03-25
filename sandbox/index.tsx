import 'regenerator-runtime/runtime'

import { Danger } from '@atom-learning/icons'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import {
  Button,
  Checkbox,
  Flex,
  globalCss,
  Icon,
  Input,
  Loader,
  PasswordField,
  ProgressBar,
  RadioButton,
  RadioButtonGroup,
  Select,
  Textarea
} from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Flex
      css={{
        flexDirection: 'column',
        gap: '$4',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Button theme="warning">
        <Icon is={Danger} css={{ mr: '$2' }} />
        Warning button
      </Button>
      <Checkbox />
      <Input placeholder="Test" css={{ width: 340 }} />
      <ProgressBar value={30} css={{ width: 340 }} />
      <RadioButtonGroup>
        <RadioButton />
      </RadioButtonGroup>
      <Select
        options={[{ label: 'What', value: 'Hello' }]}
        css={{ width: 340 }}
      />
      <Textarea css={{ width: 340 }} />
      <Loader size="lg" />
      <PasswordField css={{ width: 340 }} />
    </Flex>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
