import type { CSS } from '@atom-learning/components'
import { Box, Divider, Flex, Text } from '@atom-learning/components'
import * as React from 'react'

type ScaleProps = {
  children: (value: string | string[]) => React.ReactNode
  displayValue?: boolean
  scale: Record<string, string | string[]>
  css?: CSS
}

const ScaleKey = ({ id }: { id: string }) => (
  <Text
    css={{
      color: '$tonal700',
      fontSize: '$md',
      fontWeight: 600,
      minWidth: 20,
      mr: '$4'
    }}
  >
    {`$${id}`}
  </Text>
)

const ScaleValue: React.FC<{ css?: CSS }> = ({ children, css }) => (
  <Text css={{ color: '$tonal300', fontSize: '$sm', ...css }}>{children}</Text>
)

export const Scale: React.FC<ScaleProps> = ({
  scale,
  children,
  displayValue = true,
  css,
  ...props
}) => (
  <Box css={{ overflow: 'hidden', ...css }} {...props}>
    {Object.entries(scale).map(([key, value]) => (
      <Flex
        key={key}
        css={{
          alignItems: 'center',
          justifyContent: 'space-between',
          py: '$5',
          '&:not(:last-child)': {
            borderBottom: '1px solid $tonal100'
          }
        }}
      >
        <Flex css={{ mr: '$4', alignItems: 'center' }}>
          <ScaleKey id={String(key)} />
          {displayValue &&
            (Array.isArray(value) ? (
              value.map((val, index) => (
                <React.Fragment key={val}>
                  <ScaleValue>{val}</ScaleValue>
                  {index < value.length - 1 && (
                    <Divider
                      css={{ mx: '$2', minHeight: '$1' }}
                      orientation="vertical"
                    />
                  )}
                </React.Fragment>
              ))
            ) : (
              <Flex css={{ flexDirection: 'column' }}>
                <ScaleValue css={{ mb: '$3' }}>{value}</ScaleValue>
                <ScaleValue>{`${+value.split('rem')[0] * 16}px`}</ScaleValue>
              </Flex>
            ))}
        </Flex>
        {children(value)}
      </Flex>
    ))}
  </Box>
)
