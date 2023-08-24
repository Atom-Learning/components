import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Button, Link, Box, Flex, globalCss, FileInput } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const CustomAnchor = (props) => <a style={{ background: 'pink' }} {...props} />
const CustomButton = (props) => <button style={{ background: 'orange' }} type="reset" onPointerEnter={() => { console.log('hoverme') }} {...props} />
const CustomBox = (props) => <div style={{ background: 'black', color: 'white', padding: 24 }} {...props} />
const CustomBoxWithAs = ({ as: Component = 'div', ...props }) => <Component style={{ background: 'black', color: 'white', padding: 24 }} {...props} />

const App = () => (
  <Flex
    css={{
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}
  >
    Simple
    <Button>Button</Button>
    <Link href="https://google.com">Link</Link>

    <hr style={{ width: '100%' }} />

    Using `as`
    <Link href="https://google.com" as={Button}>This setup makes almost no sense</Link> {/** This */}
    <Link href="https://google.com" as={Box}>This setup makes almost no sense</Link>
    <Link href="https://google.com" as={CustomAnchor}>This setup makes some sense</Link>
    <Button onClick={() => console.log('1')} as={Link}>This setup makes almost no sense</Button> {/** and this do some weird css merger? That's why lets not use `as` for this sort of thing? */}
    <Button onClick={() => console.log('2')} as={Box}>This setup makes almost no sense</Button>
    <Button onClick={() => console.log('3')} as={CustomButton}>This setup makes some sense</Button>

    <hr style={{ width: '100%' }} />

    Using `asChild`
    <Link href="https://google.com" asChild><Button onClick={() => console.log('I am conflicted')}>I should be a link that looks like a button</Button></Link>
    <Button onClick={() => console.log('I am conflicted')} asChild><Link>I should be a button that looks like a link</Link></Button>
    <Button onClick={() => console.log('I am conflicted')} asChild><CustomBox>I should be a button that looks like a CustomBox. Alas I am not because I don't use stitches. huh. Well I'm ALMOST a button.</CustomBox></Button>
    <Button onClick={() => console.log('I am conflicted')} asChild><CustomBoxWithAs>CustomBoxWithAs: Here we, here we, here we f-ing go.</CustomBoxWithAs></Button>

    <hr style={{ width: '100%' }} />

    Potentially painful components
    <FileInput onFileSelect={() => { }}>Upload</FileInput>

  </Flex>
)

ReactDOM.render(<App />, document.getElementById('root'))
