import * as React from 'react'
import {
  Text,
  Flex,
  Icon,
  Link,
  Tooltip,
  Table,
  Box
} from '@atom-learning/components'
import docgen from '@atom-learning/components/dist/docgen.json'
import { Ok } from '@atom-learning/icons'
import { pascalcase } from 'pascalcase'

const sizeOrder = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']

const getComponentProps = (name) =>
  docgen
    .filter(Boolean)
    .find((component) => component.displayName === name || component.displayName === pascalcase(name))

const columns = ['Prop', 'Type', 'Default', 'Required']


const WithTooltip = ({ children, text }) => (
  <Tooltip>
    <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
    <Tooltip.Content>
      <Text>{text}</Text>
    </Tooltip.Content>
  </Tooltip>
)

const PropType = ({ name, type }) => {
  if (name === 'css') {
    return (
      <WithTooltip text="Override the component styles. Supports tokens, media queries and all stitches features">
        <Link
          size="sm"
          href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v16/index.d.ts#L1547"
        >
          <code>CSSProperties</code>
        </Link>
      </WithTooltip>
    )
  }
  if (name === 'as') {
    return (
      <WithTooltip text="Change the component to a different HTML tag or custom component">
        <Link
          size="sm"
          href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v16/index.d.ts#L2993"
        >
          <code>JSX.IntrinsicElements</code>
        </Link>
      </WithTooltip>
    )
  }
  if (Array.isArray(type.value)) {
    let values = type.value
      .filter(({ value }) => value !== 'undefined')
      .filter(({ value }) => !value.startsWith('{ [x: string]'))
      .filter(({ value }) => !value.startsWith('{ "@sm"'))
      .filter(({ value }) => !value.startsWith('"true"'))

    if (values[0].value === 'false' && values[1].value === 'true') {
      values = [{ value: 'boolean' }]
    }

    if (
      values.some(({ value }) =>
        sizeOrder.map((size) => `"${size}"`).includes(`${value}`)
      )
    ) {
      const order = sizeOrder.map((size) => `"${size}"`)
      values = values.sort(
        (a, b) => order.indexOf(a.value) - order.indexOf(b.value)
      )
    }

    return (
      <Flex css={{ gap: '$2', flexWrap: 'wrap' }}>
        {values.map(({ value }, index) => (
          <React.Fragment key={value}>
            <code key={value}>{value}</code>
            {index < values.length - 1 && ' | '}
          </React.Fragment>
        ))}
      </Flex>
    )
  }
  return <code>{type.name}</code>
}

export const ComponentProps: React.FC<{ component }> = ({ component }) => {
  const componentProps = getComponentProps(component)
  if (!componentProps) return null

  return (
    <Box as="figure" css={{ width: '100%', p: 0, m: 0 }}>
      <Text as="figcaption" size='xs' css={{ mb: '$2', fontWeight: 'bold' }}>{component}</Text>
      <Box css={{ width: '100%', overflow: 'auto' }}>
        <Table css={{ width: '100%' }}>
          <Table.Header theme="light">
            <Table.Row>
              {columns.map((column) => (
                <Table.HeaderCell key={column}>{column}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body striped={false}>
            {Object.entries(componentProps.props).map(([key, { name, type, defaultValue, required }]) => {
              if (type.name === 'never') return null

              return (
                <Table.Row key={key}>
                  <Table.Cell><code>{name}</code></Table.Cell>
                  <Table.Cell><PropType name={name} type={type} /></Table.Cell>
                  <Table.Cell>
                    {defaultValue && defaultValue.value !== 'undefined' ? (
                      <code>{defaultValue.value}</code>
                    ) : "-"}
                  </Table.Cell>
                  <Table.Cell>
                    {required && name !== 'as' && name !== 'css' ? (
                      <Icon is={Ok} size="sm" />
                    ) : "-"}
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </Box>
    </Box>
  )
}
