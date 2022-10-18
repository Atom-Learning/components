import { Box, Divider, Heading, Link, List, Text, Table } from '@atom-learning/components'
import * as React from 'react'

import { ComponentProps } from './editor-component/ComponentProps'
import {
    ColorTokenList,
} from './editor-component/ColorTokenList'
import { InlineCode } from './InlineCode'
import { CodeBlock } from './editor-component/CodeBlock'
import { IconTokenList } from './editor-component/IconTokenList'
import { SizeTokenList } from './editor-component/SizeTokenList'
import { SpaceTokenList } from './editor-component/SpaceTokenList'
import { FontFamilyTokenList } from './editor-component/FontFamilyTokenList'
import { FontSizeTokenList } from './editor-component/FontSizeTokenList'
import { RadiusTokenList } from './editor-component/RadiusTokenList'
import { ShadowTokenList } from './editor-component/ShadowTokenList'

export const components = {
    h2: (props) => (
        <Heading
            {...props}
            size="md"
            as="h2"
            css={{ fontWeight: 600 }}
        />
    ),
    h3: (props) => (
        <Heading {...props} as="h3" size="sm" />
    ),
    h4: (props) => (
        <Heading {...props} as="h4" size="xs" />
    ),
    h5: (props) => (
        <Heading {...props} as="h5" size="xs" />
    ),
    h6: (props) => (
        <Heading {...props} as="h6" size="xs" />
    ),
    code: InlineCode,
    pre: CodeBlock,
    p: (props) => <Text {...props} />,
    ul: (props) => <List {...props} />,
    li: List.Item,
    blockquote: (props) => (
        <Text
            {...props}
            as="blockquote"
            css={{
                pl: '$5',
                color: '$tonal7',
                borderLeft: '2px solid $colors$tonal3'
            }}
        >
            {props.children}
        </Text>
    ),
    a: Link,
    hr: (props) => <Divider {...props} />,
    Text,
    Box,
    table: Table,
    thead: Table.Header,
    th: Table.HeaderCell,
    tbody: Table.Body,
    tr: Table.Row,
    td: Table.Cell,
    tfoot: Table.Footer,
    ComponentProps,
    CodeBlock,
    ColorTokenList,
    IconTokenList,
    SizeTokenList,
    SpaceTokenList,
    FontFamilyTokenList,
    FontSizeTokenList,
    RadiusTokenList,
    ShadowTokenList
}
