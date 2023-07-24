import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Form, DateField, globalCss, Flex, styled } from '../src'
import { useCallbackRefState } from '../src/utilities/hooks/useCallbackRef'
import { TooltipProvider } from '@radix-ui/react-tooltip'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const StyledMyComponent = styled(Flex, {
  background: 'red'
})
const MyComponentOriginal = (props) => {
  return <StyledMyComponent {...props} />
}
const MyComponent = (props) => {
  return <Flex {...props} />
}
const App = () => {
  const [el, setEl] = useCallbackRefState()
  React.useEffect(() => {
    console.log(el)
  }, [el])

  return (
    <StyledMyComponent ref={setEl} as="ul" gap={2}><li>Hi</li><li>Hi</li></StyledMyComponent >
  )
}


// const App = () => {

//   return (
//     <TooltipProvider>
//       <Form
//         onSubmit={(data) => { console.log({ data }) }}
//         render={({ watch }) => {
//           return (
//             <DateField name="exam-date" label="Exam date" validation={{
//               validate: (value) => {
//                 var now = new Date;
//                 const d = value.slice(0, 2),
//                   m = value.slice(3, 5),
//                   y = value.slice(6, 10);
//                 var target = new Date(y, m - 1, d);
//                 console.log({ now, target })

//                 if (target >= now) {
//                   console.log('Date in the future!')
//                   return 'in future';
//                 }
//                 return true
//               }
//             }} initialDate={new Date()} />

//           )
//         }}
//       />
//     </TooltipProvider >
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'))
