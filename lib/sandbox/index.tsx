import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'
import { useController, useFormContext } from 'react-hook-form'


import { Box, Flex, globalCss, TileToggleGroup, Form, Button, FieldWrapper, getFieldWrapperLabelId } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const TileToggleGroupField = ({
  css,
  label,
  name,
  validation,
  description,
  defaultValue = [],
  value,
  onValueChange,
  prompt,
  hideLabel,
  ...remainingProps
}) => {
  const { control, errors } = useFormContext()
  const error = errors?.[name]?.message
  console.log(error)
  const {
    field: { ref, onChange, value: innerValue, name: innerName },
  } = useController({

    name,
    control,
    rules: {
      validate: {
        required: (data) => {
          console.log({ data })
          if (!validation.required) return
          if (!!data.length) return
          return 'Please select an option'
        }
      }
    },
    defaultValue: defaultValue
  })
  console.log(error)
  return (
    <FieldWrapper
      css={css}
      description={description}
      error={error}
      fieldId={name}
      hideLabel={hideLabel}
      label={label}
      prompt={prompt}
      required={Boolean(validation?.required)}
    >
      <TileToggleGroup
        ref={ref}
        aria-labelledby={getFieldWrapperLabelId(innerName)}
        type="multiple"
        defaultValue={defaultValue}
        value={innerValue}
        onValueChange={(newValue) => {
          onChange(newValue)
          onValueChange?.(newValue)
        }}
        {...remainingProps}
      >
        <TileToggleGroup.Item value="a">A</TileToggleGroup.Item>
        <TileToggleGroup.Item value="b" disabled>
          B
        </TileToggleGroup.Item>
        <TileToggleGroup.Item value="c">C</TileToggleGroup.Item>
        <TileToggleGroup.Item value="d" disabled>
          D
        </TileToggleGroup.Item>
      </TileToggleGroup>
    </FieldWrapper>

  )

}

const App = () => (
  <Flex
    css={{
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}
  >
    <Form onSubmit={formData => console.log(formData)}>
      <TileToggleGroupField
        label='Label'
        name='name'
        validation={{ required: true }}
      />
      <Button type="submit">submit</Button>
    </Form>
  </Flex>
)

ReactDOM.render(<App />, document.getElementById('root'))
