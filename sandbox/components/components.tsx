import {
  Add,
  ArrowRight,
  BatteryMedium,
  Crossing,
  EyeCrossed,
  Paperclip,
  Sun,
  VolumeLoud,
  Wheelchair
} from '@atom-learning/icons'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import {
  ActionIcon,
  AlertProvider,
  Box,
  Button,
  Carousel,
  CheckboxField,
  Combobox,
  Dialog,
  Divider,
  Flex,
  Form,
  globalCss,
  Heading,
  Icon,
  Image,
  InlineFieldWrapper,
  InputField,
  Label,
  Link,
  List,
  Loader,
  MarkdownContent,
  PasswordField,
  Popover,
  ProgressBar,
  RadioGroupField,
  SelectField,
  Stack,
  Switch,
  Tabs,
  Text,
  TextareaField,
  Tooltip,
  useAlert,
  ValidationError,
  Video
} from '../../src'

globalCss(reset)()

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="350"
    height="96"
    fill="none"
    viewBox="0 0 350 96"
  >
    <defs />
    <path
      fill="#F74E4E"
      d="M234.2 93.5a2.2 2.2 0 01-2.2 2.1h-96.4a2.2 2.2 0 01-2.2-2.2 49.8 49.8 0 0150.4-48.3 49.7 49.7 0 0150.4 48.2v.2zm-10-53.4a10 10 0 100-19.9 10 10 0 000 19.9z"
    />
    <path
      fill="#FFB71B"
      d="M86.6 93.4a2.2 2.2 0 01-2.2 2.2H2.8a2.2 2.2 0 01-2.2-2.2c0-.5.2-.9.4-1.3l40.7-70.9a2.4 2.4 0 011.9-1 2.2 2.2 0 011.8 1l40.8 71c.2.3.4.7.4 1.2z"
    />
    <path
      fill="#4FBF5E"
      d="M347.4 20.2c-.4 0-.8.2-1.1.4l-48.6 36c-.3.2-.7.4-1.1.4-.4 0-.8-.1-1-.4h-.2l-48.1-35.9a1.9 1.9 0 00-1.1-.3 2.1 2.1 0 00-2 2.2v70.8a2.1 2.1 0 002 2.2h101.2a2.1 2.1 0 002-2.2v-71a2.2 2.2 0 00-2-2.2z"
    />
    <path
      fill="#71C5FF"
      d="M136 20.4h-11.6a1.1 1.1 0 01-1.1-1.1V2.6a2.2 2.2 0 00-2.2-2.2H98.8a2.2 2.2 0 00-2.3 2.2v90.8a2.2 2.2 0 002.2 2.2H121a2.2 2.2 0 002.3-2.2V48.2a1.1 1.1 0 01.3-.7 1 1 0 01.8-.4H136a2.2 2.2 0 002.2-2.2V22.6a2.2 2.2 0 00-2.2-2.2z"
    />
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h348.8v95.2H0z" transform="translate(.6 .4)" />
      </clipPath>
    </defs>
  </svg>
)

const AlertComponent = () => {
  const { showAlert } = useAlert()

  return (
    <Button
      onClick={() => {
        showAlert({
          id: 'something',
          title: 'Are you sure you want to delete this school?',
          description:
            'Removing this last selected school will remove all restrictions on the exam and make it available to all schools.',
          confirmActionText: 'Delete school',
          cancelActionText: 'Back',
          onAction: (result) => {
            if (result) console.log('Confirmation')
          }
        })
      }}
    >
      Delete school
    </Button>
  )
}

const Bucket = ({ name, children }) => (
  <>
    <Heading css={{ mb: '$5' }}>{name}</Heading>
    {children}
    <Divider css={{ my: '$6' }} />
  </>
)
Bucket.Section = ({ gap = '$3', css = {}, ...props }) => (
  <Flex css={{ flexWrap: 'wrap', mb: '$5', gap, ...(css as any) }} {...props} />
)

