import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import {
  globalCss,
  Box,
  Heading,
  Stack,
  Form,
  Button,
  FormFieldWrapper,
  useFormFieldWrapperContext,
  Input,
  InputField,
  InputFormField,
  RadioButtonGroup,
  RadioButtonGroupField,
  RadioButtonGroupFormField,
} from '../src'

import { useCallbackRefState } from '../src/utilities/hooks/useCallbackRef'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const Custom = () => {
  const [value, setValue] = React.useState(0)
  const { updateValue, fieldRef } = useFormFieldWrapperContext()

  return (
    <Button
      ref={fieldRef}
      onClick={() => {
        const newValue = value + 1
        setValue(newValue)
        updateValue?.(newValue)
      }}
    >
      Current value: {value}
    </Button>
  )
}

const CustomFormField = ({ name }) => {
  return (
    <FormFieldWrapper
      label='custom field'
      name={name}
      validation={{ required: 'Custom field required' }}
      feedback={[
        { theme: 'neutral', message: 'this is some info' }
      ]}
    >
      <Custom />
    </FormFieldWrapper>
  )
}

const App = () => {
  const [inputRef, setInputRef] = useCallbackRefState()
  React.useEffect(() => {
    console.log({ inputRef })
  }, [inputRef])

  const [inputFormRef, setInputFormRef] = useCallbackRefState()
  React.useEffect(() => {
    console.log({ inputFormRef })
  }, [inputFormRef])

  const [inputNestedFormRef, setInputNestedFormRef] = useCallbackRefState()
  React.useEffect(() => {
    console.log({ inputNestedFormRef })
  }, [inputNestedFormRef])

  const [radioGroupNestedFormRef, setRadioGroupNestedFormRef] = useCallbackRefState()
  React.useEffect(() => {
    console.log({ radioGroupNestedFormRef })
  }, [radioGroupNestedFormRef])

  return (
    <Stack gap={6} direction="column">
      <Form onSubmit={(data) => { console.log({ data }) }}>
        <Stack gap={3} direction="column">
          <CustomFormField name="my_name" />

          <RadioButtonGroupFormField
            name="radio_group"
            label="radio group field"
            validation={{ required: 'Radio Group required!', min: 2 }}
          >
            <RadioButtonGroupFormField.Item label="1" value={1} />
            <RadioButtonGroupFormField.Item label="2" value={2} />
          </RadioButtonGroupFormField>

          <InputFormField
            name="input"
            label="input field"
            validation={{ required: 'Input required!', min: 2 }}
          />

          <FormFieldWrapper name="test_built_fieldINPUT" label="Input label (form)"
            validation={{ required: 'Input required!', min: 2 }}
          >
            {/* Even tho ref is done like this form hooks in just fine! */}
            <Input ref={setInputNestedFormRef} placeholder="placeholder" size="sm" type="number" />
          </FormFieldWrapper>


          <FormFieldWrapper name="test_built_fieldRADIO" label="RadioButtonGroup label (form)"
            validation={{ required: 'Radio required!', min: 2 }}
          >
            <RadioButtonGroup ref={setRadioGroupNestedFormRef}>
              <RadioButtonGroup.Item label="1" value={1} />
              <RadioButtonGroup.Item label="2" value={2} />
            </RadioButtonGroup>
          </FormFieldWrapper>


          <Button type="submit">Submit me</Button>
        </Stack>
      </Form>
      <Box css={{ bg: '$grey200' }}>
        <Heading> Input test </Heading>
        <Input ref={setInputRef} css={{ mt: 20 }} placeholder="placeholder" name="test" size="sm" type="number" onValueChange={(newValue) => { console.log(newValue) }} />
        <InputField css={{ mt: 20 }} placeholder="placeholder" name="test1" size="sm" label="Input label (field)" type="number" onValueChange={(newValue) => { console.log(newValue) }} />
        <Form css={{ mt: 20 }} onSubmit={(data) => { console.log({ data }) }}>
          <InputFormField
            ref={setInputFormRef}
            name="test2" placeholder="placeholder" size="sm" label="Input label (form)" type="number" onValueChange={(newValue) => { console.log(newValue) }} />
          <FormFieldWrapper css={{ mt: 20 }} name="test3" label="Input label (form)" >
            <Input placeholder="placeholder" size="sm" type="number" onValueChange={(newValue) => { console.log(newValue) }} />
          </FormFieldWrapper>
        </Form>
      </Box>

      <Box css={{ bg: '$grey200' }}>
        <Heading> RadioGroup test </Heading>
        <RadioButtonGroup
          name="radiogroup2"
        >
          <RadioButtonGroup.Item label="1" value={1} />
          <RadioButtonGroup.Item label="2" value={2} />
        </RadioButtonGroup>

        <RadioButtonGroupField
          name="radiogroup2"
          label="radio group label"
        >
          <RadioButtonGroupField.Item label="1" value={1} />
          <RadioButtonGroupField.Item label="2" value={2} />
        </RadioButtonGroupField>
        <Form css={{ mt: 20 }} onSubmit={(data) => { console.log({ data }) }}>
          <RadioButtonGroupFormField
            name="radiogroup2"
            label="radio group label"
            validation={{ required: 'Radio Group required!', min: 2 }}
          >
            <RadioButtonGroupFormField.Item label="1" value={1} />
            <RadioButtonGroupFormField.Item label="2" value={2} />
          </RadioButtonGroupFormField>
        </Form>
      </Box>
    </Stack>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
