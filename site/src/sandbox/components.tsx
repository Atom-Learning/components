// @ts-nocheck
import {
  Accordion,
  ActionIcon,
  AlertProvider,
  Box,
  Button,
  Carousel,
  CheckboxField,
  Combobox,
  DateInput,
  Dialog,
  Divider,
  DropdownMenu,
  Flex,
  Form,
  Heading,
  Icon,
  Image,
  InlineFieldWrapper,
  Input,
  InputField,
  Label,
  Link,
  List,
  Loader,
  MarkdownContent,
  NotificationBadge,
  PasswordField,
  Popover,
  ProgressBar,
  RadioButtonField,
  RadioCard,
  RadioCardGroup,
  SearchInput,
  Select,
  SelectField,
  Slider,
  Stack,
  StackContent,
  Stepper,
  Switch,
  Table,
  Tabs,
  Text,
  TextareaField,
  toast,
  ToastProvider,
  Tooltip,
  useAlert,
  ValidationError,
  Video
} from '@atom-learning/components'
import {
  Add,
  ArrowLeft,
  ArrowRight,
  BatteryMedium,
  Bin,
  Controls,
  Crossing,
  Download,
  Eye,
  EyeCrossed,
  Paperclip,
  Sun,
  VolumeLoud,
  Wheelchair
} from '@atom-learning/icons'
import logo from '@atom-learning/theme/lib/assets/logo.svg'
import logoLight from '@atom-learning/theme/lib/assets/logo-light.svg'
import logoPrimary from '@atom-learning/theme/lib/assets/logo-primary.svg'
import * as React from 'react'

import { Group } from '../components'

