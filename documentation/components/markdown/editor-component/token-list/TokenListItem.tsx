import { Flex, Box, styled, Text } from '@atom-learning/components'
import * as React from 'react'

const TokenListItemToken = ({ token }: { token: string }) => (
  <Text size="md" weight="bold" css={{ color: '$base10' }}>
    {`$${token}`}
  </Text>
)

const TokenListItemValue: React.FC<React.ComponentProps<typeof Text>> = ({
  css,
  ...rest
}) => <Text size="sm" css={{ color: '$base8', ...css }} {...rest} />

const StyledTokenListItem = styled(Box, {
  py: '$5',
  '&:not(:last-child)': {
    borderBottom: '1px solid $base4'
  }
})

type TTokenListItemProps = React.ComponentProps<typeof StyledTokenListItem> & {
  token: string
  value: string
}

export const TokenListItem: React.FC<TTokenListItemProps> = ({
  token,
  value,
  children,
  ...rest
}) => {
  const valueWithoutRem = value.split('rem')[0]
  const isValueInRem = valueWithoutRem !== value
  return (
    <StyledTokenListItem {...rest}>
      <Flex key={token} gap={5} align="center" wrap="nowrap">
        <Box>
          <TokenListItemToken token={String(token)} />
        </Box>

        <Box css={{ flexGrow: 1 }}>
          <Flex gap="1" direction="column" justify="center">
            <TokenListItemValue>{value}</TokenListItemValue>
            {isValueInRem && (
              <TokenListItemValue>{`${
                +valueWithoutRem * 16
              }px`}</TokenListItemValue>
            )}
          </Flex>
        </Box>

        <Box css={{ flexShrink: 0 }}>{children}</Box>
      </Flex>
    </StyledTokenListItem>
  )
}
