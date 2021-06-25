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
      </Bucket>
      <Bucket name="Forms">
        <Bucket.Section>
          <Form
            onSubmit={() => null}
            css={{ display: 'flex', gap: '$5', flexDirection: 'column' }}
          >
            <InputField
              name="Email address"
              label="Email address"
              placeholder="your.name@example.com"
              type="email"
            />
            <InputField
              required
              name="Email address"
              label="Email address"
              placeholder="your.name@example.com"
              type="email"
            />
            <InputField
              required
              name="Email address"
              label="Email address"
              placeholder="your.name@example.com"
              type="email"
              prompt={{
                link: 'https://nowhere.com',
                label: 'This is the prompt'
              }}
            />
            <TextareaField
              placeholder="Something else"
              label="Write something"
              name="example"
              id="example"
            />
            <Box>
              <CheckboxField
                label="This is a checkbox?"
                name="likeCheckboxes"
              />
              <CheckboxField
                label="This is a checkbox to demonstrate
            prose text, like for example, the kind you might read in a blog
            post. The reason we're using prose here is because the most common
            use case for this container size is longform text."
                name="likeCheckboxes2"
              />
            </Box>
            <RadioGroupField name="options" label="Garys messages">
              <RadioGroupField.Item label="This is a radio button" value="1" />
              <RadioGroupField.Item
                label="This is a radio button to demonstrate
            prose text, like for example, the kind you might read in a blog
            post. The reason we're using prose here is because the most common
            use case for this container size is longform text."
                value="2"
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
            </SelectField>
            <Box>
              <Label css={{ mb: '$2' }} htmlFor="yolo">
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
              reverse
            >
              <Switch />
            </InlineFieldWrapper>
            <ValidationError>Email address is a required field</ValidationError>
            <InputField
              error={{ message: 'Yolo this is the error' }}
              name="Email address"
              label="Email address"
              type="email"
            />
          </Form>
        </Bucket.Section>
      </Bucket>
      <Bucket name="Media">
        <Bucket.Section>
          <ProgressBar value={10} />
          <ProgressBar
            theme="secondary"
            value={20}
            aria-label="Completion rate"
          />
          <ProgressBar
            theme="tertiary"
            value={30}
            aria-label="Completion rate"
          />
          <ProgressBar
            theme="success"
            value={40}
            aria-label="Completion rate"
          />
          <ProgressBar
            theme="warning"
            value={50}
            aria-label="Completion rate"
          />
          <ProgressBar theme="danger" value={60} aria-label="Completion rate" />
          <ProgressBar appearance="solid" value={10} />
          <ProgressBar
            appearance="solid"
            theme="secondary"
            value={20}
            aria-label="Completion rate"
          />
          <ProgressBar
            appearance="solid"
            theme="tertiary"
            value={30}
            aria-label="Completion rate"
          />
          <ProgressBar
            appearance="solid"
            theme="success"
            value={40}
            aria-label="Completion rate"
          />
          <ProgressBar
            appearance="solid"
            theme="warning"
            value={50}
            aria-label="Completion rate"
          />
          <ProgressBar
            appearance="solid"
            theme="danger"
            value={60}
            aria-label="Completion rate"
          />
        </Bucket.Section>
        <Bucket.Section css={{ flexDirection: 'column' }}>
          <Tabs defaultValue="tab1">
            <Tabs.TriggerList>
              <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
            </Tabs.TriggerList>
            <Tabs.Content value="tab1" css={{ p: '$4' }}>
              <Text>
                Looking to escape into the beautifully blocky world of LEGO?
                Well, our gameplay video for LEGO Builder's Journey has you
                covered. This atmospheric puzzle game features the most
                realistic and accurately rendered LEGO elements in a game, ever!
              </Text>
            </Tabs.Content>
            <Tabs.Content value="tab2" css={{ p: '$4' }}>
              <Text>
                If the issue is that it's overlapping content on the screen that
                we're trying to access in the Cypress test, we might want to
                just minimize the chat window in the test?
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
                <Box css={{ bg: '$secondary', size: 200 }} />
              </Carousel.Slide>
              <Carousel.Slide index={3} aria-label="Slide 3">
                <Box css={{ bg: '$tertiary', size: 200 }} />
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
      </Bucket>
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
              The `Popover` can display any type of element as a trigger and has
              the content hidden by default
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
              The `Dialog` can display any type of element as a trigger and has
              the content hidden by default
            </Text>
            <Flex css={{ justifyContent: 'flex-end' }}>
              <Button appearance="outline" size="sm" as={Dialog.Close}>
                Close Dialog
              </Button>
            </Flex>
          </Dialog.Content>
        </Dialog>
      </Bucket.Section>
    </Box>
  </AlertProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