const AlertComponent = () => {
  const { showAlert } = useAlert()

  return (
    <Button
      onClick={() => {
        showAlert({
          id: 'alert-dialog',
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

const Page = () => (
  <>
    <Divider css={{ my: '$9' }} />
    <Group name="Assets">
      <Image src={logo} />
      <Text size="sm" css={{ mt: '$3', mb: '$6', color: '$tonal600' }}>
        @atom-learning/theme/lib/assets/logo.svg
      </Text>
      <Group.Separator />
      <Box css={{ m: '-$2', p: '$2', bg: '$tonal100', width: 'max-content' }}>
        <Image src={logoLight} />
      </Box>
      <Text size="sm" css={{ mt: '$3', mb: '$6', color: '$tonal600' }}>
        @atom-learning/theme/lib/assets/logo-light.svg
      </Text>
      <Group.Separator />
      <Image src={logoPrimary} />
      <Text size="sm" css={{ mt: '$3', mb: '$6', color: '$tonal600' }}>
        @atom-learning/theme/lib/assets/logo-primary.svg
      </Text>
    </Group>
    <Group name="Typography">
      <Group.Section gap="$6" css={{ flexDirection: 'column' }}>
        <Heading size="xs">This is a heading size xs</Heading>
        <Heading size="sm">This is a heading size sm</Heading>
        <Heading size="md">This is a heading size md</Heading>
        <Heading size="lg">This is a heading size lg</Heading>
        <Heading size="xl">This is a heading size xl</Heading>
        <Heading size="xxl">This is a heading size xxl</Heading>
        <Text size="xs">
          This is a xs Paragraph. A really long paragraph of text, to
          demonstrate prose text, like for example, the kind you might read in a
          blog post. The reason we're using prose here is because the most
          common use case for this container size is longform text. So we're
          previewing some longform text here so we can make sure the container
          width provides an optimal line length for this font size.
        </Text>
        <Text size="sm">
          This is a sm Paragraph. A really long paragraph of text, to
          demonstrate prose text, like for example, the kind you might read in a
          blog post. The reason we're using prose here is because the most
          common use case for this container size is longform text. So we're
          previewing some longform text here so we can make sure the container
          width provides an optimal line length for this font size.
        </Text>
        <Text>
          This is a Paragraph. A really long paragraph of text, to demonstrate
          prose text, like for example, the kind you might read in a blog post.
          The reason we're using prose here is because the most common use case
          for this container size is longform text. So we're previewing some
          longform text here so we can make sure the container width provides an
          optimal line length for this font size.
        </Text>
        <Text size="lg">
          This is a lg Paragraph. A really long paragraph of text, to
          demonstrate prose text.
        </Text>
        <Text size="xl">
          This is a xl Paragraph. A really long paragraph of text, to
          demonstrate prose text.
        </Text>
      </Group.Section>
      <Group.Section>
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
      </Group.Section>
    </Group>
    <Group name="Typography spacing">
      <Group.Section>
        <StackContent>
          <Heading>This is a heading</Heading>
          <Text>
            This is a Paragraph. A really long paragraph of text, to demonstrate
            prose text, like for example, the kind you might read in a blog
            post.
          </Text>
          <Text>
            This is a Paragraph. A really long paragraph of text, to demonstrate
            prose text, like for example, the kind you might read in a blog
            post.
          </Text>
          <List>
            <List.Item>This is a List</List.Item>
            <List.Item>With multiple List.Items</List.Item>
            <List.Item>And even more content here</List.Item>
          </List>
          <Text>
            This is a Paragraph. A really long paragraph of text, to demonstrate
            prose text, like for example, the kind you might read in a blog
            post.
          </Text>
        </StackContent>
      </Group.Section>
      <Group.Section>
        <MarkdownContent
          content={`
### This is a heading

This is a Paragraph. A really long paragraph of text, to demonstrate
prose text, like for example, the kind you might read in a blog
post.

This is a Paragraph. A really long paragraph of text, to demonstrate
prose text, like for example, the kind you might read in a blog
post.

- This is a List
- With multiple List.Items
- And even more content here

This is a Paragraph. A really long paragraph of text, to demonstrate
prose text, like for example, the kind you might read in a blog
post.
          `}
        />
      </Group.Section>
    </Group>
    <Group name="Buttons">
      <Group.Section>
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
        <Group.Separator />
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
        <Group.Separator />
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
        <Group.Separator />
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
      </Group.Section>
      <Group.Section>
        <Button>Button</Button>
        <Button appearance="outline">Button</Button>
        <Button theme="success">Button</Button>
        <Button theme="warning">Button</Button>
        <Button theme="danger">Button</Button>
        <Group.Separator />
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
        <Group.Separator />
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
        <Group.Separator />
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
      </Group.Section>
      <Group.Section>
        <Button size="sm">
          <Icon is={Add} />
          Icon
        </Button>
        <Button size="sm" appearance="outline">
          <Icon is={Add} />
          Icon
        </Button>
        <Button size="sm" theme="success">
          <Icon is={Add} />
          Icon
        </Button>
        <Button size="sm" theme="warning">
          <Icon is={Add} />
          Icon
        </Button>
        <Button size="sm" theme="danger">
          <Icon is={Add} />
          Icon
        </Button>
        <Group.Separator />
        <Button size="sm">
          Icon
          <Icon is={ArrowRight} />
        </Button>
        <Button size="sm" appearance="outline">
          Icon
          <Icon is={ArrowRight} />
        </Button>
        <Button size="sm" theme="success">
          Icon
          <Icon is={ArrowRight} />
        </Button>
        <Button size="sm" theme="warning">
          Icon
          <Icon is={ArrowRight} />
        </Button>
        <Button size="sm" theme="danger">
          Icon
          <Icon is={ArrowRight} />
        </Button>
        <Group.Separator />
        <Button>
          <Icon is={Add} />
          Icon
        </Button>
        <Button appearance="outline">
          <Icon is={Add} />
          Icon
        </Button>
        <Button theme="success">
          <Icon is={Add} />
          Icon
        </Button>
        <Button theme="warning">
          <Icon is={Add} />
          Icon
        </Button>
        <Button theme="danger">
          <Icon is={Add} />
          Icon
        </Button>
        <Group.Separator />
        <Button>
          Icon
          <Icon is={ArrowRight} />
        </Button>
        <Button appearance="outline">
          Icon
          <Icon is={ArrowRight} />
        </Button>
        <Button theme="success">
          Icon
          <Icon is={ArrowRight} />
        </Button>
        <Button theme="warning">
          Icon
          <Icon is={ArrowRight} />
        </Button>
        <Button theme="danger">
          Icon
          <Icon is={ArrowRight} />
        </Button>
      </Group.Section>
      <Group.Section>
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
      </Group.Section>
    </Group>
    <Group name="Action Icons">
      <Group.Section>
        <ActionIcon label="Attach a file" appearance="simple" theme="neutral">
          <Icon is={VolumeLoud} size="sm" />
        </ActionIcon>
        <ActionIcon
          label="Attach a file"
          appearance="simple"
          theme="neutral"
          size="lg"
        >
          <Icon is={VolumeLoud} />
        </ActionIcon>
      </Group.Section>
      <Group.Section>
        <ActionIcon label="Attach a file" appearance="simple">
          <Icon is={VolumeLoud} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="outline">
          <Icon is={Paperclip} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="solid">
          <Icon is={EyeCrossed} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="outline" isRounded>
          <Icon is={Download} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="solid" isRounded>
          <Icon is={Bin} size="sm" />
        </ActionIcon>
        <Group.Separator />
        <ActionIcon label="Attach a file" appearance="simple" theme="success">
          <Icon is={VolumeLoud} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="outline" theme="success">
          <Icon is={Paperclip} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="solid" theme="success">
          <Icon is={EyeCrossed} size="sm" />
        </ActionIcon>
        <ActionIcon
          label="Attach a file"
          appearance="outline"
          theme="success"
          isRounded
        >
          <Icon is={Download} size="sm" />
        </ActionIcon>
        <ActionIcon
          label="Attach a file"
          theme="success"
          appearance="solid"
          isRounded
        >
          <Icon is={Bin} size="sm" />
        </ActionIcon>
        <Group.Separator />
        <ActionIcon label="Attach a file" appearance="simple" theme="warning">
          <Icon is={VolumeLoud} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="outline" theme="warning">
          <Icon is={Paperclip} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="solid" theme="warning">
          <Icon is={EyeCrossed} size="sm" />
        </ActionIcon>
        <ActionIcon
          label="Attach a file"
          appearance="outline"
          theme="warning"
          isRounded
        >
          <Icon is={Download} size="sm" />
        </ActionIcon>
        <ActionIcon
          label="Attach a file"
          theme="warning"
          appearance="solid"
          isRounded
        >
          <Icon is={Bin} size="sm" />
        </ActionIcon>
        <Group.Separator />
        <ActionIcon label="Attach a file" appearance="simple" theme="danger">
          <Icon is={VolumeLoud} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="outline" theme="danger">
          <Icon is={Paperclip} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="solid" theme="danger">
          <Icon is={EyeCrossed} size="sm" />
        </ActionIcon>
        <ActionIcon
          label="Attach a file"
          appearance="outline"
          theme="danger"
          isRounded
        >
          <Icon is={Download} size="sm" />
        </ActionIcon>
        <ActionIcon
          label="Attach a file"
          theme="danger"
          appearance="solid"
          isRounded
        >
          <Icon is={Bin} size="sm" />
        </ActionIcon>
        <Group.Separator />
        <ActionIcon label="Attach a file" appearance="simple" disabled>
          <Icon is={VolumeLoud} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="outline" disabled>
          <Icon is={Paperclip} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="solid" disabled>
          <Icon is={EyeCrossed} size="sm" />
        </ActionIcon>
        <ActionIcon
          label="Attach a file"
          appearance="outline"
          isRounded
          disabled
        >
          <Icon is={Download} size="sm" />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="solid" isRounded disabled>
          <Icon is={Bin} size="sm" />
        </ActionIcon>
      </Group.Section>
      <Group.Section>
        <ActionIcon size="lg" label="Attach a file" appearance="simple">
          <Icon is={VolumeLoud} />
        </ActionIcon>
        <ActionIcon size="lg" label="Attach a file" appearance="outline">
          <Icon is={Paperclip} />
        </ActionIcon>
        <ActionIcon size="lg" label="Attach a file" appearance="solid">
          <Icon is={EyeCrossed} />
        </ActionIcon>
        <ActionIcon
          size="lg"
          label="Attach a file"
          appearance="outline"
          isRounded
        >
          <Icon is={Download} />
        </ActionIcon>
        <ActionIcon
          size="lg"
          label="Attach a file"
          appearance="solid"
          isRounded
        >
          <Icon is={Bin} />
        </ActionIcon>
        <Group.Separator />
        <ActionIcon
          size="lg"
          label="Attach a file"
          appearance="simple"
          disabled
        >
          <Icon is={VolumeLoud} />
        </ActionIcon>
        <ActionIcon
          size="lg"
          label="Attach a file"
          appearance="outline"
          disabled
        >
          <Icon is={Paperclip} />
        </ActionIcon>
        <ActionIcon size="lg" label="Attach a file" appearance="solid" disabled>
          <Icon is={EyeCrossed} />
        </ActionIcon>
        <ActionIcon
          size="lg"
          label="Attach a file"
          appearance="outline"
          isRounded
          disabled
        >
          <Icon is={Download} />
        </ActionIcon>
        <ActionIcon
          size="lg"
          label="Attach a file"
          appearance="solid"
          isRounded
          disabled
        >
          <Icon is={Bin} />
        </ActionIcon>
      </Group.Section>
    </Group>
    <Group name="Links">
      <Group.Section direction="column" gap="$6">
        <Text size="sm">
          This is a sm Paragraph with a <Link>Link</Link>. A really long
          paragraph of text, to demonstrate prose text, like for example.
        </Text>
        <Text>
          This is a Paragraph with a <Link>Link</Link>. A really long paragraph
          of text, to demonstrate prose text, like for example.
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
          <Icon is={ArrowLeft} />
          This is a Link with an icon
        </Link>
        <Link>
          This is a Link with an icon
          <Icon is={ArrowRight} />
        </Link>
      </Group.Section>
    </Group>
    <Group name="Icons">
      <Group.Section>
        <Icon size="sm" is={BatteryMedium} />
        <Icon size="sm" css={{ color: '$primary' }} is={Crossing} />
        <Icon size="sm" css={{ color: '$success' }} is={Sun} />
        <Icon size="sm" css={{ color: '$warning' }} is={Wheelchair} />
        <Icon size="sm" css={{ color: '$danger' }} is={EyeCrossed} />
      </Group.Section>
      <Group.Section>
        <Icon is={BatteryMedium} />
        <Icon css={{ color: '$primary' }} is={Crossing} />
        <Icon css={{ color: '$success' }} is={Sun} />
        <Icon css={{ color: '$warning' }} is={Wheelchair} />
        <Icon css={{ color: '$danger' }} is={EyeCrossed} />
      </Group.Section>
      <Group.Section>
        <Icon size="lg" is={BatteryMedium} />
        <Icon css={{ color: '$primary' }} size="lg" is={Crossing} />
        <Icon css={{ color: '$success' }} size="lg" is={Sun} />
        <Icon css={{ color: '$warning' }} size="lg" is={Wheelchair} />
        <Icon css={{ color: '$danger' }} size="lg" is={EyeCrossed} />
      </Group.Section>
    </Group>
    <Group name="Tables">
      <Table css={{ borderCollapse: 'collapse', mb: '$6' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Rakim</Table.Cell>
            <Table.Cell>Jackson</Table.Cell>
            <Table.Cell>35</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Evelyn</Table.Cell>
            <Table.Cell>Smith</Table.Cell>
            <Table.Cell>27</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Miguel</Table.Cell>
            <Table.Cell>Fernandez</Table.Cell>
            <Table.Cell>52</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.FooterCell>Footer 1</Table.FooterCell>
            <Table.FooterCell>Footer 2</Table.FooterCell>
            <Table.FooterCell>Footer 3</Table.FooterCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <Table css={{ borderCollapse: 'collapse' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Rakim</Table.Cell>
            <Table.Cell>Jackson</Table.Cell>
            <Table.Cell>
              <Stack>
                <Button size="sm" appearance="outline">
                  <Icon is={Eye} />
                  View
                </Button>
                <ActionIcon appearance="outline" label="Delete" isRounded>
                  <Icon is={Bin} size="sm" />
                </ActionIcon>
              </Stack>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Evelyn</Table.Cell>
            <Table.Cell>Smith</Table.Cell>
            <Table.Cell>
              <Stack>
                <Button size="sm" appearance="outline">
                  <Icon is={Eye} />
                  View
                </Button>
                <ActionIcon appearance="outline" label="Delete" isRounded>
                  <Icon is={Bin} size="sm" />
                </ActionIcon>
              </Stack>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Miguel</Table.Cell>
            <Table.Cell>Fernandez</Table.Cell>
            <Table.Cell>
              <Stack>
                <Button size="sm" appearance="outline">
                  <Icon is={Eye} />
                  View
                </Button>
                <ActionIcon appearance="outline" label="Delete" isRounded>
                  <Icon is={Bin} size="sm" />
                </ActionIcon>
              </Stack>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Group>
    <Group name="Loader">
      <Group.Section>
        <Loader size="sm" />
        <Loader />
        <Loader size="lg" />
        <Group.Separator />
        <Loader size="sm" css={{ color: '$primary' }} />
        <Loader css={{ color: '$primary' }} />
        <Loader size="lg" css={{ color: '$primary' }} />
      </Group.Section>
    </Group>
    <Group name="Progress bar">
      <Group.Section>
        <ProgressBar aria-label="Completion rate" value={20} />
        <ProgressBar theme="success" value={40} aria-label="Completion rate" />
        <ProgressBar theme="warning" value={60} aria-label="Completion rate" />
        <ProgressBar theme="danger" value={80} aria-label="Completion rate" />
      </Group.Section>
    </Group>
    <Group name="Alert dialog">
      <Group.Section>
        <AlertComponent />
      </Group.Section>
    </Group>
    <Group name="Toast">
      <Group.Section>
        <Button onClick={() => toast('This is an informative toast')}>
          Click for standard toast
        </Button>
        <Button onClick={() => toast.success('This a successful toast')}>
          Click for success toast
        </Button>
        <Button onClick={() => toast.error('This is an error toast')}>
          Click for error toast
        </Button>
        <Button
          onClick={() => {
            const id = toast.loading('This is a loading toast')
            setTimeout(() => {
              toast.success('This is now a successful toast', { id })
            }, 3000)
          }}
        >
          Click for loading toast
        </Button>
      </Group.Section>
    </Group>
    <Group name="Forms">
      <Group.Section>
        <Form
          onSubmit={() => null}
          css={{ display: 'flex', gap: '$6', flexDirection: 'column' }}
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
          <CheckboxField
            label="This is a checkbox"
            name="likeCheckboxes"
            description="This is the description. The reason we're using prose here is because the most common use case for this container size is longform text."
          />
          <RadioButtonField
            direction="row"
            name="pronoun"
            label="Legend for radio fields"
            description="This is the description. The reason we're using prose here is because the most common."
          >
            <RadioButtonField.Item label="He/Him" value="checkbox-row-1" />
            <RadioButtonField.Item label="She/Her" value="checkbox-row-2" />
            <RadioButtonField.Item label="They/Their" value="checkbox-row-3" />
          </RadioButtonField>
          <RadioButtonField name="options" label="Legend for radio fields">
            <RadioButtonField.Item label="This is a radio button" value="1" />
            <RadioButtonField.Item
              label="This is a radio button to demonstrate
            prose text, like for example, the kind you might read in a blog
            post. The reason we're using prose here is because the most common
            use case for this container size is longform text."
              value="2"
            />
            <RadioButtonField.Item
              disabled
              label="This is a disabled radio button"
              value="3"
            />
          </RadioButtonField>
          <InlineFieldWrapper
            css={{ width: 'max-content' }}
            label="Do a switch thing"
            direction="reverse"
            align="center"
          >
            <Switch />
          </InlineFieldWrapper>

          <PasswordField
            name="password"
            prompt={{
              link: '/forgot-password',
              label: 'Forgotten your password?'
            }}
            placeholder="Your password"
          />
          <SearchInput name="password" placeholder="Search" />
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
          <RadioCardGroup align="right" size="lg" isFullWidth defaultValue="1">
            <RadioCard value="1">
              <Flex css={{ flexDirection: 'row', alignContent: 'center' }}>
                <Text css={{ mr: '$4' }} size="sm">
                  £99
                </Text>
                <Heading size="xs">This is a radio card option</Heading>
              </Flex>
            </RadioCard>
            <RadioCard value="2">
              <Flex css={{ flexDirection: 'row', alignContent: 'center' }}>
                <Text css={{ mr: '$4' }} size="sm">
                  £109
                </Text>
                <Heading size="xs">This is another radio card option</Heading>
              </Flex>
            </RadioCard>
            <RadioCard value="3">
              <Flex css={{ flexDirection: 'row', alignContent: 'center' }}>
                <Text css={{ mr: '$4' }} size="sm">
                  £149
                </Text>
                <Heading size="xs">
                  And a further additional radio card option
                </Heading>
              </Flex>
            </RadioCard>
          </RadioCardGroup>
          <Stack direction="row">
            <Input
              size="sm"
              placeholder="Here is a small field"
              css={{ width: '30%' }}
            />
            <SearchInput
              size="sm"
              placeholder="Here is a small search field"
              css={{ width: '30%' }}
            />
            <Select
              size="sm"
              placeholder="Please select a small fruit"
              css={{ width: '30%' }}
            >
              <option value="blueberries">Blueberries</option>
              <option value="grapes">Grapes</option>
            </Select>
          </Stack>
          <Stack gap="2" direction="column">
            <Label>Date Input</Label>
            <DateInput />
          </Stack>
          <Stack gap="2" direction="column">
            <Label>Initial Date</Label>
            <DateInput initialDate={new Date()} />
          </Stack>
          <Stack gap="2" direction="column">
            <Label>Date Format "YYYY/MM/DD"</Label>
            <DateInput dateFormat="YYYY/MM/DD" />
          </Stack>
          <Stack gap="2" direction="column">
            <Label>Dayzed customisation</Label>
            <DateInput firstDayOfWeek={0} />
          </Stack>
          <Stack gap="2" direction="column">
            <Label>Translations</Label>
            <DateInput
              weekdayNames={['D', 'L', 'M', 'X', 'J', 'V', 'S']}
              monthNames={[
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
              ]}
            />
          </Stack>
          <Stack gap="2" direction="column">
            <Label>Slider</Label>
            <Slider defaultValue={[50]} css={{ width: '320px' }} />
            <Slider defaultValue={[25, 75]} css={{ width: '320px' }} />
            <Slider defaultValue={[50]} css={{ width: '320px' }}>
              <Slider.Steps
                min={0}
                max={100}
                steps={[
                  { value: 0, label: 'min' },
                  { value: 50, label: 'mid' },
                  { value: 100, label: 'max' }
                ]}
              />
            </Slider>
            <Slider defaultValue={[50]} css={{ width: '320px' }}>
              <Slider.Value value={[50]} />
            </Slider>
            <Box css={{ p: '$6', bg: '$tonal100' }}>
              <Slider
                theme="light"
                defaultValue={[50]}
                css={{ width: '320px' }}
              />
            </Box>
          </Stack>
        </Form>
      </Group.Section>
      <Group.Section>
        <Form
          onSubmit={() => null}
          css={{
            display: 'flex',
            gap: '$6',
            flexDirection: 'column',
            width: '100%'
          }}
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
                validation={{ required: 'This is the validation error' }}
              />
              <RadioButtonField
                name="options-error"
                label="Legend for radio fields"
                validation={{ required: 'This is the validation error' }}
              >
                <RadioButtonField.Item
                  label="This is a radio button"
                  value="1"
                />
                <RadioButtonField.Item
                  label="This is another radio button"
                  value="2"
                />
              </RadioButtonField>
            </>
          )}
        />
      </Group.Section>
    </Group>
    <Group name="Tabs">
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Tabs.Content>
        <Tabs.Content value="tab2" css={{ p: '$4' }}>
          <Text>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </Text>
        </Tabs.Content>
        <Tabs.Content value="tab3" css={{ p: '$4' }}>
          <Text>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae.
          </Text>
        </Tabs.Content>
      </Tabs>
    </Group>
    <Group name="Media">
      <Group.Section>
        <Image
          src="https://atomlearning.co.uk/images/key-img.png"
          alt="An Atom Learning user riding a pencil rocket"
        />
      </Group.Section>
      <Group.Section css={{ flexDirection: 'column' }}>
        <Video css={{ width: 400 }} id="226053498" />
      </Group.Section>
    </Group>
    <Group name="Carousel">
      <Carousel
        slideWidth={200}
        slideHeight={200}
        numSlides={3}
        css={{ position: 'relative' }}
      >
        <Carousel.ArrowPrevious css={{ position: 'absolute', left: '$2' }} />
        <Carousel.ArrowNext css={{ position: 'absolute', right: '$2' }} />
        <Carousel.Slider aria-label="Example carousel" css={{ mb: '$6' }}>
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
    </Group>
    <Group name="Surfaces">
      <Group.Section>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button>Hover for tooltip</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>This is the tooltip content</Tooltip.Content>
        </Tooltip>
        <Popover>
          <Popover.Trigger>
            <Button>Click for popover</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text size="sm">
              The `Popover` can display any type of element as a trigger and has
              the content hidden by default
            </Text>
          </Popover.Content>
        </Popover>
        <Dialog>
          <Dialog.Trigger asChild>
            <Button>Click for dialog</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Heading size="sm" css={{ mb: '$6' }}>
              Dialog
            </Heading>
            <Text css={{ mb: '$6' }}>
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
      </Group.Section>
      <Group.Section>
        <Dialog>
          <Dialog.Trigger asChild>
            <Button>Click for nested surfaces</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Heading size="sm" css={{ mb: '$6' }}>
              Dialog
            </Heading>
            <Text css={{ mb: '6' }}>
              The `Dialog` can display any type of element as a trigger and has
              the content hidden by default
            </Text>
            <Popover>
              <Popover.Trigger asChild>
                <Link size="sm">Click for popover</Link>
              </Popover.Trigger>
              <Popover.Content>
                <Text size="sm">
                  The `Popover` can display any{' '}
                  <Tooltip>
                    <Tooltip.Trigger asChild>
                      <Link>type of element</Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content>
                      This is the tooltip content
                    </Tooltip.Content>
                  </Tooltip>{' '}
                  as a trigger and has the content hidden by default
                </Text>
              </Popover.Content>
            </Popover>
            <Flex css={{ justifyContent: 'flex-end' }}>
              <Button appearance="outline" size="sm" as={Dialog.Close}>
                Close Dialog
              </Button>
            </Flex>
          </Dialog.Content>
        </Dialog>
      </Group.Section>
    </Group>
    <Group name="Accordion">
      <Accordion type="single" defaultValue="1">
        <Accordion.Item value="1">
          <Accordion.Trigger>Accordion Header 1</Accordion.Trigger>
          <Accordion.Content css={{ p: '$4' }}>
            Accordion content 1
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Trigger>Accordion Header 2</Accordion.Trigger>
          <Accordion.Content css={{ p: '$4' }}>
            Accordion content 2
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Group>
    <Group name="Stepper">
      <Stepper stepCount={3}>
        <Stepper.StepBack>Back</Stepper.StepBack>
        <Stepper.Steps />
        <Stepper.StepForward>Next</Stepper.StepForward>
      </Stepper>
    </Group>
    <Group name="Dropdown menu">
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button>Click me</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sideOffset={16}>
          <DropdownMenu.Item onClick={() => alert('Great clicking!')}>
            Item 1
          </DropdownMenu.Item>
          <DropdownMenu.Item>Item 2</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.LinkItem href="/logout">Log Out</DropdownMenu.LinkItem>
        </DropdownMenu.Content>
      </DropdownMenu>
    </Group>
    <Group name="Notification Badge">
      <Group.Section>
        <NotificationBadge value={3}>
          <ActionIcon appearance="outline" size="lg" isRounded>
            <Icon is={Controls} />
          </ActionIcon>
        </NotificationBadge>
      </Group.Section>
    </Group>
  </>
)

const WrappedPage = () => (
  <ToastProvider>
    <AlertProvider>
      <Page />
    </AlertProvider>
  </ToastProvider>
)

export default WrappedPage
