import { Stack, Box, styled, Text } from '@atom-learning/components'
import * as React from 'react'

const StyledTokenListItem = styled(Box, {
  py: '$5',
  '&:not(:last-child)': {
    borderBottom: '1px solid $tonal3'
  }
})

type TTokenListItemProps = typeof StyledTokenListItem & {
  token: string
  value: string
}

const TokenListItemToken = ({ token }: { token: string }) => (
  <Text
    size="md"
    css={{
      color: '$tonal8',
      fontWeight: 600
    }}
  >
    {`$${token}`}
  </Text>
)

const TokenListItemValue: React.FC<typeof Text> = ({ css, ...rest }) => (
  <Text
    size="sm"
    css={{ color: '$tonal6', ...css }}
    {...rest} />
)

export const TokenListItem: React.FC<TTokenListItemProps> = ({
  token,
  value,
  children,
  ...rest
}) => {
  const valueWithoutRem = value.split('rem')[0]
  const isValueInRem = valueWithoutRem !== value
  return (
    <StyledTokenListItem
      {...rest}>
      <Stack
        key={token}
        gap={5}
        align="center"
        wrap="no-wrap"
      >
        <Box>
          <TokenListItemToken token={String(token)} />
        </Box>

        <Box css={{ flexGrow: 1 }}>
          <Stack gap="1" direction="column" justifyContent="center">
            <TokenListItemValue>{value}</TokenListItemValue>
            {isValueInRem && <TokenListItemValue>{`${+(valueWithoutRem) * 16}px`}</TokenListItemValue>}
          </Stack>
        </Box>

        <Box css={{ flexShrink: 0 }}>
          {children}
        </Box>
      </Stack>
    </StyledTokenListItem>
  )
}