import { Box, Divider, Flex, Text } from '@atom-learning/components'
import * as React from 'react'

type GroupProps = {
  name: string
  children: React.ReactNode
}

const Section = ({ gap = '$2', direction = 'row', css = {}, ...props }) => (
  <Flex
    css={{
      flexWrap: 'wrap',
      flexDirection: direction,
      mb: '$6',
      gap,
      ...(css as any)
    }}
    {...props}
  />
)
const Separator = () => <Box css={{ width: '100%' }} />

export const Group: React.FC<GroupProps> & {
  Section: typeof Section
  Separator: typeof Separator
} = ({ name, children }) => (
  <Box css={{ '@md': { mx: '-$8' }, mb: '$8' }}>
    <Text size="xl" as="h2" css={{ fontWeight: 600, mb: '$6' }}>
      {name}
    </Text>
    {children}
    <Divider css={{ my: '$8' }} />
  </Box>
)

Group.Section = Section
Group.Separator = Separator
