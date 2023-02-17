import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'
import { useFormContext } from 'react-hook-form'

import {
  Box,
  Button,
  Flex,
  globalCss,
  Form,
  InputField,
  Input,
  TextareaField,
  NumberInput,
  Tooltip,
  DateField,
  CheckboxField,
  RadioButtonField,
  SearchField
} from '../src'
import { Checkbox } from '@radix-ui/react-checkbox'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const CreatePasswordField = ({ watch }) => {
  const value = watch('password') || ''
  console.log('value:', value)
  return (
    <InputField
      name="password"
      label="Create Password"
      required
      validation={{
        validate: {
          one: (value) => value.includes('1')
        }
      }}
      messages={[
        {
          theme: value.length >= 7 ? 'success' : 'error',
          text: '7+ characters'
        },
        {
          theme: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].some((num) =>
            value.includes(num)
          )
            ? 'success'
            : 'error',
          text: 'Must include a number'
        },
        {
          theme: ['!', '-', '_'].some((symbol) => value.includes(symbol))
            ? 'success'
            : 'error',
          text: 'Must include a special character'
        }
      ]}
      css={{ mb: '$3', minWidth: '300px' }}
    />
  )
}

const Content = () => {
  const { errors } = useFormContext()

  return (
    <Flex
      css={{
        minHeight: '100vh',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        pt: '200px'
      }}
    >
      {/* <CreatePasswordField /> */}
      {/* <InputField
        name="firstName"
        label="Password"
        required
        validation={{
          criteriaMode: 'all',
          minLength: { value: 3, message: 'Must be 3 characters long' },
          validate: {
            required: 'This is required'
          }
        }}
        description="This is a description"
        css={{ mb: '$3' }}
        feedbackDirection="row"
        messages={[{ theme: 'success', text: 'Well done!' }]}
      /> */}
      {/* <TextareaField
        name="description"
        label="Description"
        css={{ mb: '$3' }}
        required
        criteriaMode="all"
        validation={{
          minLength: { value: 10, message: 'Must be 10 chars' },
          required: 'This is required',
          validate: {
            hasSpecialChar: (value) =>
              value.includes('!') || 'Must contain a special character'
          }
        }}
      /> */}
      {/* <NumberInputField
        name="number"
        label="Number"
        css={{ mb: '$3' }}
        criteriaMode="all"
        validation={{
          required: 'This is required',
          min: { value: 10, message: 'Must be 10 or more' },
          max: { value: 20, message: 'Must be 20 or less' }
        }}
      /> */}
      {/* <DateField
        name="date"
        label="Date"
        required
        criteriaMode="all"
        validation={{
          required: 'This is required',
          validate: {
            isToday: (value) => {
              const today = new Date()
              const date = new Date(value)
              return date.getDate() == today.getDate() || 'Must be today'
            }
          }
        }}
      /> */}
      {/* <CheckboxField
        name="checkbox"
        label="Checkbox"
        required
        criteriaMode="all"
      /> */}
      {/* <RadioButtonField
        name="radio"
        label="Radio"
        required
        criteriaMode="all"
        validation={{
          validate: {
            mustBeTwo: (value) => {
              console.log('value:', value)
              return value == 2 || 'must be two'
            }
          }
        }}
      >
        <RadioButtonField.Item value="1" label="1" />
        <RadioButtonField.Item value="2" label="2" />
      </RadioButtonField> */}
      {/* <SearchField
        name="search"
        label="Search"
        required
        validation={{ required: 'this is required' }}
      /> */}
      <Button type="submit">Submit</Button>
    </Flex>
  )
}

const App = () => {
  return (
    <Tooltip.Provider>
      <Flex
        css={{
          minHeight: '100vh',
          // justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          pt: '200px'
        }}
      >
        <Form
          onSubmit={console.log}
          validationMode="onBlur"
          render={({ watch }) => {
            return <CreatePasswordField watch={watch} />
          }}
        />
      </Flex>
    </Tooltip.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