const App = () => (
  <AlertProvider>
    <Box css={{ p: '$5', maxWidth: 1100, m: 'auto' }}>
      <Logo />

      <Bucket name="Buttons">
        <Bucket.Section>
          <Button size="sm">Button</Button>
          <Button size="sm" appearance="outline">
            Button
          </Button>
          <Button size="sm" theme="success">
            Button
          </Button>
          <Button size="sm" theme="warning">
            Button
          </Button>
          <Button size="sm" theme="danger">
            Button
          </Button>
          <Box css={{ width: '100%' }} />
          <Button size="sm" isLoading>
            Button
          </Button>
          <Button size="sm" isLoading appearance="outline">
            Button
          </Button>
          <Button size="sm" theme="success" isLoading>
            Button
          </Button>
          <Button size="sm" theme="warning" isLoading>
            Button
          </Button>
          <Button size="sm" theme="danger" isLoading>
            Button
          </Button>
          <Box css={{ width: '100%' }} />
          <Button size="sm" isRounded>
            Button
          </Button>
          <Button size="sm" appearance="outline" isRounded>
            Button
          </Button>
          <Button size="sm" theme="success" isRounded>
            Button
          </Button>
          <Button size="sm" theme="warning" isRounded>
            Button
          </Button>
          <Button size="sm" theme="danger" isRounded>
            Button
          </Button>
          <Box css={{ width: '100%' }} />
          <Button size="sm" isLoading isRounded>
            Button
          </Button>
          <Button size="sm" isLoading appearance="outline" isRounded>
            Button
          </Button>
          <Button size="sm" theme="success" isLoading isRounded>
            Button
          </Button>
          <Button size="sm" theme="warning" isLoading isRounded>
            Button
          </Button>
          <Button size="sm" theme="danger" isLoading isRounded>
            Button
          </Button>
        </Bucket.Section>
        <Bucket.Section>
          <Button>Button</Button>
          <Button appearance="outline">Button</Button>
          <Button theme="success">Button</Button>
          <Button theme="warning">Button</Button>
          <Button theme="danger">Button</Button>
          <Box css={{ width: '100%' }} />
          <Button isLoading>Button</Button>
          <Button isLoading appearance="outline">
            Button
          </Button>
          <Button theme="success" isLoading>
            Button
          </Button>
          <Button theme="warning" isLoading>
            Button
          </Button>
          <Button theme="danger" isLoading>
            Button
          </Button>
          <Box css={{ width: '100%' }} />
          <Button isRounded>Button</Button>
          <Button appearance="outline" isRounded>
            Button
          </Button>
          <Button theme="success" isRounded>
            Button
          </Button>
          <Button theme="warning" isRounded>
            Button
          </Button>
          <Button theme="danger" isRounded>
            Button
          </Button>
          <Box css={{ width: '100%' }} />
          <Button isLoading isRounded>
            Button
          </Button>
          <Button isLoading appearance="outline" isRounded>
            Button
          </Button>
          <Button theme="success" isLoading isRounded>
            Button
          </Button>
          <Button theme="warning" isLoading isRounded>
            Button
          </Button>
          <Button theme="danger" isLoading isRounded>
            Button
          </Button>
        </Bucket.Section>

        <Bucket.Section>
          <Button size="sm">
            <Icon is={Add} />
            Button
          </Button>
          <Button size="sm">
            Button
            <Icon is={ArrowRight} />
          </Button>
          <Button size="sm" appearance="outline">
            <Icon is={Add} />
            Button
          </Button>
          <Button size="sm" appearance="outline">
            Button
            <Icon is={ArrowRight} />
          </Button>
          <Box css={{ width: '100%' }} />
          <Button>
            <Icon is={Add} />
            Button
          </Button>
          <Button>
            Button
            <Icon is={ArrowRight} />
          </Button>
          <Button appearance="outline">
            <Icon is={Add} />
            Button
          </Button>
          <Button appearance="outline">
            Button
            <Icon is={ArrowRight} />
          </Button>
        </Bucket.Section>
        <Bucket.Section>
          <Button disabled>Button</Button>
          <Button disabled isRounded>
            Button
          </Button>
          <Button disabled isLoading>
            Button
          </Button>
          <Button appearance="outline" disabled>
            Button
          </Button>
        </Bucket.Section>
      </Bucket>
      <Bucket name="Icons">
        <Bucket.Section>
          <Icon size="xs" is={BatteryMedium} />
          <Icon size="xs" css={{ color: '$primary' }} is={Crossing} />
          <Icon size="xs" css={{ color: '$success' }} is={Sun} />
          <Icon size="xs" css={{ color: '$warning' }} is={Wheelchair} />
          <Icon size="xs" css={{ color: '$danger' }} is={EyeCrossed} />
        </Bucket.Section>
        <Bucket.Section>
          <Icon size="sm" is={BatteryMedium} />
          <Icon size="sm" css={{ color: '$primary' }} is={Crossing} />
          <Icon size="sm" css={{ color: '$success' }} is={Sun} />
          <Icon size="sm" css={{ color: '$warning' }} is={Wheelchair} />
          <Icon size="sm" css={{ color: '$danger' }} is={EyeCrossed} />
        </Bucket.Section>
        <Bucket.Section>
          <Icon is={BatteryMedium} />
          <Icon css={{ color: '$primary' }} is={Crossing} />
          <Icon css={{ color: '$success' }} is={Sun} />
          <Icon css={{ color: '$warning' }} is={Wheelchair} />
          <Icon css={{ color: '$danger' }} is={EyeCrossed} />
        </Bucket.Section>
        <Bucket.Section>
          <Icon size="lg" is={BatteryMedium} />
          <Icon css={{ color: '$primary' }} size="lg" is={Crossing} />
          <Icon css={{ color: '$success' }} size="lg" is={Sun} />
          <Icon css={{ color: '$warning' }} size="lg" is={Wheelchair} />
          <Icon css={{ color: '$danger' }} size="lg" is={EyeCrossed} />
        </Bucket.Section>
      </Bucket>
      <Bucket name="Action Icons">
        <Bucket.Section>
          <ActionIcon label="Attach a file" appearance="simple">
            <Icon is={VolumeLoud} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="subtle">
            <Icon is={Add} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="outline">
            <Icon is={Paperclip} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="solid">
            <Icon is={EyeCrossed} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="simple" theme="success">
            <Icon is={VolumeLoud} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="subtle" theme="success">
            <Icon is={Add} size="sm" />
          </ActionIcon>
          <ActionIcon
            label="Attach a file"
            appearance="outline"
            theme="success"
          >
            <Icon is={Paperclip} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="solid" theme="success">
            <Icon is={EyeCrossed} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="simple" theme="warning">
            <Icon is={VolumeLoud} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="subtle" theme="warning">
            <Icon is={Add} size="sm" />
          </ActionIcon>
          <ActionIcon
            label="Attach a file"
            appearance="outline"
            theme="warning"
          >
            <Icon is={Paperclip} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="solid" theme="warning">
            <Icon is={EyeCrossed} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="simple" theme="danger">
            <Icon is={VolumeLoud} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="subtle" theme="danger">
            <Icon is={Add} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="outline" theme="danger">
            <Icon is={Paperclip} size="sm" />
          </ActionIcon>
          <ActionIcon label="Attach a file" appearance="solid" theme="danger">
            <Icon is={EyeCrossed} size="sm" />
          </ActionIcon>
        </Bucket.Section>
        <Bucket.Section>
          <ActionIcon size="lg" label="Attach a file" appearance="simple">
            <Icon is={VolumeLoud} />
          </ActionIcon>
          <ActionIcon size="lg" label="Attach a file" appearance="subtle">
            <Icon is={Add} />
          </ActionIcon>
          <ActionIcon size="lg" label="Attach a file" appearance="outline">
            <Icon is={Paperclip} />
          </ActionIcon>
          <ActionIcon size="lg" label="Attach a file" appearance="solid">
            <Icon is={EyeCrossed} />
          </ActionIcon>
        </Bucket.Section>
      </Bucket>
      <Bucket name="Loaders">
        <Bucket.Section gap="$4">
          <Loader size="sm" />
          <Loader />
          <Loader size="lg" />
        </Bucket.Section>
        <Bucket.Section gap="$4">
          <Loader size="sm" css={{ color: '$primary' }} />
          <Loader css={{ color: '$primary' }} />
          <Loader size="lg" css={{ color: '$primary' }} />
        </Bucket.Section>
      </Bucket>
      <Bucket name="Typography">
        <Bucket.Section gap="$5" css={{ flexDirection: 'column' }}>
          <Heading size="xs">This is a heading size xs</Heading>
          <Heading size="sm">This is a heading size sm</Heading>
          <Heading size="md">This is a heading size md</Heading>
          <Heading size="lg">This is a heading size lg</Heading>
          <Heading size="xl">This is a heading size xl</Heading>
          <Heading size="xxl">This is a heading size xxl</Heading>
          <Text size="sm">
            This is a sm Paragraph. A really long paragraph of text, to
            demonstrate prose text, like for example, the kind you might read in
            a blog post. The reason we're using prose here is because the most
            common use case for this container size is longform text. So we're
            previewing some longform text here so we can make sure the container
            width provides an optimal line length for this font size.
          </Text>
          <Text>
            This is a Paragraph. A really long paragraph of text, to demonstrate
            prose text, like for example, the kind you might read in a blog
            post. The reason we're using prose here is because the most common
            use case for this container size is longform text. So we're
            previewing some longform text here so we can make sure the container
            width provides an optimal line length for this font size.
          </Text>
          <Text size="lg">
            This is a lg Paragraph. A really long paragraph of text, to
            demonstrate prose text.
          </Text>
          <Text size="xl">
            This is a xl Paragraph. A really long paragraph of text, to
            demonstrate prose text.
          </Text>
          <Text size="sm">
            This is a sm Paragraph with a <Link>Link</Link>. A really long
            paragraph of text, to demonstrate prose text, like for example.
          </Text>
          <Text>
            This is a Paragraph with a <Link>Link</Link>. A really long
            paragraph of text, to demonstrate prose text, like for example.
          </Text>
          <Text size="lg">
            This is a lg Paragraph with a <Link>Link</Link>. A really long
            paragraph of text, to demonstrate prose text, like for example.
          </Text>
          <Heading>
            This is a Heading with a <Link>Link</Link>.
          </Heading>
          <Link>This is a Link</Link>
          <Link>
            This is a Link with an icon <Icon size="sm" is={ArrowRight} />
          </Link>
        </Bucket.Section>
        <Bucket.Section>
          <List>
            <List.Item>This is a List</List.Item>
            <List.Item>With multiple List.Items</List.Item>
            <List.Item>And even more content here</List.Item>
          </List>
          <List size="sm">
            <List.Item>This is a List</List.Item>
            <List.Item>With multiple List.Items</List.Item>
            <List.Item>And even more content here</List.Item>
          </List>
        </Bucket.Section>
        <Bucket.Section>
          <List ordered>
            <List.Item>This is a List</List.Item>
            <List.Item>With multiple List.Items</List.Item>
            <List.Item>And even more content here</List.Item>
          </List>
          <List ordered size="sm">
            <List.Item>This is a List</List.Item>
            <List.Item>With multiple List.Items</List.Item>
            <List.Item>And even more content here</List.Item>
          </List>
        </Bucket.Section>
      </Bucket>
      <Bucket name="Markdown">
        <MarkdownContent
          content={`
# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

- Create a list by starting a line with \`+\`, \`-\`, or \`\*\`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as \`1.\`

This is inline \`code\`

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

\`\`\`
Sample text here...
\`\`\`

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')"
`}
        />
      </Bucket>
      <Bucket name="Forms">
        <Bucket.Section>
          <Form
            onSubmit={() => null}
            css={{ display: 'flex', gap: '$5', flexDirection: 'column' }}
          >
            <InputField
              name="input"
              label="Input field"
              placeholder="your.name@example.com"
              type="email"
            />
            <InputField
              required
              name="input-email"
              label="Required input field"
              placeholder="your.name@example.com"
              type="email"
            />
            <InputField
              name="input-prompt"
              label="Input field with prompt"
              placeholder="your.name@example.com"
              type="email"
              prompt={{
                link: 'https://nowhere.com',
                label: 'This is the prompt'
              }}
            />
            <InputField
              name="input-description"
              label="Input field with description"
              placeholder="your.name@example.com"
              type="email"
              description="This is the description. The reason we're using prose here is because the most common use case for this container size is longform text."
            />
            <InputField
              disabled
              name="input"
              label="Input field"
              placeholder="your.name@example.com"
              type="email"
            />
            <TextareaField
              required
              placeholder="Placeholder"
              label="Textarea field"
              name="textarea"
            />
            <TextareaField
              placeholder="Placeholder"
              label="Textarea field with description"
              name="textarea-description"
              description="This is the description. The reason we're using prose here is because the most common use case for this container size is longform text."
            />
            <TextareaField
              disabled
              placeholder="Placeholder"
              label="Disabled textarea field"
              name="textarea-disabled"
            />
            <Box>
              <CheckboxField label="This is a checkbox" name="likeCheckboxes" />
              <CheckboxField
                label="This is a checkbox to demonstrate
              prose text, like for example, the kind you might read in a blog
              post. The reason we're using prose here is because the most common
              use case for this container size is longform text."
                name="likeCheckboxes2"
              />
              <CheckboxField
                disabled
                label="This is a disabled checkbox"
                name="likeCheckboxes"
              />
            </Box>
            <RadioGroupField
              direction="row"
              name="pronoun"
              label="Legend for radio fields"
              description="This is the description. The reason we're using prose here is because the most common."
            >
              <RadioGroupField.Item label="He/Him" value="checkbox-row-1" />
              <RadioGroupField.Item label="She/Her" value="checkbox-row-2" />
              <RadioGroupField.Item label="They/Their" value="checkbox-row-3" />
            </RadioGroupField>
            <RadioGroupField name="options" label="Legend for radio fields">
              <RadioGroupField.Item label="This is a radio button" value="1" />
              <RadioGroupField.Item
                label="This is a radio button to demonstrate
            prose text, like for example, the kind you might read in a blog
            post. The reason we're using prose here is because the most common
            use case for this container size is longform text."
                value="2"
              />
              <RadioGroupField.Item
                disabled
                label="This is a disabled radio button"
                value="3"
              />
            </RadioGroupField>
            <PasswordField
              name="password"
              prompt={{
                link: '/forgot-password',
                label: 'Forgotten your password?'
              }}
              placeholder="Your password"
            />
            <SelectField name="something" label="Choose your favourite fruit">
              <option value="apples">Apples</option>
              <option value="bananas">Bananas</option>
              <option value="oranges" disabled>
                Oranges
              </option>
            </SelectField>
            <SelectField
              disabled
              placeholder="Please select a fruit"
              name="select-error"
              label="Choose your favourite fruit"
              validation={{ required: 'This is the validation error' }}
            >
              <option value="apples">Apples</option>
              <option value="bananas">Bananas</option>
            </SelectField>
            <Box>
              <Label css={{ mb: '$3' }} htmlFor="yolo">
                Something else about fruit
              </Label>
              <Combobox openOnFocus>
                <Combobox.Input id="yolo" />
                <Combobox.Popover>
                  <Combobox.List>
                    <Combobox.Option value="Apple" />
                    <Combobox.Option value="Banana" />
                    <Combobox.Option value="Cranberry" />
                    <Combobox.Option value="Dragon fruit" />
                  </Combobox.List>
                </Combobox.Popover>
              </Combobox>
            </Box>
            <InlineFieldWrapper
              css={{ width: 'max-content' }}
              label="Do a switch thing"
              description="This is the description. The reason we're using prose here is because the most common use case for this container size is longform text."
              reverse
            >
              <Switch />
            </InlineFieldWrapper>
            <CheckboxField
              label="This is a checkbox"
              name="likeCheckboxes"
              description="This is the description. The reason we're using prose here is because the most common use case for this container size is longform text."
            />
          </Form>
        </Bucket.Section>
        <Bucket.Section>
          <Form
            css={{ display: 'flex', gap: '$5', flexDirection: 'column' }}
            render={() => (
              <>
                <Button size="sm" type="submit">
                  Click to show validation errors
                </Button>
                <ValidationError>
                  This is a validation error unattached to a form field
                </ValidationError>

                <InputField
                  name="input-error"
                  label="Input field with error"
                  placeholder="your.name@example.com"
                  validation={{ required: 'This is the validation error' }}
                />
                <InputField
                  name="input-error-description"
                  label="Input field with error and description"
                  placeholder="your.name@example.com"
                  description="This is the description. The reason we're using prose here is because the most common use case for this container size is longform text."
                  validation={{ required: 'This is the validation error' }}
                />
                <TextareaField
                  validation={{ required: 'This is the validation error' }}
                  label="Textarea field with error"
                  name="textarea-error"
                />
                <SelectField
                  placeholder="Please select a fruit"
                  name="select-error"
                  label="Choose your favourite fruit"
                  validation={{ required: 'This is the validation error' }}
                >
                  <option value="apples">Apples</option>
                  <option value="bananas">Bananas</option>
                </SelectField>
                <CheckboxField
                  label="This is a checkbox"
                  name="checkbox-error"
                  required
                  validation={{ required: 'This is the validation error' }}
                />
                <RadioGroupField
                  name="options-error"
                  label="Legend for radio fields"
                  required
                  validation={{ required: 'This is the validation error' }}
                >
                  <RadioGroupField.Item
                    label="This is a radio button"
                    value="1"
                  />
                  <RadioGroupField.Item
                    label="This is another radio button"
                    value="2"
                  />
                </RadioGroupField>
              </>
            )}
          />
        </Bucket.Section>
      </Bucket>
      <Bucket name="Media">
        <Bucket.Section>
          <ProgressBar aria-label="Completion rate" value={20} />
          <ProgressBar
            theme="success"
            value={40}
            aria-label="Completion rate"
          />
          <ProgressBar
            theme="warning"
            value={60}
            aria-label="Completion rate"
          />
          <ProgressBar theme="danger" value={80} aria-label="Completion rate" />
        </Bucket.Section>
        <Bucket.Section css={{ flexDirection: 'column' }}>
          <Tabs defaultValue="tab1">
            <Tabs.TriggerList>
              <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
              <Tabs.Trigger disabled value="tab4">
                Disabled tab
              </Tabs.Trigger>
            </Tabs.TriggerList>
            <Tabs.Content value="tab1" css={{ p: '$4' }}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Tabs.Content>
            <Tabs.Content value="tab2" css={{ p: '$4' }}>
              <Text>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </Text>
            </Tabs.Content>
            <Tabs.Content value="tab3" css={{ p: '$4' }}>
              <Text>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae.
              </Text>
            </Tabs.Content>
          </Tabs>
          <Image
            src="https://atomlearning.co.uk/images/key-img.png"
            alt="An Atom Learning user riding a pencil rocket"
          />
          <Video css={{ width: 400 }} id="453650357" />
          <Carousel
            slideWidth={200}
            slideHeight={200}
            numSlides={3}
            css={{ position: 'relative' }}
          >
            <Carousel.ArrowPrevious
              css={{ position: 'absolute', left: '$2' }}
            />
            <Carousel.ArrowNext css={{ position: 'absolute', right: '$2' }} />
            <Carousel.Slider aria-label="Example carousel" css={{ mb: '$5' }}>
              <Carousel.Slide index={1} aria-label="Slide 1">
                <Box css={{ bg: '$primary', size: 200 }} />
              </Carousel.Slide>
              <Carousel.Slide index={2} aria-label="Slide 2">
                <Box css={{ bg: '$primary', size: 200 }} />
              </Carousel.Slide>
              <Carousel.Slide index={3} aria-label="Slide 3">
                <Box css={{ bg: '$primary', size: 200 }} />
              </Carousel.Slide>
            </Carousel.Slider>
            <Carousel.Pagination css={{ mx: 'auto', width: 'max-content' }} />
          </Carousel>
        </Bucket.Section>
      </Bucket>
      <Bucket name="Popups">
        <Bucket.Section>
          <Tooltip open>
            <Tooltip.Trigger>
              <Text>Hover on me</Text>
            </Tooltip.Trigger>
            <Tooltip.Content>
              This is the tooltip content, Button
            </Tooltip.Content>
          </Tooltip>
        </Bucket.Section>
        <Bucket.Section>
          <Popover>
            <Popover.Trigger>
              <Button>Click me</Button>
            </Popover.Trigger>
            <Popover.Content>
              <Heading size="xs" css={{ mb: '$4' }}>
                Popover
              </Heading>
              <Text size="sm">
                The `Popover` can display any type of element as a trigger and
                has the content hidden by default
              </Text>
            </Popover.Content>
          </Popover>
        </Bucket.Section>
        <Bucket.Section>
          <AlertComponent />
        </Bucket.Section>
        <Bucket.Section>
          <Dialog>
            <Dialog.Trigger>
              <Button>Click me</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Heading size="sm" css={{ mb: '$5' }}>
                Dialog
              </Heading>
              <Text css={{ mb: '$5' }}>
                The `Dialog` can display any type of element as a trigger and
                has the content hidden by default
              </Text>
              <Flex css={{ justifyContent: 'flex-end' }}>
                <Button appearance="outline" size="sm" as={Dialog.Close}>
                  Close Dialog
                </Button>
              </Flex>
            </Dialog.Content>
          </Dialog>
        </Bucket.Section>
      </Bucket>
    </Box>
  </AlertProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
