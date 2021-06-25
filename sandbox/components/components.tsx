import {
  Add,
  BatteryMedium,
  Clip,
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
    <Heading css={{ mb: '$4' }}>{name}</Heading>
    {children}
    <Divider css={{ my: '$5' }} />
  </>
)
Bucket.Section = ({ gap = '$2', ...props }) => (
  <Flex css={{ flexWrap: 'wrap', mb: '$4', gap }} {...props} />
)

const App = () => (
  <AlertProvider>
    <Box css={{ p: '$4', maxWidth: 1100, m: 'auto' }}>
      <Bucket name="Buttons">
        <Bucket.Section>
          <Button size="sm">Hello</Button>
          <Button>Hello</Button>
          <Button size="lg">Hello</Button>
        </Bucket.Section>
        <Bucket.Section>
          <Button theme="success">Hello</Button>
          <Button theme="danger">Hello</Button>
          <Button theme="warning">Hello</Button>
        </Bucket.Section>
        <Bucket.Section>
          <Button appearance="outline" size="sm">
            Hello
          </Button>
          <Button appearance="outline">Hello</Button>
          <Button appearance="outline" size="lg">
            Hello
          </Button>
        </Bucket.Section>
        <Bucket.Section>
          <Button isRounded>Hello</Button>
          <Button appearance="outline" isRounded>
            Hello
          </Button>
          <Button theme="success" isRounded>
            Hello
          </Button>
        </Bucket.Section>
        <Bucket.Section>
          <Button size="sm">
            <Icon is={Add} />
            Hello
          </Button>
          <Button>
            <Icon is={Add} />
            Hello
          </Button>
          <Button size="lg">
            <Icon is={Add} />
            Hello
          </Button>
        </Bucket.Section>
        <Bucket.Section>
          <Button theme="success" isLoading>
            <Icon is={Add} />
            Hello
          </Button>
          <Button theme="warning" isRounded>
            <Icon is={Add} />
            Hello
          </Button>
        </Bucket.Section>
      </Bucket>
      <Bucket name="Icons">
        <Bucket.Section>
          <Icon size="xs" is={BatteryMedium} />
          <Icon size="xs" css={{ color: '$primary' }} is={Crossing} />
          <Icon size="xs" css={{ color: '$tertiary' }} is={Paperclip} />
          <Icon size="xs" css={{ color: '$success' }} is={Sun} />
          <Icon size="xs" css={{ color: '$warning' }} is={Wheelchair} />
          <Icon size="xs" css={{ color: '$danger' }} is={EyeCrossed} />
        </Bucket.Section>
        <Bucket.Section>
          <Icon size="sm" is={BatteryMedium} />
          <Icon size="sm" css={{ color: '$primary' }} is={Crossing} />
          <Icon size="sm" css={{ color: '$tertiary' }} is={Paperclip} />
          <Icon size="sm" css={{ color: '$success' }} is={Sun} />
          <Icon size="sm" css={{ color: '$warning' }} is={Wheelchair} />
          <Icon size="sm" css={{ color: '$danger' }} is={EyeCrossed} />
        </Bucket.Section>
        <Bucket.Section>
          <Icon is={BatteryMedium} />
          <Icon css={{ color: '$primary' }} is={Crossing} />
          <Icon css={{ color: '$tertiary' }} is={Paperclip} />
          <Icon css={{ color: '$success' }} is={Sun} />
          <Icon css={{ color: '$warning' }} is={Wheelchair} />
          <Icon css={{ color: '$danger' }} is={EyeCrossed} />
        </Bucket.Section>
        <Bucket.Section>
          <Icon size="lg" is={BatteryMedium} />
          <Icon css={{ color: '$primary' }} size="lg" is={Crossing} />
          <Icon css={{ color: '$tertiary' }} size="lg" is={Paperclip} />
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
      <Bucket name="Typography">
        <Bucket.Section gap="$4">
          <Heading size="xs">
            Looking to escape into the beautifully blocky world of LEGO?
          </Heading>
          <Heading size="sm">
            Looking to escape into the beautifully blocky world of LEGO?
          </Heading>
          <Heading size="md">
            Looking to escape into the beautifully blocky world of LEGO?
          </Heading>
          <Heading size="lg">
            Looking to escape into the beautifully blocky world of LEGO?
          </Heading>
          <Heading size="xl">
            Looking to escape into the beautifully blocky world of LEGO?
          </Heading>
          <Text size="sm">
            Looking to escape into the beautifully blocky world of LEGO? Well,
            our gameplay video for LEGO Builder's Journey has you covered. This
            atmospheric puzzle game features the most realistic and accurately
            rendered LEGO elements in a game, ever!
          </Text>
          <Text>
            Looking to escape into the beautifully blocky world of LEGO? Well,
            our gameplay video for LEGO Builder's Journey has you covered. This
            atmospheric puzzle game features the most realistic and accurately
            rendered LEGO elements in a game, ever!
          </Text>
          <Text size="lg">
            Looking to escape into the beautifully blocky world of LEGO? Well,
            our gameplay video for LEGO Builder's Journey has you covered. This
            atmospheric puzzle game features the most realistic and accurately
            rendered LEGO elements in a game, ever!
          </Text>
          <Text size="xl">
            Looking to escape into the beautifully blocky world of LEGO? Well,
            our gameplay video for LEGO Builder's Journey has you covered. This
            atmospheric puzzle game features the most realistic and accurately
            rendered LEGO elements in a game, ever!
          </Text>
        </Bucket.Section>
        <Bucket.Section gap="$4">
          <Text size="sm">
            Looking to escape into the beautifully blocky world of LEGO? Well,
            our gameplay <Link>video for LEGO Builder's Journey</Link> has you
            covered. This atmospheric puzzle game features the most realistic
            and accurately rendered LEGO elements in a game, ever!
          </Text>
          <Heading>
            Looking to escape into the beautifully blocky world of{' '}
            <Link>LEGO</Link>?
          </Heading>
          <Link>video for LEGO Builder's</Link>
        </Bucket.Section>
        <Bucket.Section>
          <List>
            <List.Item>Personalised learning journey</List.Item>
            <List.Item>Adaptive learning to maximise engagement</List.Item>
            <List.Item>Comprehensive, teacher-approved content</List.Item>
            <List.Item>Unlimited, adaptive mock tests</List.Item>
            <List.Item>Detailed performance analytics</List.Item>
          </List>
          <List theme="primary">
            <List.Item>Personalised learning journey</List.Item>
            <List.Item>Adaptive learning to maximise engagement</List.Item>
            <List.Item>Comprehensive, teacher-approved content</List.Item>
            <List.Item>Unlimited, adaptive mock tests</List.Item>
            <List.Item>Detailed performance analytics</List.Item>
          </List>
          <List theme="tertiary">
            <List.Item>Personalised learning journey</List.Item>
            <List.Item>Adaptive learning to maximise engagement</List.Item>
            <List.Item>Comprehensive, teacher-approved content</List.Item>
            <List.Item>Unlimited, adaptive mock tests</List.Item>
            <List.Item>Detailed performance analytics</List.Item>
          </List>
        </Bucket.Section>
        <Bucket.Section>
          <List size="sm">
            <List.Item>Personalised learning journey</List.Item>
            <List.Item>Adaptive learning to maximise engagement</List.Item>
            <List.Item>Comprehensive, teacher-approved content</List.Item>
            <List.Item>Unlimited, adaptive mock tests</List.Item>
            <List.Item>Detailed performance analytics</List.Item>
          </List>
          <List theme="primary" size="sm">
            <List.Item>Personalised learning journey</List.Item>
            <List.Item>Adaptive learning to maximise engagement</List.Item>
            <List.Item>Comprehensive, teacher-approved content</List.Item>
            <List.Item>Unlimited, adaptive mock tests</List.Item>
            <List.Item>Detailed performance analytics</List.Item>
          </List>
          <List theme="tertiary" size="sm">
            <List.Item>Personalised learning journey</List.Item>
            <List.Item>Adaptive learning to maximise engagement</List.Item>
            <List.Item>Comprehensive, teacher-approved content</List.Item>
            <List.Item>Unlimited, adaptive mock tests</List.Item>
            <List.Item>Detailed performance analytics</List.Item>
          </List>
        </Bucket.Section>
      </Bucket>
      <Bucket name="Forms">
        <Bucket.Section>
          <Form
            onSubmit={() => null}
            css={{ display: 'flex', gap: '$3', flexDirection: 'column' }}
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
                label="Do you like checkboxes?"
                name="likeCheckboxes"
              />
              <CheckboxField
                label="If the issue is that it's overlapping content on the screen that we're trying to access in the Cypress test, we might want to just minimize the chat window in the test?"
                name="likeCheckboxes2"
              />
            </Box>
            <RadioGroupField name="options" label="Garys messages">
              <RadioGroupField.Item
                label="Lmao one of those labels is a lot less generic than all the others"
                value="1"
              />
              <RadioGroupField.Item
                label="Also: this looks cool! Very excited about it."
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
            <Tabs.Content value="tab1" css={{ p: '$3' }}>
              <Text>
                Looking to escape into the beautifully blocky world of LEGO?
                Well, our gameplay video for LEGO Builder's Journey has you
                covered. This atmospheric puzzle game features the most
                realistic and accurately rendered LEGO elements in a game, ever!
              </Text>
            </Tabs.Content>
            <Tabs.Content value="tab2" css={{ p: '$3' }}>
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

            <Carousel.Slider aria-label="Example carousel" css={{ mb: '$4' }}>
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
              This is the tooltip content, hello
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
            <Heading size="xs" css={{ mb: '$3' }}>
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
            <Heading size="sm" css={{ mb: '$4' }}>
              Dialog
            </Heading>
            <Text css={{ mb: '$4' }}>
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
