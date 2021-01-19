import * as React from 'react'
import { styled } from './stitches'

type Props = {
  children?: any
}

// const Panel = styled('div', {
//   p: '$3',
//   borderRadius: '$2',
//   backgroundColor: 'white',
//   border: '1px solid $tonal-500'
// })

// const Page = () => (
//   <Flex css={{ backgroundColor: '$main-background-color' }}>
//     <Box css={{ m: 'auto' }}>
//       <Logo css={{ mb: '$3' }} />
//       <Panel css={{ width: '80vw' }}>
//         <Form onSubmit={() => {}}>
//           <Label htmlFor="username" />
//           <Input id="username" />
//           <Label htmlFor="password" />
//           <Input id="password" />
//           <Button theme="secondary">Submit</Button>
//         </Form>
//       </Panel>
//     </Box>
//   </Flex>
// )

export const Flex = styled('div', { display: 'flex' })
