import { Box, CSS, Flex, Heading, Icon, Link, Text, Tooltip } from '@components'
import docgen from '@components//docgen.json'
import { Ok } from '@atom-learning/icons'
import { pascalCase } from 'pascal-case'
import * as React from 'react'
import { ComponentDoc } from 'react-docgen-typescript'

import { Cell, InlineCode, Table } from '.'

type PropsTableProps = {
  for: string
}

const sizeOrder = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']

const getComponentProps = (name): ComponentDoc =>
  docgen
    .filter(Boolean)
    .find((component) => component.displayName === pascalCase(name))

const columns = ['Prop', 'Type', 'Default', 'Required']

const Empty = () => <Text css={{ color: '$tonal400' }}>-</Text>

const WithTooltip = ({ children, content }) => (
  <Tooltip>
    <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
    <Tooltip.Content
      css={{
        width: '90vw',
        textAlign: 'center',
        lineHeight: 1.4,
        letterSpacing: '0.01em',
        fontSize: '$sm'
      }}
    >
      {content}
    </Tooltip.Content>
  </Tooltip>
)

const PropType = ({ name, type }) => {
  if (name === 'css') {
    return (
      <WithTooltip content="Override the component styles. Supports tokens, media queries and all stitches features">
        <Link
          size="sm"
          href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v16/index.d.ts#L1547"
        >
          <InlineCode>CSSProperties</InlineCode>
        </Link>
      </WithTooltip>
    )
  }
  if (name === 'as') {
    return (
      <WithTooltip content="Change the component to a different HTML tag or custom component">
        <Link
          size="sm"
          href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v16/index.d.ts#L2993"
        >
          <InlineCode>JSX.IntrinsicElements</InlineCode>
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
            <InlineCode key={value}>{value}</InlineCode>
            {index < values.length - 1 && ' | '}
          </React.Fragment>
        ))}
      </Flex>
    )
  }
  return <InlineCode>{type.name}</InlineCode>
}

const PropsTableContent: React.FC<{ css?: CSS; component: ComponentDoc }> = ({
  css,
  component
}) => (
  <Box css={{ overflow: 'auto', ...(css as any) }}>
    <Table>
      <thead>
        <tr>
          {columns.map((column) => (
            <Cell
              as="th"
              appearance="heading"
              key={column}
              css={
                ((column === 'Default' || column === 'Required') && {
                  width: 74
                }) ||
                (column === 'Prop' && {
                  width: '20%'
                })
              }
            >
              {column}
            </Cell>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(component.props).map(
          ([key, { name, type, defaultValue, required }]) => {
            if (type.name === 'never') return null

            return (
              <tr key={key}>
                <Cell css={{ pr: '$5' }}>
                  <InlineCode>{name}</InlineCode>
                </Cell>
                <Cell>
                  <PropType name={name} type={type} />
                </Cell>
                <Cell>
                  {defaultValue && defaultValue.value !== 'undefined' ? (
                    <InlineCode>{defaultValue.value}</InlineCode>
                  ) : (
                    <Empty />
                  )}
                </Cell>
                <Cell>
                  {required && name !== 'as' && name !== 'css' ? (
                    <Icon is={Ok} size="sm" />
                  ) : (
                    <Empty />
                  )}
                </Cell>
              </tr>
            )
          }
        )}
      </tbody>
    </Table>
  </Box>
)

export const PropsTable: React.FC<PropsTableProps> = ({
  for: componentName
}) => {
  if (componentName.includes(',')) {
    return (
      <Box css={{ mt: '$8' }}>
        <Heading as="h2" css={{ mb: '$5', color: '$tonal800' }}>
          API Reference
        </Heading>
        {componentName.split(',').map((component) => {
          const componentProps = getComponentProps(component)
          if (!componentProps) return null
          return (
            <React.Fragment key={component}>
              <Heading as="h3" size="sm" css={{ mb: '$4' }}>
                {component}
              </Heading>
              <PropsTableContent
                component={componentProps}
                css={{ mb: '$8', color: '$tonal800' }}
              />
            </React.Fragment>
          )
        })}
      </Box>
    )
  }

  const componentProps = getComponentProps(componentName)
  if (!componentProps) return null

  return (
    <Box css={{ mt: '$8' }}>
      <Heading as="h2" css={{ mb: '$4' }}>
        API Reference
      </Heading>
      <PropsTableContent component={componentProps} />
    </Box>
  )
}
