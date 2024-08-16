---
slug: form
title: Form
links:
  viewSource: components/form
  showReportAnIssue: true
tabs:
  - content: >-
      Form abstracts form validation logic away from the view code


      ## General


      `Form` is a wrapper around an HTML `form` element and the `react-hook-form` library. It manages the call to `useForm()`, renders a `<FormProvider>` and manages validation. When validation happens depends on the `validationMode` prop, which accepts `"onBlur" | "onSubmit"` and defaults to `"onBlur"`.


      `Form` is compatible with all our field components (i.e. `InputField`, not `Input`) and is also compatible with custom fields so long as they call `useFormContext()` and use:


      * `register` or `control` to register with the form per `react-hook-form`’s docs

      * `errors` to display any errors for the relevant field


      Custom field components should also accept a `validation` prop of type `ValidationOptions` and apply it to the field when present.


      Here’s an example using a simplified version of our `InputField`:


      <CodeBlock code={`const InputField = ({ label, name, validation }) => {
        const { register, errors } = useFormContext()
        const ref = validation ? register(validation) : register


        const error = errors\[name\]?.message


        return (
          <FieldWrapper label={label} error={error} fieldId={name}>
            <Input id={name} name={name} ref={ref} />
          </FieldWrapper>
        )
      }`} language={"tsx"} />


      ## Form submission


      To handle form submission, `onSubmit` and optional `onError` callback props can be passed to Form. If there are any validation errors present `onError` will be called, in case of no errors the `onSubmit` will be called instead.


      ## ValidationOptions


      The `ValidationOptions` type provides preset logic for common validation and processing patterns. You can also define your own custom logic.


      ### Basic validation


      The `required` property accepts a `message` and a `value`. `value` is a boolean that represents whether the field is required. That pattern is only necessary when deciding dynamically whether to make a field required. If it will always be required, you can pass a `string` containing the error message instead. The following two inputs are equivalent:


      <CodeBlock code={`<Form>
        <InputField
          name="name"
          label="Name"
          validation={{
            required: {
              value: true,
              message: 'You must have a name'
            }
          }}
        />
        <InputField
          name="name"
          label="Name"
          validation={{
            required: 'You must have a name'
          }}
        />
        <Button>Submit</Button>
      </Form>`} language={"tsx"} />


      The following properties take a `message` and a `value`:


      * `min`

      * `max`

      * `minLength`

      * `maxLength`

      * `pattern`


      For example:


      <CodeBlock code={`<Form>
        <InputField
          type="number"
          name="numCats"
          label="Number of cats"
          validation={{
            min: {
              value: 3,
              message: 'You must have at least 3 cats!'
            }
          }}
        />
        <InputField
          name="faveName"
          label="Favourite cat name"
          validation={{
            maxLength: {
              value: 20,
              message: 'Cats hate long names!'
            }
          }}
        />
        <Button>Submit</Button>
      </Form>`} language={"tsx"} />


      Note that when specifying a `pattern`, the `value` is a `RegExp`. For the other basic properties listed here, `value` is a `number`.


      ### Custom validation


      The `validate` property accepts a function of type `(value: any) => boolean | string`. Its single argument is the current value of the field. It should return `true` if the value passes validation and a `string` containing an error if not.


      <CodeBlock code={`<Form>
        <InputField
          name="faveVowel"
          label="Favourite vowel"
          validation={{
            validate: (value) => {
              return (
                \['A', 'E', 'I', 'O', 'U'\].contains(value) || 'That’s not a vowel!'
              )
            }
          }}
        />
        <Button>Submit</Button>
      </Form>`} language={"tsx"} />


      ### Basic processing


      The following properties accept boolean values:


      * `valueAsNumber`

      * `valueAsDate`


      These properties only apply to text inputs. If `true`, the value will be converted to the relevant type after validation.


      ### Custom processing


      The `process` property accepts a function of type `(value: any) => any`. It can be used to process the value after validation.


      ## Composing form field components


      It’s easy to compose your own custom form fields from the low-level components in this library (`Input`, `Label`, `InlineMessage` etc) but there are some requirements that your new field must meet in order to be fully compatible with our `Form`.


      ### Props


      Your custom form field component must take the props specified in [General](https://design.atomlearning.technology/components/form#General)


      #### error


      `error` should be displayed in a `InlineMessage` when present. You don’t need to pass `error` to your component manually; the `Form` will pass it in automatically when appropriate.


      To properly retrieve the error in both static and dynamic fields it is necessary to use the `useFieldError` hook stored in the form directory, that accepts a field name parameter.


      #### validation


      `validation` allows users of your component to add custom validation rules to it as specified above


      #### register


      If you don’t need to add any default validation to your component, then pass `register?.(validation)` down to the `Input` (or `Select`, etc) component’s `ref` prop. If you do want to add default validation, pass something like this:


      ```

      register?.({
        maxLength: { value: 2, message: 'short data only!' },
        ...validation
      })

      ```


      (but check that validation is truthy first, or default it to an empty object!). Note that optional chaining is important here to protect from runtime errors if your field gets rendered outside of a `Form`.


      ### Examples


      Here are two email input field examples. The first is a wrapper around an `InputField` and the second is manually composed from lower-level components. If wrapping `InputField` is an option then you should take it, but for more complex use cases you can use the manual composition here as a guide.


      <CodeBlock code={`const EmailField = ({ name, register, error, validation = {}, ...rest }) => (
        <InputField
          name={name}
          css={{ mb: '$3' }}
          autoComplete="email"
          label="Email address"
          type="email"
          register={register}
          validation={{
            required: 'email address is required',
            pattern: {
              value: /.+@.+\..+/,
              message: 'please enter a valid email address'
            },
            ...validation
          }}
          error={error}
          {...rest}
        />
      )`} language={"tsx"} />


      <CodeBlock code={`const EmailField = ({ css, name, validation, required, ...rest }) => {
        const { errors, register } = useFormContext()


        const ref = validation ? register(validation) : register
        const error = errors\[name\]?.message


        return (
          <FieldWrapper css={css} label="Email address" fieldId={name}>
            <Input
              name={name}
              id={name}
              type="email"
              autoComplete="email"
              ref={register?.({
                required: 'email address is required',
                pattern: {
                  value: /.+@.+\..+/,
                  message: 'please enter a valid email address'
                },
                ...validation
              })}
              error={error}
              {...rest}
            />
            {error && <InlineMessage css={{ mt: '$1' }}>{error}</InlineMessage>}
          </FieldWrapper>
        )
      }`} language={"tsx"} />


      ## Accessing form data outside of fields


      The same object that `useFormContext` returns is available in an optional render prop function, making it easy to use the current form state to determine whether a button should be disabled or read the current value of a specific field. Note that if `render` is provided, `Form` should not be given any children. An error will be thrown if both are provided.


      <CodeBlock code={`<Form onSubmit={console.log}>
        {({ formState }) => (
          <>
            <InputField
              label="Name"
              name="name"
              validation={{ required: 'This field is required!' }}
            />
            <Button type="submit" disabled={!formState.isValid}>
              Submit
            </Button>
          </>
        )}
      </Form>`} language={"tsx"} />


      To access field value, another render prop that can be used is `watch(fieldName: string)`. If there were no default values provided for the form, on the first render, the `watch` function will return undefined.


      <CodeBlock code={`<Form onSubmit={console.log}>
        {({ watch }) => {
          const currentFieldValue = watch('name')

          return (
            <>
              <InputField
                label="Name"
                name="name"
                validation={{ required: 'This field is required!' }}
              />
              <Button type="submit" disabled={!formState.isValid}>
                Submit
              </Button>
            </>
          )
        }}
      </Form>`} language={"tsx"} />


      You can also name your `render` function:


      <CodeBlock code={`const SomeFormContent = ({ formState }) => (
        <>
          <InputField
            label="Name"
            name="name"
            validation={{ required: 'This field is required!' }}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Submit
          </Button>
        </>
      )

      const SomeForm = () => <Form onSubmit={console.log}><SomeFormComponent /></Form>`} language={"tsx"} />


      ## Dynamic fields - useFieldArray()


      [React-hook-form docs v6](https://react-hook-form.com/v6/api/#useFieldArray)


      To work with dynamically created fields `Form` exposes another render prop, `useFieldArray`. It exposes the following methods and objects:


      * `fields`: fields is an object keeping all the dynamic fields stored in the field array. Each entry in the field array can have multiple values (e.g \{ field: 'test', field2: true, field3: \[ 'item1', 'item2' \] }, for example for input, checkbox and select)

      * `append` and `prepend` are used to insert dynamic fields at the start and end of the array

      * `remove` and `insert` add or remove items at specified index

      * `move` and `swap` are used to reposition items in the array


      There are a few rules that need to be followed to make the dynamic fields work correctly in the context of the form:


      * For the mapping to work correctly, instead of using the index from a `map()` or some other id, it is required to pass ids generated by the `useFieldArray` hook.

      * Each dynamic field needs to take a default value from the fields object

      * Each field name needs to be in a specific format `fieldArrayName\[index\].fieldName`, where index is the second arg of `map` function

      * To initialize the useFieldArray hook a control object either from `useFormContext` or a Form render prop needs to be used.

        <CodeBlock code={`const { fields } = useFieldArray({
            control,
            name: 'testArray'
          })


          //////


          {
            fields.map((field, index) => (
              <CheckboxField
                defaultChecked={field.checkbox}
                label="Label"
                name={\`testArray\[$\{index}\].field2\`}
                key={field.id}
              />
            ))
          }`} language={"tsx"} />

        \
        Example:

      <CodeBlock code={`<Form
          defaultValues={{
            testArray: \[
              { field1: 'test', field2: true },
              { field1: 'test2', field2: true }
            ]
          }}
          >
          {({ control }) => {
            const { fields, append, remove } = useFieldArray({
              control,
              name: 'testArray'
            })


            return (
              <>
                {fields.map((field, index) => (
                  <div key={field.id}>
                    <InputField
                      label="Input"
                      name={\`testArray\[$\{index}\].field1\`}
                      defaultValue={field.field1}
                    />
                    <CheckboxField
                      label="Checkbox"
                      name={\`testArray\[$\{index}].field2\`}
                      defaultChecked={field.field2}
                    />
                  </div>
                ))}


                <button onClick={() => append({ field1: 'test', field2: false })}>
                  Add Item
                </button>
                <button onClick={() => remove(0)}>Remove first item</button>
              </>
            )
          }}
          </Form>`} language={"tsx"} />

      ## API Reference


      <ComponentProps component="Form" />
    title: Main
parent: J3bsmpB7-_uuqm05peuTA
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
---
